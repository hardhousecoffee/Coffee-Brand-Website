import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import type { EditorialCollectionId } from "@/data/editorialCollections";
import approvedEntertainmentArtwork from "@assets/image_1788204219140.png";

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

const artworkLayerClass = "hhc-editorial-approved-artwork";

function CoffeeEntertainmentVisual() {
  return (
    <div className="hhc-editorial-entertainment-visual" aria-hidden="true">
      <div className="hhc-editorial-entertainment-animation">
        <img
          className={`${artworkLayerClass} ${artworkLayerClass}-base`}
          src={approvedEntertainmentArtwork}
          alt=""
        />

        <div className={`${artworkLayerClass}-steam ${artworkLayerClass}-steam-left`}>
          <img className={artworkLayerClass} src={approvedEntertainmentArtwork} alt="" />
        </div>
        <div className={`${artworkLayerClass}-steam ${artworkLayerClass}-steam-right`}>
          <img className={artworkLayerClass} src={approvedEntertainmentArtwork} alt="" />
        </div>

        <div className={`${artworkLayerClass}-note-erase ${artworkLayerClass}-note-erase-one`} />
        <div className={`${artworkLayerClass}-note-erase ${artworkLayerClass}-note-erase-two`} />

        <div className={`${artworkLayerClass}-note ${artworkLayerClass}-note-one`}>
          <img className={artworkLayerClass} src={approvedEntertainmentArtwork} alt="" />
        </div>
        <div className={`${artworkLayerClass}-note ${artworkLayerClass}-note-two`}>
          <img className={artworkLayerClass} src={approvedEntertainmentArtwork} alt="" />
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