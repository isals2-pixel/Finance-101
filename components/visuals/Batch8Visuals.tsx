// Visuals for lessons 41-43 (asset allocation, rebalancing, portfolio construction).

const F = 'ui-sans-serif,system-ui';

export function AllocationDials() {
  const dials = [
    ['HORIZON', 'when is the money needed?', '30 years → high equity OK', '#166534', 355],
    ['CAPACITY', 'what loss can the finances absorb?', 'stable income, reserves → high', '#1e3a5f', 300],
    ['TOLERANCE', 'what dip can you watch without selling?', 'sold in the last dip → moderate', '#9a3412', 210],
  ] as const;
  return (
    <svg viewBox="0 0 660 360" role="img" aria-label="Three dials - horizon, capacity and tolerance - each capping the equity share; the allocation is set by the lowest of the three" className="w-full">
      <g fontFamily={F} fontSize="12">
        <text x="330" y="28" textAnchor="middle" fontWeight="700" fill="#1c1917" fontSize="14">
          how much equity? three caps, the lowest binds
        </text>
        {dials.map(([label, q, note, color, w], i) => (
          <g key={label}>
            <text x="40" y={72 + i * 74} fill="#1c1917" fontWeight="700">{label}</text>
            <text x="150" y={72 + i * 74} fill="#78716c" fontSize="11">{q}</text>
            <rect x="40" y={80 + i * 74} width="580" height="18" rx="5" fill="#e7e5e4" />
            <rect x="40" y={80 + i * 74} width={w} height="18" rx="5" fill={color} opacity="0.8" />
            <text x={48 + w} y={94 + i * 74} fill="#78716c" fontSize="11">{note}</text>
          </g>
        ))}
        <line x1={40 + 210} y1="66" x2={40 + 210} y2="300" stroke="#1c1917" strokeWidth="2" strokeDasharray="5 4" />
        <text x={40 + 210} y="318" textAnchor="middle" fill="#1c1917" fontWeight="700" fontSize="12">
          allocation set here - at the lowest cap
        </text>
        <text x="330" y="348" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          the best allocation you can keep beats the better one you can't
        </text>
      </g>
    </svg>
  );
}

export function RebalancingCycle() {
  return (
    <svg viewBox="0 0 660 340" role="img" aria-label="A 60/40 target drifts to 69/31 after an equity rally and is restored by selling 12,000 euros of stocks and buying bonds" className="w-full">
      <g fontFamily={F} fontSize="12">
        <text x="120" y="40" textAnchor="middle" fontWeight="700" fill="#1c1917">target 60/40</text>
        <rect x="70" y="60" width="100" height="120" rx="6" fill="#e7e5e4" />
        <rect x="70" y="60" width="100" height="72" fill="#1e3a5f" rx="6" />
        <text x="120" y="102" textAnchor="middle" fill="#fff" fontWeight="700">60</text>
        <text x="120" y="162" textAnchor="middle" fill="#57534e" fontWeight="700">40</text>

        <line x1="185" y1="120" x2="255" y2="120" stroke="#78716c" strokeWidth="2" markerEnd="url(#rb1)" />
        <text x="220" y="104" textAnchor="middle" fill="#9a3412" fontSize="11" fontWeight="600">stocks +50%</text>

        <text x="330" y="40" textAnchor="middle" fontWeight="700" fill="#9a3412">drifted 69/31</text>
        <rect x="280" y="60" width="100" height="120" rx="6" fill="#e7e5e4" />
        <rect x="280" y="60" width="100" height="83" fill="#9a3412" rx="6" />
        <text x="330" y="108" textAnchor="middle" fill="#fff" fontWeight="700">69</text>
        <text x="330" y="166" textAnchor="middle" fill="#57534e" fontWeight="700">31</text>
        <text x="330" y="200" textAnchor="middle" fill="#9a3412" fontSize="11">risk nobody chose</text>

        <line x1="395" y1="120" x2="465" y2="120" stroke="#78716c" strokeWidth="2" markerEnd="url(#rb1)" />
        <text x="430" y="96" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="600">sell 12,000 € stocks</text>
        <text x="430" y="110" textAnchor="middle" fill="#166534" fontSize="11" fontWeight="600">buy 12,000 € bonds</text>

        <text x="540" y="40" textAnchor="middle" fontWeight="700" fill="#166534">restored 60/40</text>
        <rect x="490" y="60" width="100" height="120" rx="6" fill="#e7e5e4" />
        <rect x="490" y="60" width="100" height="72" fill="#166534" rx="6" />
        <text x="540" y="102" textAnchor="middle" fill="#fff" fontWeight="700">60</text>
        <text x="540" y="162" textAnchor="middle" fill="#57534e" fontWeight="700">40</text>

        <text x="330" y="250" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          rule: check yearly, act past a ±5-point band - or steer new savings to the light side
        </text>
        <text x="330" y="276" textAnchor="middle" fill="#78716c" fontSize="12">
          the rule trades against emotion: it sells after euphoria and buys after crashes
        </text>
      </g>
      <defs>
        <marker id="rb1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#78716c" /></marker>
      </defs>
    </svg>
  );
}

export function PortfolioBlueprint() {
  const steps = [
    ['1. LIQUIDITY', 'emergency reserve + near-term money → cash', 'never sold in a dip', '#78716c'],
    ['2. ALLOCATION', 'stock/bond ratio from horizon, capacity, tolerance', 'the decision that does the work', '#1c1917'],
    ['3. FUNDS', 'one world-equity UCITS ETF + one high-grade bond fund', 'picked on TER and tracking difference', '#1e3a5f'],
    ['4. RULES', 'written weights, ±5-pt band, automated contributions', 'changed by a changed life, not a changed market', '#166534'],
  ] as const;
  return (
    <svg viewBox="0 0 660 360" role="img" aria-label="The construction stack in order: liquidity carved out first, then the allocation, then two broad funds, then the written rebalancing rule" className="w-full">
      <g fontFamily={F} fontSize="12">
        <text x="330" y="28" textAnchor="middle" fontWeight="700" fill="#1c1917" fontSize="14">
          build in this order
        </text>
        {steps.map(([label, what, note, color], i) => (
          <g key={label}>
            <rect x="60" y={48 + i * 68} width="540" height="56" rx="9" fill="#fff" stroke={color} strokeWidth="1.8" />
            <text x="80" y={78 + i * 68} fill={color} fontWeight="700">{label}</text>
            <text x="215" y={72 + i * 68} fill="#1c1917" fontSize="11">{what}</text>
            <text x="215" y={90 + i * 68} fill="#78716c" fontSize="11">{note}</text>
          </g>
        ))}
        <text x="330" y="344" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          two lines on a statement, carrying all of Levels 5-10
        </text>
      </g>
    </svg>
  );
}
