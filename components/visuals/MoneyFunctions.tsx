// Lesson 1 visual: the three functions of money, and the collapse in the
// number of prices when a unit of account exists. Explains a relationship,
// per SPEC_V2 §18-19.
export function MoneyFunctions() {
  return (
    <svg viewBox="0 0 640 400" role="img" aria-label="Diagram: the three functions of money and how a common unit reduces 4950 exchange rates to 100 prices" className="w-full">
      <style>{`.t{font-family:ui-sans-serif,system-ui,sans-serif}`}</style>

      {/* Center node */}
      <circle cx="200" cy="180" r="52" fill="#1e3a5f" />
      <text x="200" y="186" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="600" className="t">
        MONEY
      </text>

      {/* Function nodes */}
      <g className="t" fontSize="13">
        <line x1="200" y1="128" x2="200" y2="70" stroke="#78716c" strokeWidth="1.5" />
        <rect x="95" y="28" width="210" height="42" rx="8" fill="#fff" stroke="#1e3a5f" />
        <text x="200" y="46" textAnchor="middle" fill="#1c1917" fontWeight="600">Medium of exchange</text>
        <text x="200" y="62" textAnchor="middle" fill="#78716c" fontSize="11">what you hand over in every trade</text>

        <line x1="153" y1="205" x2="92" y2="252" stroke="#78716c" strokeWidth="1.5" />
        <rect x="10" y="256" width="200" height="42" rx="8" fill="#fff" stroke="#1e3a5f" />
        <text x="110" y="274" textAnchor="middle" fill="#1c1917" fontWeight="600">Unit of account</text>
        <text x="110" y="290" textAnchor="middle" fill="#78716c" fontSize="11">one measuring stick for all prices</text>

        <line x1="247" y1="205" x2="308" y2="252" stroke="#78716c" strokeWidth="1.5" />
        <rect x="230" y="256" width="200" height="42" rx="8" fill="#fff" stroke="#1e3a5f" />
        <text x="330" y="274" textAnchor="middle" fill="#1c1917" fontWeight="600">Store of value</text>
        <text x="330" y="290" textAnchor="middle" fill="#78716c" fontSize="11">purchasing power carried in time</text>
      </g>

      {/* Right panel: 4950 -> 100 */}
      <g className="t">
        <rect x="450" y="40" width="180" height="300" rx="10" fill="#fff" stroke="#e7e5e4" />
        <text x="540" y="70" textAnchor="middle" fontSize="12" fill="#78716c">
          100 goods, barter
        </text>
        <text x="540" y="112" textAnchor="middle" fontSize="30" fontWeight="700" fill="#1c1917">
          4,950
        </text>
        <text x="540" y="132" textAnchor="middle" fontSize="11" fill="#78716c">
          exchange rates to know
        </text>
        <text x="540" y="180" textAnchor="middle" fontSize="20" fill="#1e3a5f">
          ↓
        </text>
        <text x="540" y="212" textAnchor="middle" fontSize="12" fill="#78716c">
          100 goods, with money
        </text>
        <text x="540" y="254" textAnchor="middle" fontSize="30" fontWeight="700" fill="#1e3a5f">
          100
        </text>
        <text x="540" y="274" textAnchor="middle" fontSize="11" fill="#78716c">
          prices, one per good
        </text>
        <text x="540" y="316" textAnchor="middle" fontSize="11" fill="#78716c">
          n(n−1)/2 pairs → n prices
        </text>
      </g>

      {/* Foundation note */}
      <g className="t">
        <rect x="60" y="330" width="300" height="46" rx="8" fill="#f5f5f4" stroke="#e7e5e4" />
        <text x="210" y="349" textAnchor="middle" fontSize="12" fill="#1c1917" fontWeight="600">
          What holds it up
        </text>
        <text x="210" y="366" textAnchor="middle" fontSize="11" fill="#78716c">
          shared acceptance + managed scarcity
        </text>
      </g>
    </svg>
  );
}
