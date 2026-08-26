// Visuals for lessons 27-31 (market mechanics and equities).

const F = 'ui-sans-serif,system-ui';

export function ExchangeBrokerChain() {
  return (
    <svg viewBox="0 0 660 300" role="img" aria-label="Your order flows through the broker to the exchange, which matches it with another investor's order; the broker charges for access, the exchange runs the matching" className="w-full">
      <g fontFamily={F} fontSize="12">
        <rect x="20" y="110" width="130" height="70" rx="8" fill="#1e3a5f" />
        <text x="85" y="140" textAnchor="middle" fill="#fff" fontWeight="600">YOU</text>
        <text x="85" y="160" textAnchor="middle" fill="#a8c5e0" fontSize="11">tap "buy"</text>

        <line x1="150" y1="145" x2="215" y2="145" stroke="#1e3a5f" strokeWidth="3" markerEnd="url(#ebc1)" />

        <rect x="220" y="100" width="150" height="90" rx="8" fill="#fff" stroke="#1e3a5f" strokeWidth="1.5" />
        <text x="295" y="128" textAnchor="middle" fontWeight="700" fill="#1c1917">BROKER</text>
        <text x="295" y="148" textAnchor="middle" fill="#78716c" fontSize="11">your account, your ramp</text>
        <text x="295" y="166" textAnchor="middle" fill="#9a3412" fontSize="11">earns: commissions</text>

        <line x1="370" y1="145" x2="435" y2="145" stroke="#1e3a5f" strokeWidth="3" markerEnd="url(#ebc1)" />

        <rect x="440" y="100" width="180" height="90" rx="8" fill="#f0fdf4" stroke="#166534" strokeWidth="1.5" />
        <text x="530" y="128" textAnchor="middle" fontWeight="700" fill="#166534">EXCHANGE</text>
        <text x="530" y="148" textAnchor="middle" fill="#166534" fontSize="11">matches orders, publishes prices</text>
        <text x="530" y="166" textAnchor="middle" fill="#166534" fontSize="11">regulated (AMF)</text>

        <line x1="530" y1="192" x2="530" y2="230" stroke="#78716c" strokeWidth="2" strokeDasharray="4 4" />
        <text x="530" y="252" textAnchor="middle" fill="#78716c" fontSize="11">your counterparty: another investor's order</text>

        <text x="330" y="60" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          in plain broking, nobody in the chain is trading against you
        </text>
      </g>
      <defs>
        <marker id="ebc1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#1e3a5f" /></marker>
      </defs>
    </svg>
  );
}

export function OrderBookSpread() {
  const asks = [
    ['50.60', '200'],
    ['50.30', '80'],
    ['50.05', '60'],
  ];
  const bids = [
    ['49.95', '90'],
    ['49.80', '120'],
    ['49.50', '250'],
  ];
  return (
    <svg viewBox="0 0 640 360" role="img" aria-label="The order book: resting sell orders above at 50.05 and up, resting buy orders below at 49.95 and down; the gap between best ask and best bid is the spread" className="w-full">
      <g fontFamily={F} fontSize="12">
        <text x="320" y="28" textAnchor="middle" fontWeight="700" fill="#1c1917" fontSize="14">THE ORDER BOOK</text>
        {asks.map(([p, q], i) => (
          <g key={p}>
            <rect x="180" y={44 + i * 34} width="280" height="28" rx="4" fill="#fef2f2" stroke="#9a3412" strokeWidth="0.8" />
            <text x="220" y={63 + i * 34} fill="#9a3412" fontWeight="600">{p}</text>
            <text x="420" y={63 + i * 34} textAnchor="end" fill="#78716c">{q} sh</text>
          </g>
        ))}
        <text x="480" y="140" fill="#9a3412" fontSize="11">sellers rest here (asks)</text>

        <rect x="180" y="150" width="280" height="26" rx="4" fill="#fff" stroke="#1e3a5f" strokeWidth="1.5" strokeDasharray="5 3" />
        <text x="320" y="167" textAnchor="middle" fill="#1e3a5f" fontWeight="700">SPREAD: 50.05 − 49.95 = 0.10</text>

        {bids.map(([p, q], i) => (
          <g key={p}>
            <rect x="180" y={184 + i * 34} width="280" height="28" rx="4" fill="#f0fdf4" stroke="#166534" strokeWidth="0.8" />
            <text x="220" y={203 + i * 34} fill="#166534" fontWeight="600">{p}</text>
            <text x="420" y={203 + i * 34} textAnchor="end" fill="#78716c">{q} sh</text>
          </g>
        ))}
        <text x="480" y="280" fill="#166534" fontSize="11">buyers rest here (bids)</text>

        <text x="320" y="330" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          trade immediately and you cross the gap: buy at 50.05, sell at 49.95
        </text>
      </g>
    </svg>
  );
}

export function OrderFill() {
  return (
    <svg viewBox="0 0 660 340" role="img" aria-label="A market order eats through the resting asks and fills at worsening prices; a limit order rests at its ceiling and can never fill above it" className="w-full">
      <g fontFamily={F} fontSize="12">
        <text x="170" y="34" textAnchor="middle" fontWeight="700" fill="#9a3412">MARKET ORDER, 200 sh</text>
        <rect x="60" y="50" width="220" height="26" rx="4" fill="#fef2f2" stroke="#9a3412" />
        <text x="170" y="68" textAnchor="middle" fill="#9a3412">takes 60 @ 50.00</text>
        <rect x="60" y="82" width="220" height="26" rx="4" fill="#fef2f2" stroke="#9a3412" />
        <text x="170" y="100" textAnchor="middle" fill="#9a3412">then 80 @ 50.30</text>
        <rect x="60" y="114" width="220" height="26" rx="4" fill="#fef2f2" stroke="#9a3412" />
        <text x="170" y="132" textAnchor="middle" fill="#9a3412">then 60 @ 50.60</text>
        <text x="170" y="170" textAnchor="middle" fill="#1c1917" fontWeight="600">avg 50.30 - slippage 0.6%</text>
        <text x="170" y="192" textAnchor="middle" fill="#78716c" fontSize="11">guaranteed: execution · uncertain: price</text>

        <text x="490" y="34" textAnchor="middle" fontWeight="700" fill="#166534">LIMIT ORDER 50.05, 200 sh</text>
        <rect x="380" y="50" width="220" height="26" rx="4" fill="#f0fdf4" stroke="#166534" />
        <text x="490" y="68" textAnchor="middle" fill="#166534">takes 60 @ 50.00 (better)</text>
        <rect x="380" y="82" width="220" height="26" rx="4" fill="#f0fdf4" stroke="#166534" strokeDasharray="5 3" />
        <text x="490" y="100" textAnchor="middle" fill="#166534">140 rest at 50.05 and wait</text>
        <text x="490" y="170" textAnchor="middle" fill="#1c1917" fontWeight="600">never pays above 50.05</text>
        <text x="490" y="192" textAnchor="middle" fill="#78716c" fontSize="11">guaranteed: price · uncertain: execution</text>

        <text x="330" y="250" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          two certainties for sale - pick the one your trade needs
        </text>
        <text x="330" y="278" textAnchor="middle" fill="#78716c" fontSize="12">
          patient monthly buyer → limit slightly above the ask: free ceiling, same fill in the normal case
        </text>
      </g>
    </svg>
  );
}

export function EarningsWaterfall() {
  return (
    <svg viewBox="0 0 660 360" role="img" aria-label="Waterfall from revenue 120 million through costs, interest and tax to earnings 8 million, split into 4 million dividends and 4 million retained" className="w-full">
      <g fontFamily={F} fontSize="12">
        <rect x="40" y="60" width="110" height="240" fill="#1e3a5f" />
        <text x="95" y="185" textAnchor="middle" fill="#fff" fontWeight="600" transform="rotate(-90 95 185)">REVENUE 120m</text>

        <rect x="180" y="60" width="110" height="208" fill="#78716c" opacity="0.5" />
        <text x="235" y="170" textAnchor="middle" fill="#1c1917" fontSize="11" transform="rotate(-90 235 170)">costs −104m</text>
        <rect x="180" y="268" width="110" height="4" fill="#9a3412" />
        <rect x="180" y="272" width="110" height="12" fill="#9a3412" opacity="0.6" />
        <text x="320" y="282" fill="#78716c" fontSize="10">interest −2m, tax −6m</text>

        <rect x="330" y="284" width="110" height="16" fill="#166534" />
        <text x="385" y="278" textAnchor="middle" fill="#166534" fontWeight="700">EARNINGS 8m</text>

        <line x1="440" y1="292" x2="500" y2="260" stroke="#166534" strokeWidth="2" markerEnd="url(#ew1)" />
        <line x1="440" y1="292" x2="500" y2="322" stroke="#1e3a5f" strokeWidth="2" markerEnd="url(#ew2)" />
        <text x="510" y="256" fill="#166534" fontWeight="600" fontSize="11">dividends 4m → owners now</text>
        <text x="510" y="326" fill="#1e3a5f" fontWeight="600" fontSize="11">retained 4m → compounds inside</text>

        <text x="330" y="36" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          owners live off what remains - then choose: pay out or reinvest
        </text>
      </g>
      <defs>
        <marker id="ew1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#166534" /></marker>
        <marker id="ew2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#1e3a5f" /></marker>
      </defs>
    </svg>
  );
}

export function GrowthValueCompare() {
  return (
    <svg viewBox="0 0 660 340" role="img" aria-label="Two companies with the same 2 euro earnings per share: the growth stock priced at 70 on expected expansion, the value stock priced at 20 on expected stagnation" className="w-full">
      <g fontFamily={F} fontSize="12">
        <text x="330" y="30" textAnchor="middle" fontWeight="700" fill="#1c1917" fontSize="14">
          same engine today: EPS = 2 €
        </text>

        <rect x="70" y="60" width="240" height="200" rx="10" fill="#fff" stroke="#1e3a5f" strokeWidth="1.5" />
        <text x="190" y="88" textAnchor="middle" fontWeight="700" fill="#1e3a5f">GROWTH</text>
        <text x="190" y="120" textAnchor="middle" fontSize="26" fontWeight="700" fill="#1c1917">70 €</text>
        <text x="190" y="146" textAnchor="middle" fill="#78716c" fontSize="11">price = 35 × current earnings</text>
        <text x="190" y="176" textAnchor="middle" fill="#78716c" fontSize="11">bet: 2 € becomes 4, then 8</text>
        <text x="190" y="206" textAnchor="middle" fill="#9a3412" fontSize="11">risk: growth priced in fails to arrive</text>
        <text x="190" y="226" textAnchor="middle" fill="#9a3412" fontSize="11">→ the multiple collapses</text>

        <rect x="350" y="60" width="240" height="200" rx="10" fill="#fff" stroke="#166534" strokeWidth="1.5" />
        <text x="470" y="88" textAnchor="middle" fontWeight="700" fill="#166534">VALUE</text>
        <text x="470" y="120" textAnchor="middle" fontSize="26" fontWeight="700" fill="#1c1917">20 €</text>
        <text x="470" y="146" textAnchor="middle" fill="#78716c" fontSize="11">price = 10 × current earnings</text>
        <text x="470" y="176" textAnchor="middle" fill="#78716c" fontSize="11">bet: earnings hold, dividends flow</text>
        <text x="470" y="206" textAnchor="middle" fill="#9a3412" fontSize="11">risk: the cheapness was a verdict</text>
        <text x="470" y="226" textAnchor="middle" fill="#9a3412" fontSize="11">→ the value trap</text>

        <text x="330" y="300" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          the broad index holds both - and never has to referee
        </text>
      </g>
    </svg>
  );
}
