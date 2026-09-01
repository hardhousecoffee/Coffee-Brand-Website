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
      <img
        className="hhc-editorial-entertainment-base"
        src="/images/coffee-entertainment-approved.png"
        alt=""
        draggable="false"
      />
      <div className="hhc-editorial-entertainment-animation">
        <svg className="hhc-editorial-entertainment-overlay" viewBox="0 0 240 160" role="presentation">
          <defs>
            <linearGradient id="hhc-entertainment-overlay-steam" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#efd0ff" />
              <stop offset="0.5" stopColor="#cb88f5" />
              <stop offset="1" stopColor="#9c4ed2" />
            </linearGradient>
            <filter id="hhc-entertainment-overlay-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g
            className="hhc-editorial-entertainment-steam-overlay"
            fill="none"
            stroke="url(#hhc-entertainment-overlay-steam)"
            strokeLinecap="round"
            filter="url(#hhc-entertainment-overlay-glow)"
          >
            <path
              className="hhc-editorial-entertainment-steam-overlay-path hhc-editorial-entertainment-steam-overlay-path-one"
              d="M96 115c-24-17-31-31-8-44 24-14 23-29 4-42-14-10-12-19 5-28"
              strokeWidth="2.2"
            />
            <path
              className="hhc-editorial-entertainment-steam-overlay-path hhc-editorial-entertainment-steam-overlay-path-two"
              d="M116 115c-12-18-10-31 8-43 18-12 17-27 1-39-12-9-10-19 5-29"
              strokeWidth="2.7"
            />
            <path
              className="hhc-editorial-entertainment-steam-overlay-path hhc-editorial-entertainment-steam-overlay-path-three"
              d="M139 115c16-16 16-30-2-42-17-12-16-26 0-39 12-10 10-19-4-30"
              strokeWidth="2.1"
            />
          </g>

          <g className="hhc-editorial-entertainment-floating-note hhc-editorial-entertainment-floating-note-one" fill="#d9a4ff" filter="url(#hhc-entertainment-overlay-glow)">
            <ellipse cx="166" cy="58" rx="4.8" ry="3.8" transform="rotate(-18 166 58)" />
            <path d="M170 57V42c6 1 9 4 11 7-3-2-6-3-11-3" fill="none" stroke="#d9a4ff" strokeLinecap="round" strokeWidth="2" />
          </g>
          <g className="hhc-editorial-entertainment-floating-note hhc-editorial-entertainment-floating-note-two" fill="#d9a4ff" filter="url(#hhc-entertainment-overlay-glow)">
            <ellipse cx="190" cy="78" rx="4.4" ry="3.5" transform="rotate(-18 190 78)" />
            <path d="M194 77V63c6 1 9 4 11 7-3-2-6-3-11-3" fill="none" stroke="#d9a4ff" strokeLinecap="round" strokeWidth="2" />
          </g>
          <g className="hhc-editorial-entertainment-floating-note hhc-editorial-entertainment-floating-note-three" fill="#d9a4ff" filter="url(#hhc-entertainment-overlay-glow)">
            <ellipse cx="76" cy="64" rx="4.2" ry="3.4" transform="rotate(16 76 64)" />
            <path d="M72 63V49c-6 1-9 4-11 7 3-2 6-3 11-3" fill="none" stroke="#d9a4ff" strokeLinecap="round" strokeWidth="2" />
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