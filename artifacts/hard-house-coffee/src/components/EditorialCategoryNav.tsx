import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import type { EditorialCollectionId } from "@/data/editorialCollections";

const cards: Array<{
  id: EditorialCollectionId;
  title: string;
  description: string;
  href: string;
  image?: string;
  imageAlt?: string;
}> = [
  {
    id: "brew-better",
    title: "Brew Better",
    description: "Techniques, brew methods, and guides to level up.",
    href: "/blog?collection=brew-better",
    image: "/images/barista-latte-art.jpg",
    imageAlt: "Latte art in a cup",
  },
  {
    id: "espresso-gear",
    title: "Espresso & Gear",
    description: "Machines, grinders, and gear that make a difference.",
    href: "/blog?collection=espresso-gear",
    image: "/images/coffee-grinder-closeup.jpg",
    imageAlt: "Close-up detail of a coffee grinder",
  },
  {
    id: "coffee-knowledge",
    title: "Coffee Knowledge",
    description: "Beans, origins, roasts, and the fundamentals.",
    href: "/blog?collection=coffee-knowledge",
    image: "/images/coffee-drum-roaster.jpg",
    imageAlt: "Coffee beans beside a drum roaster",
  },
  {
    id: "coffee-entertainment",
    title: "Coffee Entertainment",
    description: "Music, culture, and the lifestyle that inspires us.",
    href: "/blog?collection=coffee-entertainment",
  },
];

function CoffeeEntertainmentVisual() {
  return (
    <div className="hhc-editorial-entertainment-visual" aria-hidden="true">
      <div className="hhc-editorial-entertainment-animation">
        <svg
          className="hhc-editorial-entertainment-artwork"
          viewBox="0 0 240 160"
          role="presentation"
        >
          <defs>
            <linearGradient id="hhc-entertainment-cup" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#dca4ff" />
              <stop offset="0.46" stopColor="#8f42d4" />
              <stop offset="1" stopColor="#321047" />
            </linearGradient>
            <radialGradient id="hhc-entertainment-coffee" cx="50%" cy="35%" r="70%">
              <stop offset="0" stopColor="#5b2871" />
              <stop offset="0.68" stopColor="#1c0929" />
              <stop offset="1" stopColor="#07030c" />
            </radialGradient>
            <linearGradient id="hhc-entertainment-steam" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#edc1ff" />
              <stop offset="0.5" stopColor="#be72f2" />
              <stop offset="1" stopColor="#7730ba" />
            </linearGradient>
            <filter id="hhc-entertainment-glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="2.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g className="hhc-editorial-entertainment-steam" fill="none" stroke="url(#hhc-entertainment-steam)" strokeLinecap="round" filter="url(#hhc-entertainment-glow)">
            <path
              className="hhc-editorial-entertainment-steam-path hhc-editorial-entertainment-steam-path-one"
              d="M103 112c-30-12-35-27-10-40 25-13 23-27 3-38-17-10-14-20 5-31"
              strokeWidth="3.2"
            />
            <path
              className="hhc-editorial-entertainment-steam-path hhc-editorial-entertainment-steam-path-two"
              d="M118 112c-17-15-13-27 5-38 20-12 17-25 1-34-14-9-11-19 5-32"
              strokeWidth="4.4"
            />
            <path
              className="hhc-editorial-entertainment-steam-path hhc-editorial-entertainment-steam-path-three"
              d="M137 112c18-14 15-26-3-38-18-12-15-24 1-34 14-9 11-19-4-31"
              strokeWidth="3"
            />
            <path
              className="hhc-editorial-entertainment-steam-path hhc-editorial-entertainment-steam-path-four"
              d="M153 111c31-13 36-28 11-41-24-13-22-27-3-38 17-10 14-20-5-30"
              strokeWidth="2.4"
              opacity="0.72"
            />
          </g>

          <text
            className="hhc-editorial-entertainment-clef"
            x="122"
            y="116"
            fill="#c77dff"
            fontFamily="'Noto Music', 'Bravura Text', 'Segoe UI Symbol', 'Arial Unicode MS', serif"
            fontSize="120"
            textAnchor="middle"
            filter="url(#hhc-entertainment-glow)"
          >
            𝄞
          </text>

          <g className="hhc-editorial-entertainment-note hhc-editorial-entertainment-note-one" fill="#d59aff" filter="url(#hhc-entertainment-glow)">
            <ellipse cx="177" cy="54" rx="7" ry="5.5" transform="rotate(-18 177 54)" />
            <path d="M183 53V24c9 2 14 7 17 12-5-3-10-5-17-6" fill="none" stroke="#d59aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.2" />
          </g>
          <g className="hhc-editorial-entertainment-note hhc-editorial-entertainment-note-two" fill="#d59aff" filter="url(#hhc-entertainment-glow)">
            <ellipse cx="199" cy="88" rx="6.5" ry="5" transform="rotate(-18 199 88)" />
            <path d="M205 87V62c8 2 12 6 15 11-4-3-9-4-15-5" fill="none" stroke="#d59aff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </g>

          <g className="hhc-editorial-entertainment-cup" filter="url(#hhc-entertainment-glow)">
            <path
              d="M188 107c24-12 39-5 38 9-1 16-19 25-39 17"
              fill="none"
              stroke="url(#hhc-entertainment-cup)"
              strokeLinecap="round"
              strokeWidth="9"
            />
            <path
              d="M34 105c4 30 15 47 37 52 23 5 62 5 84-1 21-6 31-24 35-51H34Z"
              fill="url(#hhc-entertainment-cup)"
            />
            <ellipse cx="113" cy="105" rx="79" ry="15" fill="#ac61e7" />
            <ellipse cx="113" cy="103" rx="71" ry="10.5" fill="url(#hhc-entertainment-coffee)" />
            <path d="M55 118c5 18 13 29 26 35" fill="none" stroke="#ebcaff" strokeLinecap="round" strokeOpacity="0.42" strokeWidth="2.5" />
            <circle cx="113" cy="137" r="14" fill="none" stroke="#d8a5ff" strokeOpacity="0.72" />
            <text x="113" y="141" fill="#e0b7ff" fontFamily="Georgia, serif" fontSize="8" fontWeight="700" letterSpacing="0.08em" textAnchor="middle">HHC</text>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function EditorialCategoryNav() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof IntersectionObserver === "undefined") {
      setHasEntered(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHasEntered(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`hhc-editorial-nav${hasEntered ? " is-visible" : ""}`}
      aria-label="Explore Hard House Coffee editorial collections"
    >
      <div className="hhc-editorial-nav-inner">
        <div className="hhc-editorial-grid">
          {cards.map((card) => (
            <Link
              href={card.href}
              className={`hhc-editorial-card hhc-editorial-card-${card.id}`}
              aria-label={`Explore ${card.title}`}
              key={card.id}
            >
              <div className="hhc-editorial-card-visual">
                {card.image ? (
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <CoffeeEntertainmentVisual />
                )}
                <div className="hhc-editorial-card-visual-shade" aria-hidden="true" />
              </div>
              <div className="hhc-editorial-card-body">
                <h2>{card.title}</h2>
                <p>{card.description}</p>
                <span className="hhc-editorial-card-cta" aria-hidden="true">
                  Explore <span>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}