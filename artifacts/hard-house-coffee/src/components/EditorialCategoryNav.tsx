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

const floatingNotes = ["♪", "♫"] as const;

function CoffeeEntertainmentVisual() {
  return (
    <div className="hhc-editorial-entertainment-visual" aria-hidden="true">
      <div className="hhc-editorial-entertainment-animation">
        <svg
          className="hhc-editorial-treble-clef"
          viewBox="0 0 100 160"
          role="presentation"
        >
          <path
            d="M67 8C47 18 39 35 44 50c4 13 17 21 29 15 12-6 14-20 7-29-6-8-17-10-25-5-12 7-15 24-8 38 7 15 26 24 27 45 1 20-12 34-30 34-22 0-37-14-36-31 1-14 10-25 23-25 14 0 24 10 24 23 0 13-8 23-19 28"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
          />
          <path
            d="M67 8c-5 31-4 67 5 102"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="5"
          />
        </svg>

        <svg
          className="hhc-editorial-steam"
          viewBox="0 0 240 160"
          role="presentation"
        >
          <g className="hhc-editorial-steam-left">
            <path
              d="M91 125c-23-12-22-25-4-38 17-12 14-25-1-34-14-9-13-21 2-34"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="5"
            />
            <path
              d="M105 124c-14-15-9-27 6-39 14-12 8-25-3-33-11-8-9-19 2-31"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="3"
            />
          </g>
          <g className="hhc-editorial-steam-right">
            <path
              d="M149 125c23-12 22-25 4-38-17-12-14-25 1-34 14-9 13-21-2-34"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="5"
            />
            <path
              d="M135 124c14-15 9-27-6-39-14-12-8-25 3-33 11-8 9-19-2-31"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="3"
            />
          </g>
        </svg>

        <svg
          className="hhc-editorial-coffee-cup"
          viewBox="0 0 240 160"
          role="presentation"
        >
          <defs>
            <linearGradient id="hhc-cup-glow" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#d6a1ff" />
              <stop offset="0.52" stopColor="#8c3ed1" />
              <stop offset="1" stopColor="#37124f" />
            </linearGradient>
            <radialGradient id="hhc-coffee-surface" cx="50%" cy="35%" r="70%">
              <stop offset="0" stopColor="#5a286f" />
              <stop offset="0.65" stopColor="#1d0b2b" />
              <stop offset="1" stopColor="#09050f" />
            </radialGradient>
          </defs>
          <path
            className="hhc-editorial-cup-handle"
            d="M185 98c28-13 42-3 41 14-1 21-24 31-45 19"
            fill="none"
            stroke="url(#hhc-cup-glow)"
            strokeLinecap="round"
            strokeWidth="12"
          />
          <path
            className="hhc-editorial-cup-body"
            d="M35 91c3 33 14 56 39 62 22 5 70 5 92-1 23-7 34-31 38-61H35Z"
            fill="url(#hhc-cup-glow)"
          />
          <ellipse
            className="hhc-editorial-cup-rim"
            cx="120"
            cy="91"
            rx="85"
            ry="17"
            fill="#a65be3"
          />
          <ellipse
            className="hhc-editorial-coffee-surface"
            cx="120"
            cy="89"
            rx="77"
            ry="12"
            fill="url(#hhc-coffee-surface)"
          />
          <path
            className="hhc-editorial-cup-highlight"
            d="M58 106c5 22 14 34 27 40"
            fill="none"
            stroke="rgba(231, 198, 255, 0.42)"
            strokeLinecap="round"
            strokeWidth="3"
          />
          <g className="hhc-editorial-cup-brand">
            <circle cx="120" cy="128" r="18" fill="none" stroke="#d8a5ff" strokeOpacity="0.72" />
            <text x="120" y="133" textAnchor="middle">HHC</text>
          </g>
        </svg>

        <div className="hhc-editorial-floating-notes">
          {floatingNotes.map((note, index) => (
            <span
              className={`hhc-editorial-floating-note hhc-editorial-floating-note-${index + 1}`}
              key={`${note}-${index}`}
            >
              {note}
            </span>
          ))}
        </div>
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
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
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