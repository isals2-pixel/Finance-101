// Visuals for lessons 47-50 (personal finance base, pensions, French tax, wrappers).

const F = 'ui-sans-serif,system-ui';

export function FoundationPyramid() {
  const layers = [
    ['INVESTING', 'long-horizon money only - the two-fund portfolio', '#1e3a5f', 190, 66],
    ['EXPENSIVE DEBT CLEARED', 'repaying 18 % is a guaranteed 18 %', '#9a3412', 320, 152],
    ['RESERVE + INSURANCE', '3-6 months in livrets · liability, health, disability cover', '#166534', 460, 238],
  ] as const;
  return (
    <svg viewBox="0 0 660 360" role="img" aria-label="The order of operations pyramid: emergency reserve and insurance at the base, expensive debt cleared next, long-horizon investing only at the top" className="w-full">
      <g fontFamily={F} fontSize="12">
        <text x="330" y="28" textAnchor="middle" fontWeight="700" fill="#1c1917" fontSize="14">
          build from the bottom
        </text>
        {layers.map(([label, note, color, w, y]) => (
          <g key={label}>
            <rect x={330 - w / 2} y={y} width={w} height="72" rx="8" fill={color} opacity="0.85" />
            <text x="330" y={y + 32} textAnchor="middle" fill="#fff" fontWeight="700">{label}</text>
            <text x="330" y={y + 52} textAnchor="middle" fill="#fff" fontSize="10.5" opacity="0.95">{note}</text>
          </g>
        ))}
        <text x="330" y="342" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          the base is what keeps surprises from ever selling the portfolio
        </text>
      </g>
    </svg>
  );
}

export function PensionPillars() {
  return (
    <svg viewBox="0 0 660 360" role="img" aria-label="Three pension pillars: the State pay-as-you-go scheme and mandatory complementary schemes replace part of income; personal saving fills the remaining gap" className="w-full">
      <g fontFamily={F} fontSize="12">
        <text x="330" y="28" textAnchor="middle" fontWeight="700" fill="#1c1917" fontSize="14">
          net income 2,500 € - where retirement income comes from
        </text>
        <line x1="60" y1="300" x2="620" y2="300" stroke="#78716c" strokeWidth="1.5" />

        <rect x="90" y="120" width="130" height="180" rx="8" fill="#1e3a5f" opacity="0.9" />
        <text x="155" y="150" textAnchor="middle" fill="#fff" fontWeight="700" fontSize="11">1. STATE</text>
        <text x="155" y="166" textAnchor="middle" fill="#fff" fontSize="10">pay-as-you-go</text>
        <text x="155" y="182" textAnchor="middle" fill="#fff" fontSize="10">(répartition)</text>

        <rect x="250" y="180" width="130" height="120" rx="8" fill="#1e3a5f" opacity="0.65" />
        <text x="315" y="210" textAnchor="middle" fill="#fff" fontWeight="700" fontSize="11">2. COMPLEMENTARY</text>
        <text x="315" y="226" textAnchor="middle" fill="#fff" fontSize="10">Agirc-Arrco points</text>

        <rect x="410" y="230" width="130" height="70" rx="8" fill="#166534" opacity="0.9" />
        <text x="475" y="258" textAnchor="middle" fill="#fff" fontWeight="700" fontSize="11">3. PERSONAL</text>
        <text x="475" y="274" textAnchor="middle" fill="#fff" fontSize="10">your saving fills the gap</text>

        <line x1="90" y1="90" x2="620" y2="90" stroke="#1c1917" strokeWidth="1.5" strokeDasharray="5 4" />
        <text x="614" y="80" textAnchor="end" fill="#1c1917" fontSize="11" fontWeight="600">income to maintain: 2,500 €</text>
        <line x1="90" y1="160" x2="620" y2="160" stroke="#9a3412" strokeWidth="1.5" strokeDasharray="5 4" />
        <text x="614" y="152" textAnchor="end" fill="#9a3412" fontSize="11" fontWeight="600">pillars 1+2 replace ≈ 70 % → 1,750 €</text>
        <text x="614" y="122" textAnchor="end" fill="#166534" fontSize="11" fontWeight="700">the gap: 750 €/month</text>

        <text x="330" y="340" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          your number is at info-retraite.fr - the earlier the saving starts, the cheaper each euro
        </text>
      </g>
    </svg>
  );
}

export function TaxBite() {
  return (
    <svg viewBox="0 0 660 340" role="img" aria-label="A 3,000 euro realized gain in a CTO loses 942 euros to the 31.4 percent flat tax; the same gain left unrealized keeps compounding in full" className="w-full">
      <g fontFamily={F} fontSize="12">
        <text x="330" y="28" textAnchor="middle" fontWeight="700" fill="#1c1917" fontSize="14">
          the same 3,000 € gain, two behaviours
        </text>

        <text x="180" y="66" textAnchor="middle" fontWeight="700" fill="#9a3412">SOLD (realized)</text>
        <rect x="110" y="80" width="140" height="180" rx="8" fill="#e7e5e4" />
        <rect x="110" y="80" width="140" height="124" fill="#166534" opacity="0.85" rx="8" />
        <rect x="110" y="204" width="140" height="56" fill="#9a3412" opacity="0.9" />
        <text x="180" y="150" textAnchor="middle" fill="#fff" fontWeight="700">keeps 2,058 €</text>
        <text x="180" y="236" textAnchor="middle" fill="#fff" fontWeight="700" fontSize="11">tax now: 942 €</text>
        <text x="180" y="282" textAnchor="middle" fill="#78716c" fontSize="11">PFU 31.4 % = 12.8 + 18.6</text>

        <text x="480" y="66" textAnchor="middle" fontWeight="700" fill="#166534">HELD (unrealized)</text>
        <rect x="410" y="80" width="140" height="180" rx="8" fill="#166534" opacity="0.85" />
        <text x="480" y="160" textAnchor="middle" fill="#fff" fontWeight="700">3,000 € keeps</text>
        <text x="480" y="178" textAnchor="middle" fill="#fff" fontWeight="700">compounding</text>
        <text x="480" y="282" textAnchor="middle" fill="#78716c" fontSize="11">tax falls once - at final sale</text>

        <text x="330" y="322" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          deferral is the one tax lever every investor holds (rates verified 2026-08-26)
        </text>
      </g>
    </svg>
  );
}

export function WrapperMap() {
  const rows = [
    ['PEA', '5-year clock', 'after: income-tax exempt - social 18.6 % only', 'cap 150 k€ deposits · European/eligible ETFs', '#166534'],
    ['ASSURANCE-VIE', '8-year clock', 'after: 4,600/9,200 € yearly allowance + reduced rate', 'fonds euros · succession advantages · watch fees', '#1e3a5f'],
    ['CTO', 'no clock', 'flat tax 31.4 % on gains and dividends', 'no cap, no restrictions, full liquidity', '#9a3412'],
  ] as const;
  return (
    <svg viewBox="0 0 660 360" role="img" aria-label="The three wrappers compared: PEA social contributions only after five years, assurance-vie allowance and reduced rate after eight, CTO full flat tax with full freedom" className="w-full">
      <g fontFamily={F} fontSize="12">
        <text x="330" y="28" textAnchor="middle" fontWeight="700" fill="#1c1917" fontSize="14">
          same ETF strategy, three tax containers
        </text>
        {rows.map(([name, clock, tax, note, color], i) => (
          <g key={name}>
            <rect x="40" y={50 + i * 88} width="580" height="76" rx="10" fill="#fff" stroke={color} strokeWidth="1.8" />
            <rect x="40" y={50 + i * 88} width="150" height="76" rx="10" fill={color} opacity="0.9" />
            <text x="115" y={84 + i * 88} textAnchor="middle" fill="#fff" fontWeight="700">{name}</text>
            <text x="115" y={102 + i * 88} textAnchor="middle" fill="#fff" fontSize="10.5">{clock}</text>
            <text x="205" y={78 + i * 88} fill="#1c1917" fontWeight="600" fontSize="11.5">{tax}</text>
            <text x="205" y={100 + i * 88} fill="#78716c" fontSize="11">{note}</text>
          </g>
        ))}
        <text x="330" y="348" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          open the clocks early - both run from opening, not from funding (verified 2026-08-26)
        </text>
      </g>
    </svg>
  );
}
