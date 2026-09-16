// Toutes les icônes SVG de la page, au même endroit.

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
};

export const Globe = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9s1.3-6.4 3.8-9z" />
  </svg>
);

export const Phone = () => (
  <svg {...base} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const Chevron = () => (
  <svg {...base} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 6l6 6-6 6" />
  </svg>
);

/* ---------------------------------------------------------------
   Badges "vraie identité de marque" — couleurs officielles,
   silhouettes reconnaissables. Servent uniquement à identifier
   la plateforme vers laquelle chaque lien pointe.
---------------------------------------------------------------- */

export const GooglePlayLogo = () => (
  <svg viewBox="0 0 40 40">
    <defs>
      <linearGradient id="gpTop" x1="11" y1="8" x2="31" y2="20" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#00C6FF" />
        <stop offset="100%" stopColor="#2ECC71" />
      </linearGradient>
      <linearGradient id="gpBottom" x1="11" y1="32" x2="31" y2="20" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFD400" />
        <stop offset="100%" stopColor="#FF4B4B" />
      </linearGradient>
    </defs>
    <rect width="40" height="40" rx="9" fill="#fff" />
    <polygon points="11,8 31,20 11,20" fill="url(#gpTop)" />
    <polygon points="11,32 31,20 11,20" fill="url(#gpBottom)" />
  </svg>
);

export const AppStoreLogo = () => (
  <svg viewBox="0 0 40 40">
    <defs>
      <linearGradient id="asBg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#4FC3FF" />
        <stop offset="100%" stopColor="#0A5FFF" />
      </linearGradient>
      <mask id="asBite">
        <rect width="40" height="40" fill="#fff" />
        <circle cx="27" cy="15.5" r="3.1" fill="#000" />
      </mask>
    </defs>
    <rect width="40" height="40" rx="9" fill="url(#asBg)" />
    <g mask="url(#asBite)" fill="#fff">
      <circle cx="16" cy="23.5" r="6.6" />
      <circle cx="23.4" cy="23.5" r="6.6" />
    </g>
    <ellipse cx="23.6" cy="11" rx="2.3" ry="1.2" fill="#8CFF9B" transform="rotate(-40 23.6 11)" />
    <rect x="19.4" y="8.6" width="1.4" height="3.4" rx="0.7" fill="#B98550" />
  </svg>
);

export const InstagramLogo = () => (
  <svg viewBox="0 0 40 40">
    <defs>
      <linearGradient id="igGrad" x1="0" y1="40" x2="40" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FEE411" />
        <stop offset="20%" stopColor="#FEDA77" />
        <stop offset="42%" stopColor="#F58529" />
        <stop offset="62%" stopColor="#DD2A7B" />
        <stop offset="80%" stopColor="#8134AF" />
        <stop offset="100%" stopColor="#515BD4" />
      </linearGradient>
    </defs>
    <rect width="40" height="40" rx="9" fill="url(#igGrad)" />
    <rect x="10.5" y="10.5" width="19" height="19" rx="6" fill="none" stroke="#fff" strokeWidth="2.1" />
    <circle cx="20" cy="20" r="5" fill="none" stroke="#fff" strokeWidth="2.1" />
    <circle cx="26" cy="14" r="1.3" fill="#fff" />
  </svg>
);

export const FacebookLogo = () => (
  <svg viewBox="0 0 40 40">
    <rect width="40" height="40" rx="9" fill="#1877F2" />
    <path
      d="M24.2 14h2.9v-4.4c-.5-.07-2.2-.22-4.1-.22-4.1 0-6.9 2.5-6.9 7.1v3.7H12v4.9h4.1V32h5.1v-6.9h3.9l.6-4.9h-4.5v-3.2c0-1.4.4-2.3 2.4-2.3z"
      fill="#fff"
    />
  </svg>
);

export const TikTokLogo = () => {
  const note =
    "M22.8 8.6c.7 2.9 2.7 4.9 5.7 5.2v3.4c-2 0-3.9-.6-5.7-1.7v8.1c0 3.9-3.1 6.6-6.7 6.6-3.7 0-6.7-3-6.7-6.6 0-3.6 3-6.5 6.4-6.6v3.5c-1.6.2-2.8 1.6-2.8 3.2 0 1.8 1.5 3.3 3.4 3.3 1.9 0 3.5-1.5 3.5-3.4V8.6h2.9z";
  return (
    <svg viewBox="0 0 40 40">
      <rect width="40" height="40" rx="9" fill="#010101" />
      <path d={note} fill="#25F4EE" transform="translate(-0.9,-0.5)" />
      <path d={note} fill="#FE2C55" transform="translate(0.9,0.5)" />
      <path d={note} fill="#fff" />
    </svg>
  );
};

export const iconMap = {
  globe: Globe,
  play: GooglePlayLogo,
  apple: AppStoreLogo,
  instagram: InstagramLogo,
  facebook: FacebookLogo,
  tiktok: TikTokLogo,
};

/* ---------------------------------------------------------------
   La mobylette de livraison qui traverse le hero, en arrière-plan
   du logo.
---------------------------------------------------------------- */
export const Scooter = () => (
  <svg viewBox="0 0 64 40" className="scooter-svg" aria-hidden="true">
    <path className="sc-lines" d="M2 15h9M0 21h7M2 27h9" strokeWidth="2" strokeLinecap="round" />
    <rect className="sc-box" x="13" y="9" width="14" height="13" rx="2.4" />
    <rect x="15.5" y="12" width="9" height="1.6" rx="0.8" fill="#fff" opacity="0.6" />
    <path
      className="sc-body"
      d="M25 27c0-1.2.9-2.2 2.1-2.2h5.6l3.6-7.4h7.6l2.9 5.7c3 .1 5.3 2 5.3 5 0 .7-.1 1.3-.4 1.9H25.6a5 5 0 0 1-.6-2z"
    />
    <circle className="sc-body" cx="38.5" cy="9.6" r="3.1" />
    <path className="sc-arm" d="M38.5 13c-2.1 0-3.3 1.9-3.3 4v4.4" strokeWidth="2.3" strokeLinecap="round" fill="none" />
    <circle className="sc-wheel" cx="30" cy="31" r="4.3" />
    <circle cx="30" cy="31" r="1.7" fill="#fff" />
    <circle className="sc-wheel" cx="50" cy="31" r="4.3" />
    <circle cx="50" cy="31" r="1.7" fill="#fff" />
  </svg>
);
