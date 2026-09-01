import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  experienceMusicSessions,
  experienceVideoGroups,
  experienceVideos,
  featuredExperienceVideo,
  type ExperienceMedia,
  type ExperienceVideoCategory,
} from "@/data/experienceMedia";

function YouTubeEmbed({
  media,
  featured = false,
  autoplay = false,
  playerKey,
}: {
  media: ExperienceMedia;
  featured?: boolean;
  autoplay?: boolean;
  playerKey?: string;
}) {
  return (
    <div className={`hhc-experience-embed${featured ? " is-featured" : ""}`}>
      <iframe
        key={playerKey}
        src={`https://www.youtube-nocookie.com/embed/${media.id}?rel=0&modestbranding=1${autoplay ? "&autoplay=1&playsinline=1" : ""}`}
        title={`${media.title} — ${media.creator}`}
        loading={featured ? "eager" : "lazy"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}

function MediaCard({ media }: { media: ExperienceMedia }) {
  return (
    <article className="hhc-experience-media-card">
      <YouTubeEmbed media={media} />
      <div className="hhc-experience-media-copy">
        <div className="hhc-experience-media-meta">
          <span>{media.creator}</span>
          <span aria-hidden="true">·</span>
          <span>{media.format}</span>
        </div>
        <h3>{media.title}</h3>
        <p>{media.description}</p>
        <a
          href={`https://www.youtube.com/watch?v=${media.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hhc-experience-watch-link"
        >
          View on YouTube <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

export default function Experience() {
  const [activeMusicId, setActiveMusicId] = useState(experienceMusicSessions[0].id);
  const [musicAutoplayId, setMusicAutoplayId] = useState<string | null>(null);
  const [musicPlayRequest, setMusicPlayRequest] = useState(0);
  const activeMusic = experienceMusicSessions.find((session) => session.id === activeMusicId) ?? experienceMusicSessions[0];
  const groupedVideos = useMemo(
    () => experienceVideoGroups.map((category) => ({
      category,
      videos: experienceVideos.filter((video) => video.category === category),
    })).filter((group) => group.videos.length > 0),
    [],
  );

  const musicAsMedia: ExperienceMedia = {
    id: activeMusic.id,
    title: activeMusic.title,
    creator: activeMusic.creator,
    category: "Piano & Ambience",
    description: activeMusic.description,
    format: activeMusic.mood,
  };

  const handleMusicSelect = (sessionId: string) => {
    setActiveMusicId(sessionId);
    setMusicAutoplayId(sessionId);
    setMusicPlayRequest((request) => request + 1);
  };

  return (
    <div className="hhc-experience-page">
      <Helmet>
        <title>The Hard House Coffee Experience | Hard House Coffee</title>
        <meta
          name="description"
          content="Discover handpicked coffee ambience, jazz sessions, piano collections, festivals, documentaries, cafés, and coffee culture from around the world."
        />
        <meta property="og:title" content="The Hard House Coffee Experience" />
        <meta
          property="og:description"
          content="A cinematic collection of coffeehouse jazz, piano sessions, cafés, documentaries, craft, and coffee culture."
        />
        <link rel="canonical" href="https://hardhousecoffee.com/experience" />
      </Helmet>

      <Navbar />

      <main>
        <section className="hhc-experience-hero" aria-labelledby="experience-title">
          <div className="hhc-experience-hero-inner">
            <div className="hhc-experience-hero-copy">
              <h1 id="experience-title">
                <span>THE HARD HOUSE COFFEE</span>
                <em>EXPERIENCE</em>
              </h1>
              <p className="hhc-experience-intro">
                Discover handpicked coffee ambience, jazz sessions, piano collections, festivals, documentaries, cafés, and coffee culture from around the world.
              </p>
            </div>
            <div className="hhc-experience-artwork-frame">
              <div className="hhc-experience-stage" aria-hidden="true">
                <span className="hhc-experience-stage-arch" />
                <span className="hhc-experience-stage-reflection" />
              </div>
              <div className="hhc-experience-atmosphere-notes" aria-hidden="true">
                <span className="note-one">♪</span>
                <span className="note-two">♬</span>
                <span className="note-three">𝄞</span>
                <span className="note-four">♫</span>
              </div>
              <img
                src="/images/hard-house-experience-transparent.png"
                alt="Purple HHC coffee mug with glowing purple steam, treble clef, and music notes"
                className="hhc-experience-artwork"
              />
            </div>
          </div>
        </section>

        <section className="hhc-experience-content" id="featured" aria-labelledby="featured-title">
          <div className="hhc-experience-section-heading">
            <div>
              <p className="hhc-experience-eyebrow">01 / The opening set</p>
              <h2 id="featured-title">The room is ready.</h2>
            </div>
            <p className="hhc-experience-section-count">32 selections · carefully collected</p>
          </div>

          <div className="hhc-experience-featured">
            <YouTubeEmbed media={featuredExperienceVideo} featured />
          </div>

          <section className="hhc-experience-music-room" aria-labelledby="music-title">
            <div className="hhc-experience-subheading">
              <p className="hhc-experience-eyebrow">02 / Select a session</p>
              <h2 id="music-title">Music for the ritual.</h2>
              <p>Choose a session below. Playback stays in the official YouTube player from its original publisher.</p>
            </div>
            <div className="hhc-experience-music-layout">
              <div className="hhc-experience-session-list" role="list" aria-label="Music sessions">
                {experienceMusicSessions.map((session, index) => (
                  <button
                    key={session.id}
                    type="button"
                    role="listitem"
                    aria-pressed={activeMusic.id === session.id}
                    className={activeMusic.id === session.id ? "is-active" : ""}
                    onClick={() => handleMusicSelect(session.id)}
                  >
                    <span className="hhc-experience-session-number">0{index + 1}</span>
                    <span className="hhc-experience-session-title">
                      <strong>{session.title}</strong>
                      <small>{session.creator}</small>
                    </span>
                    <span className="hhc-experience-session-play" aria-hidden="true">▶</span>
                  </button>
                ))}
              </div>
              <div className="hhc-experience-music-player">
                <YouTubeEmbed
                  media={musicAsMedia}
                  autoplay={musicAutoplayId === activeMusicId}
                  playerKey={`${musicAsMedia.id}-${musicPlayRequest}`}
                />
                <div className="hhc-experience-music-now">
                  <span>Now selected</span>
                  <strong>{activeMusic.title}</strong>
                  <small>{activeMusic.mood}</small>
                </div>
              </div>
            </div>
          </section>

          <section className="hhc-experience-video-rooms" aria-labelledby="video-rooms-title">
            <div className="hhc-experience-subheading hhc-experience-video-heading">
              <p className="hhc-experience-eyebrow">03 / On screen</p>
              <h2 id="video-rooms-title">A world worth lingering in.</h2>
              <p>From roastery floors to championship stages, a small collection of coffee in motion.</p>
            </div>
            {groupedVideos.map((group: { category: ExperienceVideoCategory; videos: ExperienceMedia[] }) => (
              <section key={group.category} className="hhc-experience-category" aria-labelledby={`category-${group.category.replace(/\W+/g, "-").toLowerCase()}`}>
                <div className="hhc-experience-category-heading">
                  <h3 id={`category-${group.category.replace(/\W+/g, "-").toLowerCase()}`}>{group.category}</h3>
                  <span>{String(group.videos.length).padStart(2, "0")} selections</span>
                </div>
                <div className="hhc-experience-media-grid">
                  {group.videos.map((media) => <MediaCard key={media.id} media={media} />)}
                </div>
              </section>
            ))}
          </section>

          <div className="hhc-experience-attribution">
            <span aria-hidden="true">HHC / 2026</span>
            <p>
              All video and music playback is provided through official YouTube embeds from the original publishers. Hard House Coffee does not download, store, or rehost these media files.
            </p>
          </div>
        </section>
      </main>

      <div className="hhc-experience-return">
        <Link href="/">Return to Hard House Coffee <span aria-hidden="true">↗</span></Link>
      </div>
      <Footer />
    </div>
  );
}