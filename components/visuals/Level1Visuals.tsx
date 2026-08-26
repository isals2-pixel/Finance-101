// Visuals for lessons 2-6. Each explains a relationship (SPEC_V2 §18-19).

export function CashFlow() {
  return (
    <svg viewBox="0 0 640 300" role="img" aria-label="Income flows into a monthly pool, expenses flow out, and the remainder is cash flow feeding savings" className="w-full">
      <g fontFamily="ui-sans-serif,system-ui" fontSize="13">
        <rect x="20" y="110" width="150" height="60" rx="8" fill="#1e3a5f" />
        <text x="95" y="136" textAnchor="middle" fill="#fff" fontWeight="600">INCOME</text>
        <text x="95" y="154" textAnchor="middle" fill="#a8c5e0" fontSize="11">2,400 / month</text>

        <line x1="170" y1="140" x2="240" y2="140" stroke="#1e3a5f" strokeWidth="3" markerEnd="url(#a1)" />

        <rect x="245" y="80" width="160" height="120" rx="8" fill="#fff" stroke="#1e3a5f" strokeWidth="1.5" />
        <text x="325" y="110" textAnchor="middle" fontWeight="600" fill="#1c1917">THE MONTH</text>
        <text x="325" y="132" textAnchor="middle" fill="#78716c" fontSize="11">fixed 1,290</text>
        <text x="325" y="150" textAnchor="middle" fill="#78716c" fontSize="11">variable 870</text>
        <text x="325" y="176" textAnchor="middle" fill="#9a3412" fontSize="11">expenses 2,160</text>

        <line x1="405" y1="120" x2="470" y2="70" stroke="#9a3412" strokeWidth="3" markerEnd="url(#a2)" />
        <text x="475" y="58" fill="#9a3412" fontWeight="600">EXPENSES OUT</text>

        <line x1="405" y1="165" x2="470" y2="215" stroke="#166534" strokeWidth="3" markerEnd="url(#a3)" />
        <rect x="470" y="220" width="150" height="56" rx="8" fill="#f0fdf4" stroke="#166534" />
        <text x="545" y="243" textAnchor="middle" fill="#166534" fontWeight="600">CASH FLOW +240</text>
        <text x="545" y="261" textAnchor="middle" fill="#166534" fontSize="11">→ savings rate 10%</text>
      </g>
      <defs>
        <marker id="a1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#1e3a5f" /></marker>
        <marker id="a2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#9a3412" /></marker>
        <marker id="a3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#166534" /></marker>
      </defs>
    </svg>
  );
}

export function AssetsLiabilities() {
  return (
    <svg viewBox="0 0 640 320" role="img" aria-label="Two columns: assets you own with their value drifting up or down, liabilities you owe growing through interest" className="w-full">
      <g fontFamily="ui-sans-serif,system-ui" fontSize="13">
        <rect x="40" y="30" width="250" height="240" rx="10" fill="#fff" stroke="#166534" strokeWidth="1.5" />
        <text x="165" y="58" textAnchor="middle" fontWeight="700" fill="#166534">ASSETS - you own</text>
        <text x="165" y="90" textAnchor="middle" fill="#1c1917">savings 12,000</text>
        <text x="165" y="115" textAnchor="middle" fill="#1c1917">flat 250,000</text>
        <text x="165" y="140" textAnchor="middle" fill="#1c1917">investments 15,000</text>
        <text x="165" y="165" textAnchor="middle" fill="#1c1917">car 9,000</text>
        <text x="165" y="215" textAnchor="middle" fill="#78716c" fontSize="11">value drifts: ↑ appreciation</text>
        <text x="165" y="233" textAnchor="middle" fill="#78716c" fontSize="11">↓ depreciation, e.g. the car</text>

        <rect x="350" y="30" width="250" height="240" rx="10" fill="#fff" stroke="#9a3412" strokeWidth="1.5" />
        <text x="475" y="58" textAnchor="middle" fontWeight="700" fill="#9a3412">LIABILITIES - you owe</text>
        <text x="475" y="90" textAnchor="middle" fill="#1c1917">mortgage 180,000</text>
        <text x="475" y="115" textAnchor="middle" fill="#1c1917">car loan 15,000</text>
        <text x="475" y="140" textAnchor="middle" fill="#1c1917">card balance 1,200</text>
        <text x="475" y="215" textAnchor="middle" fill="#78716c" fontSize="11">always growing on their own:</text>
        <text x="475" y="233" textAnchor="middle" fill="#78716c" fontSize="11">interest accrues until repaid</text>

        <text x="320" y="300" textAnchor="middle" fill="#1c1917" fontSize="12" fontWeight="600">
          a financed purchase adds to BOTH columns at once
        </text>
      </g>
    </svg>
  );
}

export function NetWorthBar() {
  return (
    <svg viewBox="0 0 640 300" role="img" aria-label="Stacked bars: total assets 243,000 minus total liabilities 170,500 leaves net worth 72,500" className="w-full">
      <g fontFamily="ui-sans-serif,system-ui" fontSize="13">
        <rect x="80" y="40" width="120" height="220" rx="6" fill="#1e3a5f" />
        <text x="140" y="30" textAnchor="middle" fontWeight="600" fill="#1c1917">Assets</text>
        <text x="140" y="155" textAnchor="middle" fill="#fff" fontWeight="600">243,000</text>

        <rect x="260" y="40" width="120" height="154" rx="6" fill="#9a3412" />
        <text x="320" y="30" textAnchor="middle" fontWeight="600" fill="#1c1917">Liabilities</text>
        <text x="320" y="122" textAnchor="middle" fill="#fff" fontWeight="600">170,500</text>

        <rect x="440" y="194" width="120" height="66" rx="6" fill="#166534" />
        <text x="500" y="30" textAnchor="middle" fontWeight="600" fill="#1c1917">Net worth</text>
        <text x="500" y="182" textAnchor="middle" fill="#166534" fontWeight="700">72,500</text>

        <text x="230" y="150" textAnchor="middle" fontSize="20" fill="#78716c">−</text>
        <text x="410" y="150" textAnchor="middle" fontSize="20" fill="#78716c">=</text>
        <text x="320" y="288" textAnchor="middle" fill="#78716c" fontSize="12">
          the photograph; cash flow is the film that changes it each month
        </text>
      </g>
    </svg>
  );
}

export function InterestTimeline() {
  return (
    <svg viewBox="0 0 640 260" role="img" aria-label="Timeline of a 1,000 euro loan at 3 percent simple interest: the same 30 euros accrues each year, totalling 150 after five years" className="w-full">
      <g fontFamily="ui-sans-serif,system-ui" fontSize="12">
        <line x1="60" y1="170" x2="600" y2="170" stroke="#78716c" strokeWidth="2" />
        {[0, 1, 2, 3, 4, 5].map((yr) => (
          <g key={yr}>
            <line x1={60 + yr * 108} y1="164" x2={60 + yr * 108} y2="176" stroke="#78716c" strokeWidth="2" />
            <text x={60 + yr * 108} y="196" textAnchor="middle" fill="#78716c">year {yr}</text>
          </g>
        ))}
        <rect x="30" y="120" width="120" height="34" rx="6" fill="#1e3a5f" />
        <text x="90" y="142" textAnchor="middle" fill="#fff" fontWeight="600">1,000 lent</text>
        {[1, 2, 3, 4, 5].map((yr) => (
          <g key={yr}>
            <rect x={60 + yr * 108 - 28} y="80" width="56" height="26" rx="5" fill="#f0fdf4" stroke="#166534" />
            <text x={60 + yr * 108} y="98" textAnchor="middle" fill="#166534" fontWeight="600">+30</text>
          </g>
        ))}
        <text x="330" y="50" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          simple interest: every year charges 3% of the ORIGINAL principal
        </text>
        <text x="330" y="240" textAnchor="middle" fill="#78716c">
          after 5 years: 1,000 + 5 × 30 = 1,150
        </text>
      </g>
    </svg>
  );
}

export function CompoundCurve() {
  // 10,000 at 5% over 30 years, points every 3 years, precomputed.
  const compound = '60,340 114,326.5 168,310.8 222,292.7 276,271.8 330,247.5 384,219.4 438,186.9 492,149.3 546,105.7 600,55.3';
  return (
    <svg viewBox="0 0 660 400" role="img" aria-label="Chart comparing 10,000 euros at 5 percent over 30 years: simple interest reaches 25,000 in a straight line, compound interest curves up to 43,219" className="w-full">
      <g fontFamily="ui-sans-serif,system-ui" fontSize="12">
        <line x1="60" y1="340" x2="620" y2="340" stroke="#78716c" strokeWidth="1.5" />
        <line x1="60" y1="340" x2="60" y2="40" stroke="#78716c" strokeWidth="1.5" />
        {[0, 10, 20, 30].map((yr) => (
          <text key={yr} x={60 + (yr / 30) * 540} y="360" textAnchor="middle" fill="#78716c">
            {yr}y
          </text>
        ))}
        <text x="40" y="344" textAnchor="end" fill="#78716c">10k</text>
        <text x="40" y="216" textAnchor="end" fill="#78716c">25k</text>
        <text x="40" y="60" textAnchor="end" fill="#78716c">43k</text>

        <line x1="60" y1="340" x2="600" y2="211.4" stroke="#78716c" strokeWidth="2.5" strokeDasharray="6 4" />
        <text x="480" y="250" fill="#78716c" fontWeight="600">simple → 25,000</text>

        <polyline points={compound} fill="none" stroke="#1e3a5f" strokeWidth="3" />
        <text x="455" y="80" fill="#1e3a5f" fontWeight="700">compound → 43,219</text>

        <text x="340" y="390" textAnchor="middle" fill="#1c1917" fontSize="13" fontWeight="600">
          same 10,000, same 5% - the gap is interest earning interest, and it arrives late
        </text>
      </g>
    </svg>
  );
}
