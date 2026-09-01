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
      <svg className="hhc-editorial-entertainment-artwork" viewBox="0 0 320 220" role="presentation">
        <defs>
          <radialGradient id="hhc-entertainment-background" cx="50%" cy="53%" r="64%">
            <stop offset="0" stopColor="#1a0b2d" />
            <stop offset="0.55" stopColor="#0b0415" />
            <stop offset="1" stopColor="#020106" />
          </radialGradient>
          <linearGradient id="hhc-entertainment-steam" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#f0c9ff" />
            <stop offset="0.48" stopColor="#c56cff" />
            <stop offset="1" stopColor="#8030bd" />
          </linearGradient>
          <linearGradient id="hhc-entertainment-cup" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#e6a8ff" />
            <stop offset="0.42" stopColor="#9a45df" />
            <stop offset="1" stopColor="#35104f" />
          </linearGradient>
          <radialGradient id="hhc-entertainment-coffee" cx="50%" cy="35%" r="72%">
            <stop offset="0" stopColor="#6f3484" />
            <stop offset="0.64" stopColor="#1e092c" />
            <stop offset="1" stopColor="#050208" />
          </radialGradient>
          <filter id="hhc-entertainment-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="hhc-entertainment-soft-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>

        <rect width="320" height="220" fill="url(#hhc-entertainment-background)" />
        <ellipse cx="160" cy="190" rx="112" ry="30" fill="#7c2fb8" opacity="0.2" filter="url(#hhc-entertainment-soft-glow)" />
        <g fill="#eac2ff" opacity="0.58">
          <circle cx="67" cy="52" r="1.1" />
          <circle cx="245" cy="36" r="1" />
          <circle cx="262" cy="106" r="0.9" />
          <circle cx="61" cy="135" r="0.8" />
          <circle cx="218" cy="141" r="0.7" />
        </g>

        <g className="hhc-editorial-entertainment-steam" fill="none" stroke="url(#hhc-entertainment-steam)" strokeLinecap="round" filter="url(#hhc-entertainment-glow)">
          <path
            className="hhc-editorial-entertainment-steam-path hhc-editorial-entertainment-steam-path-one"
            d="M126 163c-31-17-41-38-8-57 34-19 34-40 6-57-19-12-16-26 6-42"
            strokeWidth="4.2"
          />
          <path
            className="hhc-editorial-entertainment-steam-path hhc-editorial-entertainment-steam-path-two"
            d="M145 163c-19-22-17-40 8-58 27-19 24-38 3-54-17-13-14-28 7-46"
            strokeWidth="5.6"
          />
          <path
            className="hhc-editorial-entertainment-steam-path hhc-editorial-entertainment-steam-path-three"
            d="M170 163c22-21 22-39-3-57-25-18-22-37 1-54 17-13 14-28-5-45"
            strokeWidth="4.1"
          />
          <path
            className="hhc-editorial-entertainment-steam-path hhc-editorial-entertainment-steam-path-four"
            d="M190 163c34-18 42-38 10-58-33-20-31-39-6-56 19-13 16-27-6-43"
            strokeWidth="3.1"
            opacity="0.72"
          />
        </g>

        <g className="hhc-editorial-entertainment-clef" fill="#c875ff" filter="url(#hhc-entertainment-glow)">
          <text
            x="157"
            y="165"
            fontFamily="'Noto Music', 'Bravura Text', 'Segoe UI Symbol', 'Arial Unicode MS', serif"
            fontSize="156"
            textAnchor="middle"
          >
            𝄞
          </text>
        </g>

        <g className="hhc-editorial-entertainment-cup" filter="url(#hhc-entertainment-glow)">
          <path
            d="M238 163c34-17 58-6 56 16-2 23-27 34-57 21"
            fill="none"
            stroke="url(#hhc-entertainment-cup)"
            strokeLinecap="round"
            strokeWidth="13"
          />
          <path
            d="M44 157c6 37 22 57 51 64 31 7 86 7 116-1 28-8 42-29 47-63H44Z"
            fill="url(#hhc-entertainment-cup)"
          />
          <ellipse cx="149" cy="156" rx="106" ry="21" fill="#b663ec" />
          <ellipse cx="149" cy="153" rx="95" ry="15" fill="url(#hhc-entertainment-coffee)" />
          <path d="M67 170c7 25 18 39 38 47" fill="none" stroke="#f0ceff" strokeLinecap="round" strokeOpacity="0.46" strokeWidth="3.4" />
          <circle cx="149" cy="196" r="20" fill="none" stroke="#d9a4ff" strokeOpacity="0.76" strokeWidth="2" />
          <text x="149" y="202" fill="#e9c5ff" fontFamily="Georgia, serif" fontSize="11" fontWeight="700" letterSpacing="0.08em" textAnchor="middle">
            HHC
          </text>
        </g>

        <g className="hhc-editorial-entertainment-note hhc-editorial-entertainment-note-one" fill="#d9a4ff" filter="url(#hhc-entertainment-glow)">
          <ellipse cx="223" cy="65" rx="6.2" ry="4.7" transform="rotate(-18 223 65)" />
          <path d="M229 64V43c8 2 12 6 15 10-4-3-8-4-15-4" fill="none" stroke="#d9a4ff" strokeLinecap="round" strokeWidth="2.8" />
        </g>
        <g className="hhc-editorial-entertainment-note hhc-editorial-entertainment-note-two" fill="#d9a4ff" filter="url(#hhc-entertainment-glow)">
          <ellipse cx="254" cy="80" rx="5.5" ry="4.3" transform="rotate(-18 254 80)" />
          <path d="M259 79V60c7 2 11 5 13 9-4-2-8-4-13-4" fill="none" stroke="#d9a4ff" strokeLinecap="round" strokeWidth="2.5" />
        </g>
        <g className="hhc-editorial-entertainment-note hhc-editorial-entertainment-note-three" fill="#d9a4ff" filter="url(#hhc-entertainment-glow)">
          <ellipse cx="78" cy="78" rx="5.2" ry="4" transform="rotate(16 78 78)" />
          <path d="M73 77V58c-7 2-11 5-13 9 4-2 8-4 13-4" fill="none" stroke="#d9a4ff" strokeLinecap="round" strokeWidth="2.5" />
        </g>
      </svg>
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