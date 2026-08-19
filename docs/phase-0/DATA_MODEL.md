# Proposed Data Model

Status: Phase 0 proposal, awaiting approval. This is the proposed Prisma schema covering every entity in spec section 74. Field lists are complete for load-bearing models and abbreviated for simple ones. The schema will be committed as `prisma/schema.prisma` in Phase 1.

## Conventions

- All ids are `cuid()` strings.
- All models carry `createdAt` and `updatedAt` unless stated.
- Content tables (Concept, Lesson, Question, Scenario, Source, TaxRule) are seeded from versioned files in `/data` and are read-only at runtime. User-state tables reference them by stable content ids.
- Monetary values are `Decimal`, never `Float`. Rates are `Decimal` fractions (0.0007 for a 0.07% TER).

## Identity and profile

```prisma
model User {
  id            String   @id @default(cuid())
  email         String   @unique
  name          String?
  profile       LearningProfile?
  // relations: attempts, schedules, portfolios, accounts, goals, ips, events
}

model LearningProfile {
  id                    String  @id @default(cuid())
  userId                String  @unique
  investmentExperience  String          // none | some | active
  preferredSessionMin   Int             // 3 | 5 | 10 | 20
  audioPreference       Boolean @default(true)
  objectives            Json            // structured onboarding answers
  horizonYears          Int?
  baselineCompletedAt   DateTime?
}
```

## Curriculum and content

```prisma
model Course {
  id       String   @id            // "core"
  title    String
  version  String                  // content package version
  modules  Module[]
}

model Module {                     // = a Level in spec section 39
  id        String  @id            // "level-07-fixed-income"
  courseId  String
  order     Int
  title     String
  lessons   Lesson[]
}

model Lesson {
  id            String   @id       // "l-074-what-is-a-bond"
  moduleId      String
  order         Int
  title         String
  hook          String             // segment 1 text
  durationSec   Int                // target 420-600
  transcript    String
  audio         LessonAudio[]
  visuals       LessonVisual[]
  objectives    LearningObjective[]
  concepts      Concept[]          // concepts taught
  contentVersion String
}

model LessonAudio {
  id           String @id
  lessonId     String
  variant      String              // "tts-v1", "human-v1"
  url          String
  durationSec  Int
  scriptVersion String
}

model LessonVisual {
  id        String @id
  lessonId  String
  kind      String                 // diagram | chart | timeline | statement | simulation
  spec      Json                   // typed visual spec rendered by the chart layer
  caption   String
}

model LearningObjective {
  id        String @id
  lessonId  String
  conceptId String
  cognition String                 // recognition | recall | application | transfer | decision
  statement String
}

model Concept {
  id             String  @id       // "c-bond-duration"
  levelId        String            // owning Module id
  title          String
  summary        String
  difficultyTiers Json             // beginner..expert variant descriptors
  misconceptions Misconception[]
  prerequisites  ConceptPrerequisite[] @relation("prereqOf")
  dependents     ConceptPrerequisite[] @relation("dependsOn")
}

model ConceptPrerequisite {
  id             String @id
  conceptId      String            // the concept that has the prerequisite
  prerequisiteId String
  kind           String            // required | related
  @@unique([conceptId, prerequisiteId])
}

model Misconception {
  id          String @id           // spec section 24 database
  conceptId   String
  statement   String              // "Bond = safe"
  correction  String
  challengeQuestionIds Json        // questions that probe it
}
```

## Assessment content

```prisma
model Question {
  id           String @id
  conceptId    String
  type         String              // freeRecall | shortAnswer | prediction | explanation |
                                   // calculation | classification | comparison | errorDetection |
                                   // decisionScenario | portfolioConstruction | multipleChoice
  cognition    String              // recall | application | transfer | decision
  pool         String              // practice | review | retentionProbe | transferBank | finalExam
  difficulty   String              // beginner | intermediate | advanced | expert
  prompt       Json                // typed per question type
  answerSpec   Json                // correct answer, tolerances, distractor metadata
  rubric       Json?               // for LLM-graded free text, incl. 0-5 explanation scale
  errorMap     Json?               // distractor -> error class (spec section 23)
  askConfidence Boolean @default(false)
  sourceIds    Json
}

model Exercise {
  id          String @id
  conceptId   String
  type        String               // the 8 types of spec section 21
  spec        Json                 // inputs, expected outputs, tolerance
  rubric      Json?
}

model Scenario {
  id        String @id
  kind      String                 // market | behavioral | decision | etfSelection |
                                   // statementAnalysis | macroChain | argumentAnalysis
  setup     Json
  choices   Json                   // each choice: consequences, biases, rationality conditions
  rubric    Json
  conceptIds Json
}

model Assessment {
  id        String @id
  kind      String                 // baseline | final | retentionProbe | behavioralPrePost
  blueprint Json                   // distribution rules, e.g. spec section 41 percentages
}
```

## User learning state

```prisma
model QuestionAttempt {
  id            String   @id
  userId        String
  questionId    String
  sessionId     String?
  answer        Json
  correct       Boolean
  score         Decimal?           // partial credit / rubric score
  errorClass    String?            // spec section 23 taxonomy
  confidence    Int?               // 1..5 bands of spec section 27
  latencyMs     Int?
  gradedBy      String             // deterministic | llm
  createdAt     DateTime @default(now())
}

model ExerciseAttempt {
  id         String   @id
  userId     String
  exerciseId String
  submission Json
  score      Decimal
  errorClass String?
  createdAt  DateTime @default(now())
}

model ScenarioAttempt {
  id         String   @id
  userId     String
  scenarioId String
  choicePath Json
  rubricScore Decimal
  reasoningText String?
  createdAt  DateTime @default(now())
}

model MasteryScore {
  id           String   @id
  userId       String
  conceptId    String
  score        Int                 // 0..100
  components   Json                // per-dimension subscores (section 26)
  updatedAt    DateTime @updatedAt
  @@unique([userId, conceptId])
}

model ReviewSchedule {                // FSRS state per user-concept
  id           String   @id
  userId       String
  conceptId    String
  stability    Decimal
  difficulty   Decimal
  intervalDays Decimal
  lastReview   DateTime?
  nextReview   DateTime
  successCount Int @default(0)
  failureCount Int @default(0)
  @@unique([userId, conceptId])
  @@index([userId, nextReview])
}

model Flashcard {                     // retrieval items materialized for review sessions
  id         String @id
  conceptId  String
  questionId String
  active     Boolean @default(true)
}

model AssessmentAttempt {
  id           String   @id
  userId       String
  assessmentId String
  questionIds  Json                 // frozen instance assembled from blueprint
  responses    Json
  score        Decimal
  breakdown    Json                 // per-category scores
  startedAt    DateTime
  completedAt  DateTime?
}
```

## Portfolio and personal finance

```prisma
model Portfolio {
  id        String   @id
  userId    String
  name      String
  kind      String                 // lab | ips
  assets    PortfolioAsset[]
  assumptionsVersion String        // which static dataset priced it
}

model PortfolioAsset {
  id          String  @id
  portfolioId String
  assetClass  String               // spec section 30 list
  weight      Decimal              // fraction, weights validated to sum to 1
  ter         Decimal?
}

model Simulation {
  id         String   @id
  userId     String
  scenarioId String
  portfolioId String?
  decisions  Json
  outcome    Json
  createdAt  DateTime @default(now())
}

model FinancialAccount {              // personal finance lab inputs, user-provided
  id       String  @id
  userId   String
  kind     String                  // income | expense | savings | debt | mortgage |
                                   // emergency | investment | pension | insurance
  label    String
  amount   Decimal
  currency String  @default("EUR")
  cadence  String                  // monthly | yearly | balance
}

model FinancialGoal {
  id       String  @id
  userId   String
  label    String
  target   Decimal
  horizonYears Int
}

model InvestmentPolicyStatement {
  id        String   @id
  userId    String
  content   Json                   // the section 38 structure
  rubricScore Decimal?
  gradedAt  DateTime?
  version   Int
}
```

## Reference data

```prisma
model TaxRule {
  id           String @id
  jurisdiction String              // "FR"
  wrapper      String              // PEA | CTO | assurance-vie | none
  rule         Json
  validFrom    DateTime
  validTo      DateTime?
  sourceId     String
  version      String              // spec section 39: versioned and source-linked
}

model MarketData {
  id        String @id
  dataset   String                 // "returns-annual", "covariance", "etf-catalog", "inflation"
  payload   Json
  source    String
  asOf      DateTime
  currency  String
  methodology String
}

model Source {
  id           String @id
  title        String
  publisher    String              // central bank, regulator, academic, fund doc
  url          String
  publishedAt  DateTime?
  jurisdiction String?
  verifiedAt   DateTime            // last verification date, spec section 69
}
```

## Analytics

```prisma
model AnalyticsEvent {
  id        String   @id
  userId    String
  name      String                 // the section 75 event names, enforced by a Zod enum
  payload   Json
  createdAt DateTime @default(now())
  @@index([userId, name, createdAt])
}

model MetricSnapshot {               // aggregated KPI values for the dashboard
  id        String   @id
  userId    String
  metric    String                 // competencyScore | retention30d | transfer | calibration | ...
  value     Decimal
  window    String
  computedAt DateTime
  @@index([userId, metric, computedAt])
}
```

## Notes on spec section 74 coverage

Every entity named in section 74 maps to a model above. Two additions: `MetricSnapshot` (needed so the section 58 dashboard reads precomputed KPIs instead of scanning raw events) and `Misconception` as a first-class table (section 24 calls it a database). No section 74 entity was dropped.
