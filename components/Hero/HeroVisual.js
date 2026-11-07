const HeroVisual = () => (
  <svg
    viewBox="0 0 560 660"
    role="img"
    aria-labelledby="hero-visual-title hero-visual-desc"
    className="h-auto w-full"
  >
    <title id="hero-visual-title">Nixon Paul&apos;s full-stack workspace</title>
    <desc id="hero-visual-desc">
      An abstract code editor connected to API, database and AI service nodes in
      lime and purple.
    </desc>

    <defs>
      <linearGradient id="hv-panel" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#181820" />
        <stop offset="0.55" stopColor="#101015" />
        <stop offset="1" stopColor="#0a0a0e" />
      </linearGradient>
      <linearGradient id="hv-lime" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#d8ff6a" />
        <stop offset="1" stopColor="#c8f542" />
      </linearGradient>
      <linearGradient id="hv-purple" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#a855ff" />
        <stop offset="1" stopColor="#5b21b6" />
      </linearGradient>
      <radialGradient id="hv-orb" cx="35%" cy="30%" r="75%">
        <stop offset="0" stopColor="#b975ff" />
        <stop offset="0.55" stopColor="#7c3aed" />
        <stop offset="1" stopColor="#2e1065" />
      </radialGradient>
      <radialGradient id="hv-halo" cx="50%" cy="50%" r="50%">
        <stop offset="0" stopColor="#8b31ff" stopOpacity="0.42" />
        <stop offset="1" stopColor="#8b31ff" stopOpacity="0" />
      </radialGradient>
      <pattern id="hv-grid" width="28" height="28" patternUnits="userSpaceOnUse">
        <path d="M28 0H0V28" fill="none" stroke="#ffffff" strokeOpacity="0.045" />
      </pattern>
      <filter id="hv-glow" x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur stdDeviation="9" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="hv-soft" x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="22" />
      </filter>
    </defs>

    <g aria-hidden="true">
      <ellipse cx="452" cy="150" rx="130" ry="120" fill="url(#hv-halo)" />
      <circle cx="452" cy="146" r="62" fill="url(#hv-orb)" filter="url(#hv-glow)" opacity="0.9" />
      <circle
        cx="452"
        cy="146"
        r="86"
        fill="none"
        stroke="#c8f542"
        strokeOpacity="0.28"
        strokeDasharray="2 9"
      />
      <circle cx="452" cy="230" r="4" fill="#c8f542" />
      <circle cx="368" cy="102" r="3" fill="#c8f542" opacity="0.7" />
      <circle cx="520" cy="88" r="2.5" fill="#a855ff" />

      <rect
        x="54"
        y="92"
        width="452"
        height="470"
        rx="24"
        fill="url(#hv-panel)"
        stroke="#ffffff"
        strokeOpacity="0.1"
      />
      <rect x="54" y="92" width="452" height="470" rx="24" fill="url(#hv-grid)" />

      <path d="M54 134H506" stroke="#ffffff" strokeOpacity="0.08" />
      <circle cx="82" cy="113" r="4.5" fill="#c8f542" />
      <circle cx="100" cy="113" r="4.5" fill="#ffffff" fillOpacity="0.28" />
      <circle cx="118" cy="113" r="4.5" fill="#ffffff" fillOpacity="0.18" />
      <text
        x="458"
        y="118"
        textAnchor="end"
        fill="#9a9a94"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontSize="11"
        letterSpacing="1.5"
      >
        portfolio.ts
      </text>

      <g fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="13.5">
        <text x="84" y="174" fill="#f4f4f1">
          const product = {"{"}
        </text>
        <text x="84" y="198" fill="#9a9a94">
          owner: <tspan fill="#c8f542">&quot;Nixon Paul&quot;</tspan>,
        </text>
        <text x="84" y="222" fill="#9a9a94">
          stack: <tspan fill="#d6d6d1">&quot;full-stack&quot;</tspan>,
        </text>
        <text x="84" y="246" fill="#9a9a94">
          shipped: <tspan fill="#c8f542">true</tspan>,
        </text>
        <text x="84" y="270" fill="#f4f4f1">
          {"}"};
        </text>
        <text x="84" y="306" fill="#a855ff">
          await ship(product);
        </text>
        <text x="84" y="330" fill="#6f6f6a">
          {"// iterate, measure, improve"}
        </text>
      </g>

      <path d="M84 360H476" stroke="#ffffff" strokeOpacity="0.07" />

      <g stroke="#ffffff" strokeOpacity="0.18" strokeWidth="1.2">
        <path d="M280 404V432" />
        <path d="M280 432H130V452" />
        <path d="M280 432V452" />
        <path d="M280 432H430V452" />
      </g>
      <circle cx="280" cy="404" r="5" fill="#c8f542" filter="url(#hv-glow)" />
      <circle cx="280" cy="432" r="3" fill="#c8f542" />
      <circle cx="130" cy="452" r="3" fill="#c8f542" />
      <circle cx="280" cy="452" r="3" fill="#a855ff" />
      <circle cx="430" cy="452" r="3" fill="#a855ff" />

      <g fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="11">
        <rect x="88" y="458" width="84" height="32" rx="8" fill="#ffffff" fillOpacity="0.04" stroke="#c8f542" strokeOpacity="0.35" />
        <text x="130" y="478" textAnchor="middle" fill="#d6d6d1" letterSpacing="1.2">
          API
        </text>
        <rect x="238" y="458" width="84" height="32" rx="8" fill="#ffffff" fillOpacity="0.04" stroke="#c8f542" strokeOpacity="0.35" />
        <text x="280" y="478" textAnchor="middle" fill="#d6d6d1" letterSpacing="1.2">
          DB
        </text>
        <rect x="388" y="458" width="84" height="32" rx="8" fill="#ffffff" fillOpacity="0.04" stroke="#a855ff" strokeOpacity="0.45" />
        <text x="430" y="478" textAnchor="middle" fill="#d6d6d1" letterSpacing="1.2">
          AI
        </text>
      </g>

      <path d="M54 512H506" stroke="#ffffff" strokeOpacity="0.08" />
      <g fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="11">
        <circle cx="84" cy="536" r="4" fill="#c8f542" />
        <text x="96" y="540" fill="#c8f542" letterSpacing="1">
          build passing
        </text>
        <text x="280" y="540" fill="#9a9a94">
          1.2s
        </text>
        <text x="476" y="540" textAnchor="end" fill="#a855ff" letterSpacing="1">
          deployed
        </text>
      </g>

      <rect x="70" y="590" width="180" height="44" rx="12" fill="#0f0f14" stroke="#c8f542" strokeOpacity="0.25" />
      <circle cx="92" cy="612" r="6" fill="#c8f542" />
      <text
        x="108"
        y="617"
        fill="#f4f4f1"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontSize="12"
        letterSpacing="1"
      >
        open to work
      </text>

      <rect x="338" y="590" width="168" height="44" rx="12" fill="#0f0f14" stroke="#a855ff" strokeOpacity="0.3" />
      <circle cx="360" cy="612" r="6" fill="#a855ff" filter="url(#hv-glow)" />
      <text
        x="376"
        y="617"
        fill="#f4f4f1"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontSize="12"
        letterSpacing="1"
      >
        Gurugram, IN
      </text>

      <circle cx="94" cy="74" r="48" fill="#8b31ff" opacity="0.18" filter="url(#hv-soft)" />
    </g>
  </svg>
);

export default HeroVisual;
