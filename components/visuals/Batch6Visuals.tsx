// Visuals for lessons 32-37 (fixed income depth and ETF structure).

const F = 'ui-sans-serif,system-ui';

export function PriceYieldSeesaw() {
  return (
    <svg viewBox="0 0 660 320" role="img" aria-label="Seesaw over fixed cash flows: when the price paid falls to 800, the yield earned rises to 5 percent; at par both equal the coupon rate" className="w-full">
      <g fontFamily={F} fontSize="12">
        <text x="330" y="30" textAnchor="middle" fontWeight="700" fill="#1c1917" fontSize="14">
          fixed cash flows: 40 €/year coupon + 1,000 € at maturity
        </text>
        <line x1="150" y1="220" x2="510" y2="140" stroke="#78716c" strokeWidth="4" />
        <polygon points="330,180 310,222 350,222" fill="#78716c" />
        <rect x="90" y="226" width="160" height="56" rx="8" fill="#fef2f2" stroke="#9a3412" strokeWidth="1.5" />
        <text x="170" y="250" textAnchor="middle" fill="#9a3412" fontWeight="700">PRICE ↓ 800 €</text>
        <text x="170" y="270" textAnchor="middle" fill="#9a3412" fontSize="11">pay less for the same flows</text>
        <rect x="420" y="80" width="160" height="56" rx="8" fill="#f0fdf4" stroke="#166534" strokeWidth="1.5" />
        <text x="500" y="104" textAnchor="middle" fill="#166534" fontWeight="700">YIELD ↑ 5 %</text>
        <text x="500" y="124" textAnchor="middle" fill="#166534" fontSize="11">earn more on what you paid</text>
        <text x="330" y="308" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          one object, two readings - they can only move in opposite directions
        </text>
      </g>
    </svg>
  );
}

export function DurationLever() {
  return (
    <svg viewBox="0 0 660 320" role="img" aria-label="The same one point yield rise tilts a duration 2 bond by about 2 percent and a duration 15 bond by about 15 percent" className="w-full">
      <g fontFamily={F} fontSize="12">
        <text x="330" y="30" textAnchor="middle" fontWeight="700" fill="#1c1917" fontSize="14">
          same event: yields +1 point
        </text>
        <line x1="80" y1="170" x2="280" y2="150" stroke="#1e3a5f" strokeWidth="5" />
        <circle cx="80" cy="170" r="6" fill="#78716c" />
        <text x="180" y="120" textAnchor="middle" fontWeight="600" fill="#1c1917">duration 2</text>
        <text x="180" y="200" textAnchor="middle" fill="#9a3412" fontWeight="600">price ≈ −2%</text>

        <line x1="380" y1="200" x2="620" y2="80" stroke="#1e3a5f" strokeWidth="5" />
        <circle cx="380" cy="200" r="6" fill="#78716c" />
        <text x="500" y="60" textAnchor="middle" fontWeight="600" fill="#1c1917">duration 15</text>
        <text x="500" y="240" textAnchor="middle" fill="#9a3412" fontWeight="600">price ≈ −15%</text>

        <text x="330" y="290" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          Δprice ≈ −duration × Δyield - the lever works identically in both directions
        </text>
      </g>
    </svg>
  );
}

export function CreditSpectrum() {
  const rows = [
    ['Top sovereigns (AAA-AA)', 'spread ≈ 0-0.5', '#166534', 120],
    ['Solid corporates (A-BBB)', 'spread ≈ 0.5-2', '#1e3a5f', 220],
    ['High yield (BB and below)', 'spread ≈ 2-6+', '#9a3412', 380],
  ] as const;
  return (
    <svg viewBox="0 0 660 300" role="img" aria-label="Credit spectrum from top-rated sovereigns with near-zero spreads through investment grade corporates to high yield with wide spreads" className="w-full">
      <g fontFamily={F} fontSize="12">
        {rows.map(([label, spread, color, w], i) => (
          <g key={label}>
            <text x="30" y={70 + i * 64} fill="#1c1917" fontWeight="600">{label}</text>
            <rect x="30" y={80 + i * 64} width={w} height="20" rx="5" fill={color} opacity="0.75" />
            <text x={40 + w} y={95 + i * 64} fill="#78716c">{spread} pts over govies</text>
          </g>
        ))}
        <line x1="30" y1="52" x2="630" y2="52" stroke="#78716c" strokeWidth="1" strokeDasharray="4 4" />
        <text x="330" y="40" textAnchor="middle" fill="#78716c" fontSize="11">
          the investment-grade / high-yield boundary sits at BBB− / below
        </text>
        <text x="330" y="280" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          wider spread = higher priced default probability - compensation, not bonus
        </text>
      </g>
    </svg>
  );
}

export function ReplicationPaths() {
  return (
    <svg viewBox="0 0 660 340" role="img" aria-label="Two routes to the index return: physical replication holds the index securities; synthetic replication holds collateral and a swap with a bank, capped at 10 percent counterparty exposure under UCITS" className="w-full">
      <g fontFamily={F} fontSize="12">
        <rect x="240" y="20" width="180" height="50" rx="8" fill="#1e3a5f" />
        <text x="330" y="50" textAnchor="middle" fill="#fff" fontWeight="700">INDEX RETURN</text>

        <line x1="270" y1="72" x2="180" y2="120" stroke="#78716c" strokeWidth="2" markerEnd="url(#rp1)" />
        <line x1="390" y1="72" x2="480" y2="120" stroke="#78716c" strokeWidth="2" markerEnd="url(#rp1)" />

        <rect x="60" y="125" width="240" height="120" rx="10" fill="#f0fdf4" stroke="#166534" strokeWidth="1.5" />
        <text x="180" y="152" textAnchor="middle" fontWeight="700" fill="#166534">PHYSICAL</text>
        <text x="180" y="176" textAnchor="middle" fill="#166534" fontSize="11">holds the index's securities</text>
        <text x="180" y="194" textAnchor="middle" fill="#166534" fontSize="11">fully, or by sampling</text>
        <text x="180" y="222" textAnchor="middle" fill="#78716c" fontSize="11">footnote: securities lending income</text>

        <rect x="360" y="125" width="240" height="120" rx="10" fill="#fff" stroke="#1e3a5f" strokeWidth="1.5" />
        <text x="480" y="152" textAnchor="middle" fontWeight="700" fill="#1c1917">SYNTHETIC</text>
        <text x="480" y="176" textAnchor="middle" fill="#78716c" fontSize="11">collateral basket + swap with a bank</text>
        <text x="480" y="194" textAnchor="middle" fill="#78716c" fontSize="11">swap pays the exact index return</text>
        <text x="480" y="222" textAnchor="middle" fill="#9a3412" fontSize="11">counterparty risk: capped at 10% (UCITS)</text>

        <text x="330" y="300" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          two roads, one destination - judge both by the measured tracking difference
        </text>
      </g>
      <defs>
        <marker id="rp1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#78716c" /></marker>
      </defs>
    </svg>
  );
}

export function TrackingGap() {
  return (
    <svg viewBox="0 0 660 340" role="img" aria-label="Index and fund value lines over a year: the fund runs a thin, persistent 0.28 point gap below the index - the tracking difference" className="w-full">
      <g fontFamily={F} fontSize="12">
        <line x1="60" y1="290" x2="620" y2="290" stroke="#78716c" strokeWidth="1.5" />
        <polyline points="60,240 160,220 260,235 360,190 460,175 560,150 620,140" fill="none" stroke="#1e3a5f" strokeWidth="3" />
        <text x="540" y="130" fill="#1e3a5f" fontWeight="700">index +6.00%</text>
        <polyline points="60,240 160,222 260,239 360,196 460,182 560,158 620,149" fill="none" stroke="#9a3412" strokeWidth="2.5" strokeDasharray="7 4" />
        <text x="540" y="175" fill="#9a3412" fontWeight="600">fund +5.72%</text>
        <line x1="620" y1="140" x2="620" y2="149" stroke="#1c1917" strokeWidth="2" />
        <text x="612" y="120" textAnchor="end" fill="#1c1917" fontWeight="600" fontSize="11">gap = 0.28 pts</text>
        <text x="340" y="322" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          TER + trading + taxes − lending income = the realized, all-in cost
        </text>
      </g>
    </svg>
  );
}

export function FundLabels() {
  const rows = [
    ['UCITS', 'the protection layer', 'diversification floors, segregated custody, counterparty caps', '#166534'],
    ['Domicile: Ireland', 'the tax setting', 'treaty withholding on foreign dividends - a permanent cost dial', '#1e3a5f'],
    ['Acc / Dist', 'the dividend plumbing', 'reinvested inside automatically, or paid out as cash', '#9a3412'],
  ] as const;
  return (
    <svg viewBox="0 0 660 320" role="img" aria-label="The three factsheet labels: UCITS gives protection, domicile sets dividend withholding, Acc or Dist decides whether dividends reinvest internally or pay out" className="w-full">
      <g fontFamily={F} fontSize="12">
        <text x="330" y="30" textAnchor="middle" fontWeight="700" fill="#1c1917" fontSize="14">
          "XYZ World UCITS ETF (Acc) - domiciled in Ireland"
        </text>
        {rows.map(([label, role, detail, color], i) => (
          <g key={label}>
            <rect x="50" y={54 + i * 76} width="150" height="52" rx="8" fill={color} />
            <text x="125" y={84 + i * 76} textAnchor="middle" fill="#fff" fontWeight="700">{label}</text>
            <text x="220" y={76 + i * 76} fill="#1c1917" fontWeight="600">{role}</text>
            <text x="220" y={96 + i * 76} fill="#78716c" fontSize="11">{detail}</text>
          </g>
        ))}
        <text x="330" y="304" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          same fund, Acc vs Dist: identical portfolio - only the dividends' location differs
        </text>
      </g>
    </svg>
  );
}
