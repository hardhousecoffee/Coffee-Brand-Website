import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { loungeCategories, loungeVideos, type LoungeCategory, type LoungeVideo } from "@/data/loungeVideos";

function VideoCard({ video, featured = false }: { video: LoungeVideo; featured?: boolean }) {
  return (
    <article className={`hhc-lounge-video-card${featured ? " is-featured" : ""}`}>
      <div className="hhc-lounge-embed">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1`}
          title={`${video.title} by ${video.channel}`}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <div className="hhc-lounge-video-meta">
        <div className="hhc-lounge-video-kicker">
          <span>{video.channel}</span>
          <span aria-hidden="true">·</span>
          <span>{video.duration}</span>
        </div>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
        <a
          className="hhc-lounge-youtube-link"
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open on YouTube <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

export default function Lounge() {
  const [activeCategory, setActiveCategory] = useState<"All" | LoungeCategory>("All");
  const visibleVideos = useMemo(
    () => activeCategory === "All"
      ? loungeVideos
      : loungeVideos.filter((video) => video.category === activeCategory),
    [activeCategory],
  );
  const [featuredVideo, ...remainingVideos] = visibleVideos;

  return (
    <div className="hhc-lounge-page">
      <Helmet>
        <title>The Lounge | Hard House Coffee</title>
        <meta
          name="description"
          content="Enter the Hard House Coffee Lounge for curated coffeehouse jazz, piano, ambience, documentaries, brewing guides, and barista competition performances."
        />
        <meta property="og:title" content="The Lounge | Hard House Coffee" />
        <meta
          property="og:description"
          content="A private listening room for coffee culture, music, craft, and the people behind the cup."
        />
        <link rel="canonical" href="https://hardhousecoffee.com/lounge" />
      </Helmet>
      <Navbar />

      <main>
        <section className="hhc-lounge-hero" aria-labelledby="lounge-title">
          <div className="hhc-lounge-hero-glow" aria-hidden="true" />
          <div className="hhc-lounge-hero-inner">
            <div className="hhc-lounge-hero-copy">
              <p className="hhc-lounge-eyebrow">Hard House Coffee · Private Listening Room</p>
              <h1 id="lounge-title">The <em>Lounge</em></h1>
              <p className="hhc-lounge-hero-lede">
                Take your time. Settle in with the sounds, stories, and rituals that make coffee more than a drink.
              </p>
              <div className="hhc-lounge-hero-rule" aria-hidden="true" />
              <p className="hhc-lounge-hero-note">
                A considered collection of music, craft, and coffee culture — curated for the space between the first sip and the last.
              </p>
              <a className="hhc-lounge-scroll-link" href="#collection">
                Browse the collection <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hhc-lounge-artwork-wrap">
              <div className="hhc-lounge-artwork-ring" aria-hidden="true" />
              <img
                src="/images/coffee-lounge-hero.png"
                alt="Purple Hard House Coffee mug with a glowing treble clef and steam"
                className="hhc-lounge-artwork"
              />
              <p className="hhc-lounge-artwork-caption">Music for the ritual</p>
            </div>
          </div>
        </section>

        <section className="hhc-lounge-collection" id="collection" aria-labelledby="collection-title">
          <div className="hhc-lounge-section-heading">
            <div>
              <p className="hhc-lounge-eyebrow">Tonight's programming</p>
              <h2 id="collection-title">Stay awhile.</h2>
            </div>
            <p className="hhc-lounge-count">
              {visibleVideos.length} selections
              <span> · </span>
              Official YouTube embeds
            </p>
          </div>

          <div className="hhc-lounge-filters" role="tablist" aria-label="Filter Lounge videos">
            {loungeCategories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                className={activeCategory === category ? "is-active" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {featuredVideo ? (
            <div className="hhc-lounge-featured">
              <VideoCard video={featuredVideo} featured />
              <div className="hhc-lounge-featured-side">
                <p className="hhc-lounge-eyebrow">Featured in the room</p>
                <h2>{featuredVideo.category}</h2>
                <p>
                  Start here, then let the room unfold. Every selection is hosted by its original publisher and plays directly through YouTube.
                </p>
                <span className="hhc-lounge-collection-mark" aria-hidden="true">HHC / 01</span>
              </div>
            </div>
          ) : (
            <p className="hhc-lounge-empty">No selections are available in this room yet.</p>
          )}

          {remainingVideos.length > 0 && (
            <div className="hhc-lounge-grid">
              {remainingVideos.map((video) => <VideoCard key={video.id} video={video} />)}
            </div>
          )}

          <div className="hhc-lounge-disclosure">
            <span className="hhc-lounge-disclosure-mark" aria-hidden="true">▶</span>
            <p>
              Nothing is hosted here. These players are official YouTube embeds from the publishers above; Hard House Coffee does not download or store video files.
            </p>
          </div>
        </section>
      </main>

      <div className="hhc-lounge-return">
        <Link href="/">Return to Hard House Coffee <span aria-hidden="true">↗</span></Link>
      </div>
      <Footer />
    </div>
  );
}