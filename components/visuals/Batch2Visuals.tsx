// Visuals for lessons 7-11. Each explains a relationship (SPEC_V2 §18-19).

export function PurchasingPower() {
  // 1,000 euros of cash under 2% inflation, real value over 30 years, precomputed.
  const decay = '60,40 114,74.6 168,107.2 222,137.9 276,166.9 330,194.2 384,219.9 438,244.1 492,267 546,288.5 600,308.7';
  return (
    <svg viewBox="0 0 660 400" role="img" aria-label="Chart: the purchasing power of 1,000 euros of cash falls to 552 euros over 30 years of 2 percent inflation" className="w-full">
      <g fontFamily="ui-sans-serif,system-ui" fontSize="12">
        <line x1="60" y1="340" x2="620" y2="340" stroke="#78716c" strokeWidth="1.5" />
        <line x1="60" y1="340" x2="60" y2="40" stroke="#78716c" strokeWidth="1.5" />
        {[0, 10, 20, 30].map((yr) => (
          <text key={yr} x={60 + (yr / 30) * 540} y="360" textAnchor="middle" fill="#78716c">{yr}y</text>
        ))}
        <text x="52" y="44" textAnchor="end" fill="#78716c">1,000</text>
        <text x="52" y="312" textAnchor="end" fill="#78716c">552</text>

        <line x1="60" y1="40" x2="600" y2="40" stroke="#78716c" strokeWidth="2" strokeDasharray="6 4" />
        <text x="470" y="30" fill="#78716c" fontWeight="600">the number on the notes: 1,000</text>

        <polyline points={decay} fill="none" stroke="#9a3412" strokeWidth="3" />
        <text x="380" y="290" fill="#9a3412" fontWeight="700">what they buy → 552</text>

        <text x="340" y="390" textAnchor="middle" fill="#1c1917" fontSize="13" fontWeight="600">
          2% inflation, 30 years: the number never moves, the value never stops moving
        </text>
      </g>
    </svg>
  );
}

export function NominalRealSplit() {
  return (
    <svg viewBox="0 0 640 320" role="img" aria-label="A 5 percent nominal return split into 2 points consumed by inflation and roughly 3 points of real gain" className="w-full">
      <g fontFamily="ui-sans-serif,system-ui" fontSize="13">
        <text x="150" y="40" textAnchor="middle" fontWeight="600" fill="#1c1917">nominal return: 5%</text>
        <rect x="90" y="60" width="120" height="200" rx="6" fill="#1e3a5f" />
        <text x="150" y="166" textAnchor="middle" fill="#fff" fontWeight="700" fontSize="16">5%</text>

        <text x="300" y="150" textAnchor="middle" fontSize="22" fill="#78716c">=</text>

        <text x="450" y="40" textAnchor="middle" fontWeight="600" fill="#1c1917">what it is made of</text>
        <rect x="390" y="60" width="120" height="80" rx="6" fill="#9a3412" />
        <text x="450" y="95" textAnchor="middle" fill="#fff" fontWeight="600">inflation 2%</text>
        <text x="450" y="118" textAnchor="middle" fill="#fecaca" fontSize="11">runs to stand still</text>
        <rect x="390" y="144" width="120" height="116" rx="6" fill="#166534" />
        <text x="450" y="195" textAnchor="middle" fill="#fff" fontWeight="600">real ≈ 3%</text>
        <text x="450" y="218" textAnchor="middle" fill="#bbf7d0" fontSize="11">actual progress</text>

        <text x="320" y="300" textAnchor="middle" fill="#1c1917" fontSize="13" fontWeight="600">
          real ≈ nominal − inflation (exact: 1.05 / 1.02 − 1 = 2.94%)
        </text>
      </g>
    </svg>
  );
}

export function OpportunityFork() {
  return (
    <svg viewBox="0 0 640 320" role="img" aria-label="Fork diagram: 10,000 euros held at 0 percent stays 10,000 after ten years while the 3 percent path reaches 13,439; the 3,439 gap is the opportunity cost" className="w-full">
      <g fontFamily="ui-sans-serif,system-ui" fontSize="13">
        <rect x="30" y="130" width="150" height="56" rx="8" fill="#1e3a5f" />
        <text x="105" y="154" textAnchor="middle" fill="#fff" fontWeight="600">10,000 today</text>
        <text x="105" y="172" textAnchor="middle" fill="#a8c5e0" fontSize="11">one choice to make</text>

        <line x1="180" y1="140" x2="300" y2="80" stroke="#78716c" strokeWidth="2.5" markerEnd="url(#of1)" />
        <line x1="180" y1="176" x2="300" y2="236" stroke="#166534" strokeWidth="2.5" markerEnd="url(#of2)" />

        <rect x="305" y="52" width="200" height="56" rx="8" fill="#fff" stroke="#78716c" strokeWidth="1.5" />
        <text x="405" y="76" textAnchor="middle" fill="#1c1917" fontWeight="600">current account, 0%</text>
        <text x="405" y="96" textAnchor="middle" fill="#78716c" fontSize="12">10 years later: 10,000</text>

        <rect x="305" y="208" width="200" height="56" rx="8" fill="#f0fdf4" stroke="#166534" strokeWidth="1.5" />
        <text x="405" y="232" textAnchor="middle" fill="#166534" fontWeight="600">placed at 3%, 10 years</text>
        <text x="405" y="252" textAnchor="middle" fill="#166534" fontSize="12">10,000 × 1.03¹⁰ = 13,439</text>

        <rect x="530" y="128" width="100" height="60" rx="8" fill="#fef2f2" stroke="#9a3412" />
        <text x="580" y="150" textAnchor="middle" fill="#9a3412" fontWeight="700">−3,439</text>
        <text x="580" y="170" textAnchor="middle" fill="#9a3412" fontSize="10">cost of the top path</text>

        <text x="320" y="305" textAnchor="middle" fill="#1c1917" fontSize="13" fontWeight="600">
          no statement shows the gap - only the comparison does
        </text>
      </g>
      <defs>
        <marker id="of1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#78716c" /></marker>
        <marker id="of2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#166534" /></marker>
      </defs>
    </svg>
  );
}

export function ThreeLenses() {
  return (
    <svg viewBox="0 0 640 340" role="img" aria-label="One bakery seen through three lenses: economics describes the environment, accounting records the numbers, finance makes the decision" className="w-full">
      <g fontFamily="ui-sans-serif,system-ui" fontSize="12">
        <circle cx="320" cy="170" r="52" fill="#1e3a5f" />
        <text x="320" y="166" textAnchor="middle" fill="#fff" fontWeight="600">THE</text>
        <text x="320" y="184" textAnchor="middle" fill="#fff" fontWeight="600">BAKERY</text>

        <rect x="20" y="30" width="190" height="80" rx="8" fill="#fff" stroke="#1e3a5f" />
        <text x="115" y="54" textAnchor="middle" fontWeight="700" fill="#1c1917">ECONOMICS</text>
        <text x="115" y="74" textAnchor="middle" fill="#78716c">the environment:</text>
        <text x="115" y="92" textAnchor="middle" fill="#78716c">demand, competition, flour prices</text>
        <line x1="210" y1="100" x2="278" y2="145" stroke="#78716c" strokeWidth="1.5" />

        <rect x="430" y="30" width="190" height="80" rx="8" fill="#fff" stroke="#1e3a5f" />
        <text x="525" y="54" textAnchor="middle" fontWeight="700" fill="#1c1917">ACCOUNTING</text>
        <text x="525" y="74" textAnchor="middle" fill="#78716c">the record:</text>
        <text x="525" y="92" textAnchor="middle" fill="#78716c">revenue 500k, costs 450k, profit 50k</text>
        <line x1="430" y1="100" x2="362" y2="145" stroke="#78716c" strokeWidth="1.5" />

        <rect x="225" y="250" width="190" height="80" rx="8" fill="#f0fdf4" stroke="#166534" strokeWidth="1.5" />
        <text x="320" y="274" textAnchor="middle" fontWeight="700" fill="#166534">FINANCE</text>
        <text x="320" y="294" textAnchor="middle" fill="#166534">the decision:</text>
        <text x="320" y="312" textAnchor="middle" fill="#166534">worth 10 × profit? better than alternatives?</text>
        <line x1="320" y1="222" x2="320" y2="250" stroke="#166534" strokeWidth="1.5" />

        <text x="320" y="20" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          environment + record → decision
        </text>
      </g>
    </svg>
  );
}

export function MarketFlows() {
  return (
    <svg viewBox="0 0 660 340" role="img" aria-label="Flow diagram: savers' money reaches companies through the primary market; the secondary market trades existing claims between investors, providing the liquidity that makes the primary market work" className="w-full">
      <g fontFamily="ui-sans-serif,system-ui" fontSize="12">
        <rect x="20" y="60" width="140" height="70" rx="8" fill="#1e3a5f" />
        <text x="90" y="90" textAnchor="middle" fill="#fff" fontWeight="600">SAVERS</text>
        <text x="90" y="110" textAnchor="middle" fill="#a8c5e0" fontSize="11">spare money</text>

        <rect x="500" y="60" width="140" height="70" rx="8" fill="#1e3a5f" />
        <text x="570" y="90" textAnchor="middle" fill="#fff" fontWeight="600">COMPANIES</text>
        <text x="570" y="110" textAnchor="middle" fill="#a8c5e0" fontSize="11">need funding</text>

        <rect x="230" y="40" width="200" height="110" rx="10" fill="#f0fdf4" stroke="#166534" strokeWidth="1.5" />
        <text x="330" y="66" textAnchor="middle" fontWeight="700" fill="#166534">PRIMARY MARKET</text>
        <text x="330" y="88" textAnchor="middle" fill="#166534" fontSize="11">new shares and bonds issued</text>
        <text x="330" y="106" textAnchor="middle" fill="#166534" fontSize="11">money → company</text>
        <text x="330" y="124" textAnchor="middle" fill="#166534" fontSize="11">claims → savers</text>

        <line x1="160" y1="95" x2="228" y2="95" stroke="#166534" strokeWidth="3" markerEnd="url(#mf1)" />
        <line x1="430" y1="95" x2="498" y2="95" stroke="#166534" strokeWidth="3" markerEnd="url(#mf1)" />

        <rect x="230" y="200" width="200" height="100" rx="10" fill="#fff" stroke="#1e3a5f" strokeWidth="1.5" />
        <text x="330" y="226" textAnchor="middle" fontWeight="700" fill="#1c1917">SECONDARY MARKET</text>
        <text x="330" y="248" textAnchor="middle" fill="#78716c" fontSize="11">existing claims trade</text>
        <text x="330" y="266" textAnchor="middle" fill="#78716c" fontSize="11">investor ↔ investor</text>
        <text x="330" y="284" textAnchor="middle" fill="#78716c" fontSize="11">company receives nothing</text>

        <line x1="330" y1="198" x2="330" y2="152" stroke="#78716c" strokeWidth="2" strokeDasharray="5 4" />
        <text x="345" y="180" fill="#78716c" fontSize="11">liquidity makes the primary possible</text>

        <text x="330" y="328" textAnchor="middle" fill="#1c1917" fontSize="13" fontWeight="600">
          exit is always available - so entering becomes acceptable
        </text>
      </g>
      <defs>
        <marker id="mf1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#166534" /></marker>
      </defs>
    </svg>
  );
}
