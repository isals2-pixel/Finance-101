// Visuals for lessons 38-40 (portfolio theory: volatility, correlation, risk-adjusted return).

const F = 'ui-sans-serif,system-ui';

export function VolatilityDrag() {
  // Two paths, same +5% arithmetic average over two years, indexed from 10,000.
  // Steady: 10,000 -> 10,500 -> 11,025. Swinging: 10,000 -> 12,000 -> 10,800.
  // y mapping: value v -> 300 - (v - 9500) / 3000 * 220
  const y = (v: number) => 300 - ((v - 9500) / 3000) * 220;
  return (
    <svg viewBox="0 0 660 360" role="img" aria-label="Two investment paths with the same +5 percent average: the steady path ends at 11,025 while the +20 then -10 path ends at 10,800 - the gap is volatility drag" className="w-full">
      <g fontFamily={F} fontSize="12">
        <text x="330" y="26" textAnchor="middle" fontWeight="700" fill="#1c1917" fontSize="14">
          same +5 % average, two years, 10,000 € start
        </text>
        <line x1="70" y1="310" x2="620" y2="310" stroke="#78716c" strokeWidth="1.5" />
        <text x="70" y="330" textAnchor="middle" fill="#78716c" fontSize="11">year 0</text>
        <text x="330" y="330" textAnchor="middle" fill="#78716c" fontSize="11">year 1</text>
        <text x="590" y="330" textAnchor="middle" fill="#78716c" fontSize="11">year 2</text>

        <polyline
          points={`70,${y(10000)} 330,${y(10500)} 590,${y(11025)}`}
          fill="none" stroke="#166534" strokeWidth="3"
        />
        <text x="440" y={y(11025) - 14} fill="#166534" fontWeight="700">steady +5, +5 → 11,025 €</text>

        <polyline
          points={`70,${y(10000)} 330,${y(12000)} 590,${y(10800)}`}
          fill="none" stroke="#9a3412" strokeWidth="3" strokeDasharray="7 4"
        />
        <text x="330" y={y(12000) - 12} textAnchor="middle" fill="#9a3412" fontWeight="600">+20 %</text>
        <text x="470" y={y(11500)} fill="#9a3412" fontWeight="600">−10 % → 10,800 €</text>

        <line x1="590" y1={y(11025)} x2="590" y2={y(10800)} stroke="#1c1917" strokeWidth="2" />
        <text x="582" y={(y(11025) + y(10800)) / 2 + 4} textAnchor="end" fill="#1c1917" fontWeight="600" fontSize="11">
          drag: 225 €
        </text>

        <text x="330" y="352" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          the average describes the years - the compound path describes the money
        </text>
      </g>
    </svg>
  );
}

export function CorrelationMix() {
  // 60/40 stocks(16)/bonds(5) portfolio volatility as correlation falls +1 -> 0.
  // vol(rho) = sqrt(0.36*256 + 0.16*25 + 2*0.6*0.4*rho*16*5)
  const vol = (rho: number) => Math.sqrt(0.36 * 256 + 0.16 * 25 + 2 * 0.6 * 0.4 * rho * 16 * 5);
  const pts = [1, 0.75, 0.5, 0.25, 0.1, 0].map((rho, i) => {
    const x = 90 + i * 100;
    const yv = 300 - (vol(rho) - 9) * 70; // vol 9% -> y 300, each point 70px
    return { rho, x, y: yv, v: vol(rho) };
  });
  return (
    <svg viewBox="0 0 660 360" role="img" aria-label="Portfolio volatility of a 60/40 stock-bond mix falling from 11.6 percent at correlation plus one to 9.8 percent at correlation zero - same assets, less total swing" className="w-full">
      <g fontFamily={F} fontSize="12">
        <text x="330" y="26" textAnchor="middle" fontWeight="700" fill="#1c1917" fontSize="14">
          60/40 mix of 16 %-vol stocks and 5 %-vol bonds
        </text>
        <line x1="60" y1="310" x2="630" y2="310" stroke="#78716c" strokeWidth="1.5" />
        <text x="345" y="334" textAnchor="middle" fill="#78716c" fontSize="11">correlation, falling from +1 to 0</text>

        <line x1="60" y1={300 - (11.6 - 9) * 70} x2="630" y2={300 - (11.6 - 9) * 70} stroke="#78716c" strokeWidth="1" strokeDasharray="4 4" />
        <text x="626" y={300 - (11.6 - 9) * 70 - 6} textAnchor="end" fill="#78716c" fontSize="11">
          weighted average 11.6 % - reached only at +1
        </text>

        <polyline points={pts.map((p) => `${p.x},${p.y}`).join(' ')} fill="none" stroke="#1e3a5f" strokeWidth="3" />
        {pts.map((p) => (
          <g key={p.rho}>
            <circle cx={p.x} cy={p.y} r="5" fill="#1e3a5f" />
            <text x={p.x} y="326" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="11">{p.rho >= 1 ? '+1' : p.rho.toFixed(2).replace(/0+$/, '').replace(/\.$/, '')}</text>
          </g>
        ))}
        <text x={pts[0].x + 10} y={pts[0].y - 12} fill="#1e3a5f" fontWeight="600" fontSize="11">11.6 %</text>
        <text x={pts[5].x - 8} y={pts[5].y - 12} textAnchor="end" fill="#166534" fontWeight="700" fontSize="11">9.8 %</text>

        <text x="330" y="352" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          every step below correlation +1 deletes swing without touching return
        </text>
      </g>
    </svg>
  );
}

export function EfficientFrontier() {
  return (
    <svg viewBox="0 0 660 380" role="img" aria-label="Portfolios plotted by volatility and expected return: the upper-left edge of the attainable region is the efficient frontier; broad diversified mixes sit near it while concentrated bets sit deep inside" className="w-full">
      <g fontFamily={F} fontSize="12">
        <line x1="70" y1="320" x2="630" y2="320" stroke="#78716c" strokeWidth="1.5" />
        <line x1="70" y1="320" x2="70" y2="40" stroke="#78716c" strokeWidth="1.5" />
        <text x="350" y="344" textAnchor="middle" fill="#78716c" fontSize="11">volatility (risk) →</text>
        <text x="46" y="180" textAnchor="middle" fill="#78716c" fontSize="11" transform="rotate(-90 46 180)">expected return →</text>

        <path d="M 150 260 C 170 170, 260 90, 480 70 L 560 320 L 180 320 Z" fill="#e7e5e4" opacity="0.6" stroke="none" />
        <path d="M 150 260 C 170 170, 260 90, 480 70" fill="none" stroke="#1e3a5f" strokeWidth="3.5" />
        <text x="300" y="92" fill="#1e3a5f" fontWeight="700">efficient frontier</text>
        <text x="300" y="110" fill="#78716c" fontSize="11">most return at each risk level</text>

        <circle cx="185" cy="205" r="6" fill="#166534" />
        <text x="200" y="200" fill="#166534" fontWeight="600" fontSize="11">bonds + world ETF mix - near the edge</text>
        <circle cx="300" cy="140" r="6" fill="#166534" />
        <text x="315" y="136" fill="#166534" fontWeight="600" fontSize="11">broad equity-heavy mix</text>

        <circle cx="470" cy="240" r="6" fill="#9a3412" />
        <text x="455" y="262" textAnchor="end" fill="#9a3412" fontWeight="600" fontSize="11">single stock: full swing, no cancellation</text>
        <circle cx="380" cy="270" r="6" fill="#9a3412" />
        <text x="365" y="292" textAnchor="end" fill="#9a3412" fontWeight="600" fontSize="11">three overlapping funds</text>

        <text x="330" y="372" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          below the edge, some mix offers more return for the same swings
        </text>
      </g>
    </svg>
  );
}
