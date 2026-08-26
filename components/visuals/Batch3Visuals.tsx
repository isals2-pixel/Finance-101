// Visuals for lessons 12-20. Each explains a relationship (SPEC_V2 §18-19).

const F = 'ui-sans-serif,system-ui';

export function StockClaim() {
  return (
    <svg viewBox="0 0 640 300" role="img" aria-label="One share is a claim on a fraction of a company, paying through dividends and value growth" className="w-full">
      <g fontFamily={F} fontSize="12">
        <rect x="40" y="60" width="220" height="180" rx="10" fill="#1e3a5f" />
        <text x="150" y="90" textAnchor="middle" fill="#fff" fontWeight="700" fontSize="14">THE COMPANY</text>
        <text x="150" y="115" textAnchor="middle" fill="#a8c5e0">assets, brands, contracts</text>
        <text x="150" y="135" textAnchor="middle" fill="#a8c5e0">and all future profits</text>
        <rect x="60" y="160" width="40" height="40" rx="4" fill="#a8c5e0" />
        <text x="80" y="185" textAnchor="middle" fill="#1e3a5f" fontWeight="700" fontSize="10">1 share</text>
        <text x="150" y="225" textAnchor="middle" fill="#a8c5e0" fontSize="10">capital divided into millions of slices</text>

        <line x1="260" y1="120" x2="360" y2="90" stroke="#166534" strokeWidth="2.5" markerEnd="url(#sc1)" />
        <rect x="365" y="62" width="240" height="56" rx="8" fill="#f0fdf4" stroke="#166534" />
        <text x="485" y="86" textAnchor="middle" fill="#166534" fontWeight="600">DIVIDENDS</text>
        <text x="485" y="106" textAnchor="middle" fill="#166534" fontSize="11">profit paid out in cash, per share</text>

        <line x1="260" y1="180" x2="360" y2="210" stroke="#1e3a5f" strokeWidth="2.5" markerEnd="url(#sc2)" />
        <rect x="365" y="182" width="240" height="56" rx="8" fill="#fff" stroke="#1e3a5f" />
        <text x="485" y="206" textAnchor="middle" fill="#1c1917" fontWeight="600">VALUE GROWTH</text>
        <text x="485" y="226" textAnchor="middle" fill="#78716c" fontSize="11">retained profit compounds in the business</text>

        <text x="320" y="280" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          owner = paid last, but keeps all the upside
        </text>
      </g>
      <defs>
        <marker id="sc1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#166534" /></marker>
        <marker id="sc2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#1e3a5f" /></marker>
      </defs>
    </svg>
  );
}

export function BondFlows() {
  return (
    <svg viewBox="0 0 640 260" role="img" aria-label="Timeline of a 1,000 euro bond at 3 percent over five years: four 30 euro coupons, then the final coupon plus the 1,000 principal repayment" className="w-full">
      <g fontFamily={F} fontSize="12">
        <line x1="60" y1="180" x2="600" y2="180" stroke="#78716c" strokeWidth="2" />
        {[0, 1, 2, 3, 4, 5].map((yr) => (
          <g key={yr}>
            <line x1={60 + yr * 108} y1="174" x2={60 + yr * 108} y2="186" stroke="#78716c" strokeWidth="2" />
            <text x={60 + yr * 108} y="206" textAnchor="middle" fill="#78716c">year {yr}</text>
          </g>
        ))}
        <rect x="28" y="128" width="120" height="36" rx="6" fill="#9a3412" />
        <text x="88" y="151" textAnchor="middle" fill="#fff" fontWeight="600">−1,000 lent</text>
        {[1, 2, 3, 4].map((yr) => (
          <g key={yr}>
            <rect x={60 + yr * 108 - 28} y="96" width="56" height="26" rx="5" fill="#f0fdf4" stroke="#166534" />
            <text x={60 + yr * 108} y="114" textAnchor="middle" fill="#166534" fontWeight="600">+30</text>
          </g>
        ))}
        <rect x={60 + 5 * 108 - 46} y="56" width="92" height="66" rx="6" fill="#166534" />
        <text x={60 + 5 * 108} y="82" textAnchor="middle" fill="#fff" fontWeight="600">+30</text>
        <text x={60 + 5 * 108} y="104" textAnchor="middle" fill="#bbf7d0" fontWeight="600">+1,000</text>
        <text x="330" y="36" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          fixed coupons, principal back at maturity - nothing more, whatever the company achieves
        </text>
        <text x="330" y="240" textAnchor="middle" fill="#78716c">
          total received: 5 × 30 + 1,000 = 1,150
        </text>
      </g>
    </svg>
  );
}

export function EtfBasket() {
  return (
    <svg viewBox="0 0 640 300" role="img" aria-label="One ETF share bought on the exchange is a proportional claim on a basket holding many securities" className="w-full">
      <g fontFamily={F} fontSize="12">
        <rect x="40" y="110" width="140" height="70" rx="8" fill="#1e3a5f" />
        <text x="110" y="140" textAnchor="middle" fill="#fff" fontWeight="600">YOU</text>
        <text x="110" y="160" textAnchor="middle" fill="#a8c5e0" fontSize="11">buy 1 ETF share, 100</text>

        <line x1="180" y1="145" x2="250" y2="145" stroke="#1e3a5f" strokeWidth="3" markerEnd="url(#eb1)" />
        <text x="215" y="132" textAnchor="middle" fill="#78716c" fontSize="10">on the exchange</text>

        <rect x="255" y="40" width="340" height="220" rx="10" fill="#fff" stroke="#166534" strokeWidth="1.5" />
        <text x="425" y="66" textAnchor="middle" fontWeight="700" fill="#166534">THE FUND'S BASKET</text>
        {Array.from({ length: 4 }).map((_, row) =>
          Array.from({ length: 8 }).map((_, col) => (
            <rect key={`${row}-${col}`} x={280 + col * 38} y={84 + row * 34} width="28" height="24" rx="3" fill="#f0fdf4" stroke="#166534" strokeWidth="0.8" />
          )),
        )}
        <text x="425" y="238" textAnchor="middle" fill="#166534" fontSize="11">
          ~1,500 companies, held once, centrally - your share owns a slice of all of them
        </text>
        <text x="320" y="288" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          share value = basket value ÷ number of fund shares
        </text>
      </g>
      <defs>
        <marker id="eb1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#1e3a5f" /></marker>
      </defs>
    </svg>
  );
}

export function IndexComposition() {
  return (
    <svg viewBox="0 0 640 300" role="img" aria-label="A market-cap weighted index: company A at 75 percent weight moves the index three times as much as company B at 25 percent" className="w-full">
      <g fontFamily={F} fontSize="12">
        <text x="320" y="30" textAnchor="middle" fontWeight="700" fill="#1c1917" fontSize="14">
          INDEX = weighted average of real prices
        </text>
        <rect x="80" y="60" width="360" height="60" rx="6" fill="#1e3a5f" />
        <text x="260" y="95" textAnchor="middle" fill="#fff" fontWeight="600">Company A - weight 75%</text>
        <rect x="450" y="60" width="120" height="60" rx="6" fill="#78716c" />
        <text x="510" y="95" textAnchor="middle" fill="#fff" fontWeight="600">B - 25%</text>
        <text x="320" y="150" textAnchor="middle" fill="#78716c">weights = each company's share of total market value (300m / 100m)</text>

        <text x="180" y="196" textAnchor="middle" fill="#166534" fontWeight="600">A moves +2%</text>
        <text x="450" y="196" textAnchor="middle" fill="#9a3412" fontWeight="600">B moves −4%</text>
        <text x="320" y="232" textAnchor="middle" fill="#1c1917" fontWeight="600">
          index move: 0.75 × (+2) + 0.25 × (−4) = +0.5%
        </text>
        <text x="320" y="272" textAnchor="middle" fill="#78716c" fontSize="11">
          the index is a calculation you cannot buy; an index fund holds the list to make it investable
        </text>
      </g>
    </svg>
  );
}

export function DiversificationPaths() {
  return (
    <svg viewBox="0 0 660 380" role="img" aria-label="One company's path swings violently and can end at zero; a 1,000-company basket's path is smoother around the same rising trend" className="w-full">
      <g fontFamily={F} fontSize="12">
        <line x1="60" y1="320" x2="620" y2="320" stroke="#78716c" strokeWidth="1.5" />
        <line x1="60" y1="320" x2="60" y2="40" stroke="#78716c" strokeWidth="1.5" />
        <polyline
          points="60,240 130,190 200,260 270,150 340,230 410,120 480,290 550,310 600,318"
          fill="none" stroke="#9a3412" strokeWidth="2.5"
        />
        <text x="480" y="345" fill="#9a3412" fontWeight="600">one company (this one failed)</text>
        <polyline
          points="60,240 130,225 200,235 270,205 340,215 410,180 480,190 550,150 600,130"
          fill="none" stroke="#1e3a5f" strokeWidth="3"
        />
        <text x="440" y="120" fill="#1e3a5f" fontWeight="700">1,000-company basket</text>
        <text x="340" y="372" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          single stories average out; the market's trend remains
        </text>
      </g>
    </svg>
  );
}

export function RiskRange() {
  return (
    <svg viewBox="0 0 660 320" role="img" aria-label="Ranges of yearly real outcomes: cash narrow but centred slightly negative, bonds moderate, stocks wide around the highest expected value" className="w-full">
      <g fontFamily={F} fontSize="12">
        <line x1="330" y1="40" x2="330" y2="250" stroke="#78716c" strokeWidth="1" strokeDasharray="4 4" />
        <text x="330" y="30" textAnchor="middle" fill="#78716c">0% real</text>

        <rect x="290" y="60" width="70" height="34" rx="6" fill="#78716c" opacity="0.35" />
        <circle cx="316" cy="77" r="4" fill="#78716c" />
        <text x="70" y="82" fill="#1c1917" fontWeight="600">Cash</text>
        <text x="380" y="82" fill="#78716c" fontSize="11">narrow range, centred below zero</text>

        <rect x="255" y="120" width="180" height="34" rx="6" fill="#1e3a5f" opacity="0.35" />
        <circle cx="352" cy="137" r="4" fill="#1e3a5f" />
        <text x="70" y="142" fill="#1c1917" fontWeight="600">Bonds</text>
        <text x="450" y="142" fill="#78716c" fontSize="11">moderate spread</text>

        <rect x="170" y="180" width="360" height="34" rx="6" fill="#166534" opacity="0.35" />
        <circle cx="385" cy="197" r="4" fill="#166534" />
        <text x="70" y="202" fill="#1c1917" fontWeight="600">Stocks</text>
        <text x="545" y="202" fill="#78716c" fontSize="11">wide spread,</text>
        <text x="545" y="216" fill="#78716c" fontSize="11">highest centre</text>

        <text x="330" y="280" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          risk = the width; the dot = the expected outcome; the width is what the premium pays for
        </text>
      </g>
    </svg>
  );
}

export function FeeDrag() {
  const cheap = '60,340 150,318.3 240,289.5 330,251.3 420,200.6 510,133.5 600,44.5';
  const dear = '60,340 150,324.8 240,306.1 330,283.1 420,254.9 510,220.2 600,177.6';
  return (
    <svg viewBox="0 0 660 400" role="img" aria-label="100,000 euros at 6 percent gross over 30 years: a 0.2 percent fee reaches 543,000 euros while a 1.8 percent fee reaches 344,000" className="w-full">
      <g fontFamily={F} fontSize="12">
        <line x1="60" y1="340" x2="620" y2="340" stroke="#78716c" strokeWidth="1.5" />
        <line x1="60" y1="340" x2="60" y2="40" stroke="#78716c" strokeWidth="1.5" />
        {[0, 10, 20, 30].map((yr) => (
          <text key={yr} x={60 + (yr / 30) * 540} y="360" textAnchor="middle" fill="#78716c">{yr}y</text>
        ))}
        <polyline points={cheap} fill="none" stroke="#166534" strokeWidth="3" />
        <text x="440" y="70" fill="#166534" fontWeight="700">TER 0.2% → 543,000</text>
        <polyline points={dear} fill="none" stroke="#9a3412" strokeWidth="3" />
        <text x="440" y="230" fill="#9a3412" fontWeight="600">TER 1.8% → 344,000</text>
        <text x="340" y="390" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          same 6% gross return - the 1.6-point fee gap consumes ~199,000 over 30 years
        </text>
      </g>
    </svg>
  );
}

export function TimeHorizon() {
  return (
    <svg viewBox="0 0 660 360" role="img" aria-label="Historical ranges of annualized stock outcomes narrow as the holding period lengthens: very wide over one year, mostly positive over twenty" className="w-full">
      <g fontFamily={F} fontSize="12">
        <line x1="80" y1="180" x2="620" y2="180" stroke="#78716c" strokeWidth="1" strokeDasharray="4 4" />
        <text x="72" y="184" textAnchor="end" fill="#78716c">0%</text>

        <rect x="120" y="50" width="70" height="240" rx="6" fill="#9a3412" opacity="0.4" />
        <text x="155" y="315" textAnchor="middle" fill="#1c1917" fontWeight="600">1 year</text>
        <rect x="290" y="110" width="70" height="120" rx="6" fill="#1e3a5f" opacity="0.45" />
        <text x="325" y="315" textAnchor="middle" fill="#1c1917" fontWeight="600">5 years</text>
        <rect x="460" y="140" width="70" height="50" rx="6" fill="#166534" opacity="0.55" />
        <text x="495" y="315" textAnchor="middle" fill="#1c1917" fontWeight="600">20 years</text>

        <text x="155" y="42" textAnchor="middle" fill="#78716c" fontSize="11">anything can happen</text>
        <text x="495" y="132" textAnchor="middle" fill="#78716c" fontSize="11">historically positive</text>

        <text x="350" y="348" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          annualized outcome ranges (illustrative of the historical pattern) - time narrows the spread
        </text>
      </g>
    </svg>
  );
}

export function DecisionChecklist() {
  const steps = [
    ['1. GOAL', 'what future purchase is this for?'],
    ['2. HORIZON', 'when is the money needed?'],
    ['3. RISK', 'what can the goal - and I - survive?'],
    ['4. COST', 'fees and taxes: the certain subtractions'],
    ['5. ALTERNATIVE', 'does anything do it better or cheaper?'],
  ];
  return (
    <svg viewBox="0 0 640 380" role="img" aria-label="The five-question decision sequence: goal, horizon, risk, cost, best alternative - in that order" className="w-full">
      <g fontFamily={F} fontSize="12">
        {steps.map(([title, sub], i) => (
          <g key={title}>
            <rect x="140" y={20 + i * 64} width="360" height="48" rx="8" fill={i === 4 ? '#f0fdf4' : '#fff'} stroke={i === 4 ? '#166534' : '#1e3a5f'} strokeWidth="1.5" />
            <text x="320" y={40 + i * 64} textAnchor="middle" fontWeight="700" fill={i === 4 ? '#166534' : '#1c1917'}>{title}</text>
            <text x="320" y={58 + i * 64} textAnchor="middle" fill="#78716c" fontSize="11">{sub}</text>
            {i < 4 && <line x1="320" y1={68 + i * 64} x2="320" y2={84 + i * 64} stroke="#78716c" strokeWidth="2" markerEnd="url(#dc1)" />}
          </g>
        ))}
        <text x="320" y="365" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          note what is absent: "how did it do last year?"
        </text>
      </g>
      <defs>
        <marker id="dc1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#78716c" /></marker>
      </defs>
    </svg>
  );
}
