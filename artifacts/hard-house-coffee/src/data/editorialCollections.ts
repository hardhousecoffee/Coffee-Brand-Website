export const editorialCollections = {
  "brew-better": [
    "the-art-of-the-perfect-pour-over",
    "cold-brew-mastery-a-complete-home-guide",
    "best-espresso-machines-for-beginners-2026-guide",
    "best-espresso-machines-2026-guide-tested-and-ranked",
    "the-300-dollar-sweet-spot-real-espresso-at-home",
    "stepping-up-what-crossing-1000-mark-actually-buys-you",
    "the-icon-la-marzocco-linea-micra-worth-the-obsession",
    "why-every-coffee-lover-needs-a-grinder-first-2026-guide",
  ],
  "espresso-gear": [
    "best-espresso-machines-2026-guide-tested-and-ranked",
    "best-espresso-machines-for-beginners-2026-guide",
    "why-every-coffee-lover-needs-a-grinder-first-2026-guide",
    "the-300-dollar-sweet-spot-real-espresso-at-home",
    "stepping-up-what-crossing-1000-mark-actually-buys-you",
    "the-icon-la-marzocco-linea-micra-worth-the-obsession",
    "living-the-dream-mind-blowing-world-of-20000-espresso-gear",
  ],
  "coffee-knowledge": [
    "top-5-dark-roast-beans-for-espresso-in-2026",
    "ethiopia-vs-colombia-a-complete-coffee-origin-guide",
    "seed-to-sprout-secret-lives-of-coffee-farmers",
    "the-magic-of-processing-washing-and-drying-shapes-flavor",
    "the-art-of-the-roast-finding-perfect-profile-in-the-drum",
    "logistics-and-freshness-journey-to-your-local-shelf",
    "beyond-the-supermarket-navigating-notable-specialty-coffee-brands",
    "three-most-expensive-coffee-brands-on-earth-luxury-in-a-mug",
  ],
  "coffee-entertainment": [
    "the-rise-of-specialty-coffee-bars",
    "seattle-deep-roots-emerald-city-coffee-scene",
    "los-angeles-old-hollywood-glamour-meets-new-wave",
    "san-francisco-birthplace-of-specialty-revolution",
    "new-york-city-italian-espresso-bars-to-fast-paced-cafes",
    "inside-world-barista-championship-olympics-of-caffeine",
    "meet-the-masters-what-makes-top-tier-barista-truly-elite",
    "global-excellence-onyx-coffee-lab-bentonville-arkansas",
    "old-world-perfection-ditta-artigianale-florence-italy",
    "master-of-precision-glitch-coffee-roasters-tokyo-japan",
    "parisian-elegance-cafe-lomi-paris-france",
  ],
} as const;

export type EditorialCollectionId = keyof typeof editorialCollections;

export const editorialCollectionLabels: Record<EditorialCollectionId, string> = {
  "brew-better": "Brew Better",
  "espresso-gear": "Espresso & Gear",
  "coffee-knowledge": "Coffee Knowledge",
  "coffee-entertainment": "Coffee Entertainment",
};