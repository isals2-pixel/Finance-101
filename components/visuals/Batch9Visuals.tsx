// Visuals for lessons 44-46 (behavioural finance: loss aversion, overconfidence, herding).

const F = 'ui-sans-serif,system-ui';

export function LossAsymmetry() {
  // Felt value: gains branch slope 1, losses branch slope ~2.
  return (
    <svg viewBox="0 0 660 360" role="img" aria-label="The felt value of gains and losses: the loss branch falls about twice as steeply, so minus 1,000 euros hurts more than plus 1,000 pleases" className="w-full">
      <g fontFamily={F} fontSize="12">
        <line x1="60" y1="180" x2="620" y2="180" stroke="#78716c" strokeWidth="1.5" />
        <line x1="340" y1="40" x2="340" y2="330" stroke="#78716c" strokeWidth="1.5" />
        <text x="612" y="172" textAnchor="end" fill="#78716c" fontSize="11">gains →</text>
        <text x="68" y="172" fill="#78716c" fontSize="11">← losses</text>
        <text x="348" y="52" fill="#78716c" fontSize="11">felt value</text>

        <path d="M 340 180 C 420 140, 520 118, 620 108" fill="none" stroke="#166534" strokeWidth="3.5" />
        <text x="500" y="96" fill="#166534" fontWeight="700">+1,000 € → feels +1</text>

        <path d="M 340 180 C 300 240, 240 300, 130 330" fill="none" stroke="#9a3412" strokeWidth="3.5" />
        <text x="126" y="316" fill="#9a3412" fontWeight="700">−1,000 € → feels −2</text>

        <line x1="480" y1="180" x2="480" y2="122" stroke="#166534" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="200" y1="180" x2="200" y2="308" stroke="#9a3412" strokeWidth="1.5" strokeDasharray="4 3" />

        <text x="330" y="352" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          the same euro, twice the sting - the asymmetry behind panic selling and held losers
        </text>
      </g>
    </svg>
  );
}

export function OverconfidenceCost() {
  const bars = [
    ['trades rarely (rules)', 118, '#166534', 'market return − 0.2 % costs'],
    ['average activity', 96, '#1e3a5f', 'costs grow, returns don’t'],
    ['trades most (conviction)', 62, '#9a3412', 'several points a year behind'],
  ] as const;
  return (
    <svg viewBox="0 0 660 340" role="img" aria-label="Net returns by trading activity: the most active, most confident traders earn the least after costs" className="w-full">
      <g fontFamily={F} fontSize="12">
        <text x="330" y="28" textAnchor="middle" fontWeight="700" fill="#1c1917" fontSize="14">
          net returns by trading activity (the brokerage-account studies)
        </text>
        {bars.map(([label, h, color, note], i) => (
          <g key={label}>
            <rect x={110 + i * 170} y={250 - h} width="90" height={h} rx="6" fill={color} opacity="0.85" />
            <text x={155 + i * 170} y="272" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="11">{label}</text>
            <text x={155 + i * 170} y="290" textAnchor="middle" fill="#78716c" fontSize="10">{note}</text>
          </g>
        ))}
        <line x1="90" y1="250" x2="600" y2="250" stroke="#78716c" strokeWidth="1.5" />
        <text x="330" y="326" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          confidence → activity → spreads, fees, taxes → less kept; the quiet portfolio wins
        </text>
      </g>
    </svg>
  );
}

export function ChaseCycle() {
  return (
    <svg viewBox="0 0 660 360" role="img" aria-label="The chase cycle: inflows arrive near the price top, outflows near the bottom, so investor returns lag the fund's own return" className="w-full">
      <g fontFamily={F} fontSize="12">
        <line x1="50" y1="310" x2="620" y2="310" stroke="#78716c" strokeWidth="1.5" />
        <path d="M 50 250 C 130 240, 190 150, 260 100 C 300 74, 340 80, 380 130 C 430 195, 470 240, 540 210 C 570 197, 600 180, 620 168" fill="none" stroke="#1e3a5f" strokeWidth="3" />

        <circle cx="290" cy="84" r="7" fill="#9a3412" />
        <text x="290" y="60" textAnchor="middle" fill="#9a3412" fontWeight="700">money floods IN</text>
        <text x="290" y="74" textAnchor="middle" fill="#9a3412" fontSize="10">herd · FOMO · rankings</text>

        <circle cx="440" cy="222" r="7" fill="#9a3412" />
        <text x="447" y="252" textAnchor="middle" fill="#9a3412" fontWeight="700">money flees OUT</text>
        <text x="447" y="266" textAnchor="middle" fill="#9a3412" fontSize="10">panic · recency</text>

        <circle cx="110" cy="243" r="7" fill="#166534" />
        <text x="115" y="228" textAnchor="middle" fill="#166534" fontWeight="700" fontSize="11">the plan buys here too</text>
        <text x="115" y="242" textAnchor="start" fill="#166534" fontSize="10"></text>

        <text x="330" y="344" textAnchor="middle" fill="#1c1917" fontWeight="600" fontSize="13">
          flows timed by feeling: the average invested euro misses the rise and attends the fall
        </text>
      </g>
    </svg>
  );
}
