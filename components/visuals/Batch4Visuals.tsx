// Visuals for lessons 21-26 (Level 2 economics).

const F = 'ui-sans-serif,system-ui';

export function SupplyDemandCross() {
  return (
    <svg viewBox="0 0 640 380" role="img" aria-label="Demand slopes down, supply slopes up; they cross at the equilibrium price of 30 and quantity of 60" className="w-full">
      <g fontFamily={F} fontSize="12">
        <line x1="80" y1="320" x2="600" y2="320" stroke="#78716c" strokeWidth="1.5" />
        <line x1="80" y1="320" x2="80" y2="40" stroke="#78716c" strokeWidth="1.5" />
        <text x="600" y="340" textAnchor="end" fill="#78716c">quantity</text>
        <text x="60" y="50" textAnchor="middle" fill="#78716c">price</text>

        <line x1="120" y1="70" x2="560" y2="290" stroke="#9a3412" strokeWidth="3" />
        <text x="540" y="270" fill="#9a3412" fontWeight="700">DEMAND</text>
        <line x1="120" y1="290" x2="560" y2="70" stroke="#166534" strokeWidth="3" />
        <text x="540" y="90" fill="#166534" fontWeight="700">SUPPLY</text>

        <circle cx="340" cy="180" r="6" fill="#1e3a5f" />
        <line x1="340" y1="180" x2="340" y2="320" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="340" y1="180" x2="80" y2="180" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="4 4" />
        <text x="70" y="184" textAnchor="end" fill="#1e3a5f" fontWeight="600">P = 30</text>
        <text x="340" y="340" textAnchor="middle" fill="#1e3a5f" fontWeight="600">Q = 60</text>

        <text x="340" y="372" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          above P: surplus pushes price down · below P: shortage pushes it up
        </text>
      </g>
    </svg>
  );
}

export function GdpComponents() {
  return (
    <svg viewBox="0 0 640 360" role="img" aria-label="GDP of 2,260 billion euros stacked from consumption 1,250, investment 480, government 570, minus net imports 40" className="w-full">
      <g fontFamily={F} fontSize="12">
        <rect x="220" y="40" width="200" height="150" fill="#1e3a5f" />
        <text x="320" y="120" textAnchor="middle" fill="#fff" fontWeight="600">Consumption 1,250</text>
        <rect x="220" y="190" width="200" height="58" fill="#166534" />
        <text x="320" y="224" textAnchor="middle" fill="#fff" fontWeight="600">Investment 480</text>
        <rect x="220" y="248" width="200" height="68" fill="#78716c" />
        <text x="320" y="286" textAnchor="middle" fill="#fff" fontWeight="600">Government 570</text>
        <rect x="220" y="316" width="200" height="10" fill="#9a3412" />
        <text x="440" y="326" fill="#9a3412" fontSize="11">net exports −40</text>

        <text x="320" y="26" textAnchor="middle" fontWeight="700" fill="#1c1917" fontSize="14">
          GDP = C + I + G + (X − M) = 2,260 bn
        </text>
        <text x="320" y="350" textAnchor="middle" fill="#78716c" fontSize="11">
          everything newly produced is bought by someone - count the buyers, get the production
        </text>
      </g>
    </svg>
  );
}

export function PolicyTransmission() {
  const steps = [
    ['POLICY RATE', 'ECB raises or cuts'],
    ['BANK RATES', 'mortgages, credit, savings reprice'],
    ['BORROWING & SPENDING', 'costlier credit postpones demand'],
    ['DEMAND', 'total spending cools or revives'],
    ['INFLATION', 'price rises slow or firm (lesson 21)'],
  ];
  return (
    <svg viewBox="0 0 640 400" role="img" aria-label="Monetary transmission chain from the policy rate through bank rates, borrowing, and demand to inflation, each step with a lag" className="w-full">
      <g fontFamily={F} fontSize="12">
        {steps.map(([title, sub], i) => (
          <g key={title}>
            <rect x="140" y={16 + i * 70} width="360" height="52" rx="8" fill={i === 0 ? '#1e3a5f' : i === 4 ? '#f0fdf4' : '#fff'} stroke={i === 4 ? '#166534' : '#1e3a5f'} strokeWidth="1.5" />
            <text x="320" y={38 + i * 70} textAnchor="middle" fontWeight="700" fill={i === 0 ? '#fff' : i === 4 ? '#166534' : '#1c1917'}>{title}</text>
            <text x="320" y={58 + i * 70} textAnchor="middle" fill={i === 0 ? '#a8c5e0' : '#78716c'} fontSize="11">{sub}</text>
            {i < 4 && (
              <g>
                <line x1="320" y1={68 + i * 70} x2="320" y2={84 + i * 70} stroke="#78716c" strokeWidth="2" markerEnd="url(#pt1)" />
                <text x="340" y={80 + i * 70} fill="#9a3412" fontSize="10">lag</text>
              </g>
            )}
          </g>
        ))}
        <text x="320" y="392" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          quarters to years end to end - which is why policy acts on forecasts
        </text>
      </g>
      <defs>
        <marker id="pt1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#78716c" /></marker>
      </defs>
    </svg>
  );
}

export function FiscalFlows() {
  return (
    <svg viewBox="0 0 660 340" role="img" aria-label="Taxes flow into the state, spending flows out; the 130 billion gap is the deficit, bridged by issuing bonds that add to the debt" className="w-full">
      <g fontFamily={F} fontSize="12">
        <rect x="250" y="100" width="160" height="90" rx="10" fill="#1e3a5f" />
        <text x="330" y="138" textAnchor="middle" fill="#fff" fontWeight="700">THE STATE</text>
        <text x="330" y="160" textAnchor="middle" fill="#a8c5e0" fontSize="11">budget</text>

        <line x1="120" y1="145" x2="245" y2="145" stroke="#166534" strokeWidth="3" markerEnd="url(#ff1)" />
        <text x="120" y="128" fill="#166534" fontWeight="600">taxes in: 1,180 bn</text>

        <line x1="415" y1="145" x2="540" y2="145" stroke="#9a3412" strokeWidth="3" markerEnd="url(#ff2)" />
        <text x="425" y="128" fill="#9a3412" fontWeight="600">spending out: 1,310 bn</text>

        <rect x="230" y="230" width="200" height="60" rx="8" fill="#fff" stroke="#9a3412" strokeWidth="1.5" />
        <text x="330" y="255" textAnchor="middle" fill="#9a3412" fontWeight="700">DEFICIT 130 bn</text>
        <text x="330" y="275" textAnchor="middle" fill="#78716c" fontSize="11">bridged by issuing bonds (lesson 13)</text>
        <line x1="330" y1="192" x2="330" y2="228" stroke="#9a3412" strokeWidth="2" markerEnd="url(#ff2)" />

        <text x="330" y="320" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          each deficit adds to the debt - whose interest becomes next year's spending
        </text>
      </g>
      <defs>
        <marker id="ff1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#166534" /></marker>
        <marker id="ff2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#9a3412" /></marker>
      </defs>
    </svg>
  );
}

export function CycleWave() {
  return (
    <svg viewBox="0 0 660 360" role="img" aria-label="Real GDP oscillating around a rising trend line: expansion to peak, recession to trough, recovery, repeating irregularly" className="w-full">
      <g fontFamily={F} fontSize="12">
        <line x1="60" y1="300" x2="620" y2="300" stroke="#78716c" strokeWidth="1.5" />
        <line x1="60" y1="280" x2="620" y2="120" stroke="#78716c" strokeWidth="2" strokeDasharray="7 5" />
        <text x="560" y="108" fill="#78716c" fontWeight="600">trend</text>
        <path
          d="M 60 280 C 120 240, 160 220, 200 232 C 240 244, 260 268, 300 252 C 340 236, 380 180, 430 190 C 470 198, 490 230, 530 200 C 570 172, 590 150, 620 140"
          fill="none" stroke="#1e3a5f" strokeWidth="3"
        />
        <text x="170" y="205" fill="#1c1917" fontSize="11">peak</text>
        <text x="255" y="285" fill="#9a3412" fontSize="11">recession → trough</text>
        <text x="360" y="165" fill="#166534" fontSize="11">recovery, expansion</text>
        <text x="340" y="345" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          waves around a rising trend - obvious in hindsight, undated in the present
        </text>
      </g>
    </svg>
  );
}

export function FxSeesaw() {
  return (
    <svg viewBox="0 0 660 340" role="img" aria-label="A weaker euro helps exporters and holders of foreign assets while hurting importers and travellers - one price, two sides" className="w-full">
      <g fontFamily={F} fontSize="12">
        <text x="330" y="34" textAnchor="middle" fontWeight="700" fill="#1c1917" fontSize="14">
          the euro WEAKENS (1.10 → 1.00 $/€)
        </text>
        <line x1="130" y1="200" x2="530" y2="140" stroke="#78716c" strokeWidth="4" />
        <polygon points="330,170 310,210 350,210" fill="#78716c" />

        <rect x="60" y="210" width="220" height="80" rx="8" fill="#f0fdf4" stroke="#166534" strokeWidth="1.5" />
        <text x="170" y="234" textAnchor="middle" fill="#166534" fontWeight="700">HELPED</text>
        <text x="170" y="254" textAnchor="middle" fill="#166534" fontSize="11">exporters: goods cheaper abroad</text>
        <text x="170" y="272" textAnchor="middle" fill="#166534" fontSize="11">holders of foreign assets: $ → more €</text>

        <rect x="380" y="60" width="220" height="80" rx="8" fill="#fef2f2" stroke="#9a3412" strokeWidth="1.5" />
        <text x="490" y="84" textAnchor="middle" fill="#9a3412" fontWeight="700">HURT</text>
        <text x="490" y="104" textAnchor="middle" fill="#9a3412" fontSize="11">importers and travellers: $ costs more</text>
        <text x="490" y="122" textAnchor="middle" fill="#9a3412" fontSize="11">import prices → inflation (lesson 7)</text>

        <text x="330" y="322" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          every exchange-rate move helps one side and hurts the other - simultaneously
        </text>
      </g>
    </svg>
  );
}
