import {
  forwardRef,
  type CSSProperties,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
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

interface ExperiencePhoto {
  src: string;
  alt: string;
  caption: string;
}

interface ExperiencePhotoNote {
  eyebrow: string;
  title: string;
  body: string;
  imageSrc?: string;
  imageAlt?: string;
}

interface CinematicMotionVariant {
  startX: string;
  startY: string;
  endX: string;
  endY: string;
  duration: string;
  startScale: string;
  endScale: string;
}

const cinematicMotionVariants: readonly CinematicMotionVariant[] = [
  { startX: "-2.2%", startY: "-1.2%", endX: "2.1%", endY: "1.1%", duration: "16s", startScale: "1.05", endScale: "1.14" },
  { startX: "2.1%", startY: "-1.1%", endX: "-2%", endY: "1.2%", duration: "18s", startScale: "1.15", endScale: "1.05" },
  { startX: "-1.5%", startY: "2.2%", endX: "1.8%", endY: "-2%", duration: "14s", startScale: "1.06", endScale: "1.15" },
  { startX: "1.8%", startY: "-2.1%", endX: "-1.6%", endY: "2%", duration: "19s", startScale: "1.14", endScale: "1.05" },
  { startX: "-2%", startY: "0.9%", endX: "2.2%", endY: "-1%", duration: "17s", startScale: "1.05", endScale: "1.145" },
  { startX: "1.3%", startY: "2%", endX: "-1.8%", endY: "-2.2%", duration: "15s", startScale: "1.145", endScale: "1.05" },
];

const heroCinematicMotionVariants: readonly CinematicMotionVariant[] = [
  { startX: "2.1%", startY: "-1.1%", endX: "-2.2%", endY: "1.1%", duration: "13s", startScale: "1.05", endScale: "1.16" },
  { startX: "-2%", startY: "-1.1%", endX: "2.2%", endY: "1.1%", duration: "13s", startScale: "1.16", endScale: "1.05" },
  { startX: "-1.4%", startY: "2.2%", endX: "1.6%", endY: "-2.2%", duration: "13s", startScale: "1.05", endScale: "1.17" },
  { startX: "1.5%", startY: "-2.2%", endX: "-1.6%", endY: "2.2%", duration: "13s", startScale: "1.17", endScale: "1.05" },
  { startX: "-2.1%", startY: "1.9%", endX: "2.2%", endY: "-2%", duration: "13s", startScale: "1.05", endScale: "1.16" },
  { startX: "1.2%", startY: "2.1%", endX: "-1.9%", endY: "-2.2%", duration: "13s", startScale: "1.16", endScale: "1.05" },
] as const;

function CinematicImage({
  src,
  alt,
  motionIndex,
  className,
  frameClassName,
  loading = "lazy",
  revealImmediately = false,
  motionVariant,
}: {
  src: string;
  alt: string;
  motionIndex: number;
  className?: string;
  frameClassName?: string;
  loading?: "eager" | "lazy";
  revealImmediately?: boolean;
  motionVariant?: CinematicMotionVariant;
}) {
  const frameRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(revealImmediately);
  const motion = motionVariant ?? cinematicMotionVariants[motionIndex % cinematicMotionVariants.length];
  const entranceDuration = 650 + (motionIndex % 4) * 40;
  const entranceOffset = 8 + (motionIndex % 3) * 2;

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return undefined;
    if (revealImmediately) return undefined;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.unobserve(frame);
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.12 },
    );

    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  const motionStyle = {
    "--cinematic-enter-duration": `${entranceDuration}ms`,
    "--cinematic-enter-y": `${entranceOffset}px`,
    "--ken-burns-start-x": motion.startX,
    "--ken-burns-start-y": motion.startY,
    "--ken-burns-end-x": motion.endX,
    "--ken-burns-end-y": motion.endY,
    "--ken-burns-duration": motion.duration,
    "--ken-burns-start-scale": motion.startScale,
    "--ken-burns-end-scale": motion.endScale,
  } as CSSProperties;

  return (
    <span
      ref={frameRef}
      className={`hhc-cinematic-image${frameClassName ? ` ${frameClassName}` : ""}${isVisible ? " is-visible" : ""}`}
      style={motionStyle}
    >
      <img src={src} alt={alt} className={className} loading={loading} decoding="async" />
    </span>
  );
}

const experienceStreetPhotos: ExperiencePhoto[] = [
  {
    src: "/images/experience-alley-lights.jpg",
    alt: "Coffeehouse alley illuminated by string lights at sunset",
    caption: "The city softens after sunset.",
  },
  {
    src: "/images/experience-teal-coffee-storefront.jpg",
    alt: "Teal coffee shop storefront with outdoor café tables",
    caption: "A doorway made for lingering.",
  },
  {
    src: "/images/cafe-alley.jpg",
    alt: "Coffee roaster entrance tucked into a brick alley under warm string lights",
    caption: "Follow the light in.",
  },
  {
    src: "/images/experience-cafe-allegro.jpg",
    alt: "Historic Café Allegro exterior with bicycles and guests",
    caption: "Every neighborhood has its room.",
  },
  {
    src: "/images/coffeehouse-night.jpg",
    alt: "Warm coffeehouse seating beside rain-covered windows at night",
    caption: "Rain makes the room feel closer.",
  },
  {
    src: "/images/outdoor-coffee.jpg",
    alt: "Tattooed café guest enjoying coffee at a neighborhood outdoor table",
    caption: "The neighborhood takes its seat.",
  },
];

const experienceCafePhotos: ExperiencePhoto[] = [
  {
    src: "/images/experience-scooter-cafe.jpg",
    alt: "Rustic café storefront with two vintage scooters",
    caption: "Street-side character.",
  },
  {
    src: "/images/experience-vintage-coffeehouse.jpg",
    alt: "Vintage Coffeehouse storefront open to the sidewalk",
    caption: "Open doors, unhurried hours.",
  },
  {
    src: "/images/experience-leather-lounge.jpg",
    alt: "Moody coffee bar with brick walls and leather seating",
    caption: "A room with its own tempo.",
  },
];

const experiencePeoplePhotos: ExperiencePhoto[] = [
  {
    src: "/images/experience-seated-barista.jpg",
    alt: "Barista seated beside a contemporary coffee bar",
    caption: "Presence behind the counter.",
  },
  {
    src: "/images/experience-latte-service.jpg",
    alt: "Tattooed café guest holding a finished latte",
    caption: "The handoff.",
  },
  {
    src: "/images/experience-colorful-barista.jpg",
    alt: "Tattooed barista preparing a drink behind the counter",
    caption: "Craft in motion.",
  },
  {
    src: "/images/experience-barista-pour.jpg",
    alt: "Tattooed barista pouring coffee into a glass",
    caption: "The final pour.",
  },
];

const experienceHeroSlides = [
  {
    src: "/images/experience-hero-jazz-mug.png",
    alt: "Purple HHC coffee mug glowing on a jazz café counter beside a piano and saxophone",
  },
  {
    src: "/images/experience-hero-jazz-bar.jpeg",
    alt: "Intimate coffeehouse bar with a live double bass performance",
  },
  {
    src: "/images/experience-hero-saxophone.jpeg",
    alt: "Saxophone player performing in a lively blue and amber café",
  },
  {
    src: "/images/experience-hero-jazz-room.jpeg",
    alt: "Crowded jazz room with piano, double bass, and café tables",
  },
  {
    src: "/images/experience-hero-blue-saxophone.jpeg",
    alt: "Saxophone player performing through blue haze for a coffeehouse crowd",
  },
];

const liveJazzLoungeSessions: ExperienceMedia[] = [
  {
    id: "FeLjURQ7Qzw",
    title: "Shedrick Mitchell — Live at Jazz St. Louis",
    creator: "Jazz St. Louis",
    category: "Coffeehouse Jazz",
    description: "A soulful homecoming performance captured with the musicians and room sharing every turn.",
    format: "Live club performance",
  },
  {
    id: "c4QpkSzMB_g",
    title: "Kurt Elling — Gangster of Love",
    creator: "Ronnie Scott's Jazz Club",
    category: "Coffeehouse Jazz",
    description: "The Grammy-winning vocalist brings blues-soaked swing to one of London's storied jazz clubs.",
    format: "Live at Ronnie Scott's",
  },
  {
    id: "VPKSoHARusk",
    title: "Marcus Strickland Twi-Life at Blue Note",
    creator: "Jazz Night in America",
    category: "Coffeehouse Jazz",
    description: "A vivid Blue Note performance that keeps the band, tables, and listening crowd in the frame.",
    format: "Live at Blue Note",
  },
  {
    id: "3JAZkZA1eRg",
    title: "Roosevelt Collier — Live at Ronnie Scott's",
    creator: "Ronnie Scott's Jazz Club",
    category: "Coffeehouse Jazz",
    description: "Pedal-steel jazz and deep groove meet the warmth and immediacy of a packed London club.",
    format: "Live club performance",
  },
  {
    id: "WvsPvLKkKsg",
    title: "Josh Lawrence — Still We Dream",
    creator: "SmallsLIVE",
    category: "Coffeehouse Jazz",
    description: "A close-room performance from one of New York's essential jazz clubs, with the audience close to the band.",
    format: "Live at Smalls Jazz Club",
  },
];

const liveJazzLegendaryPerformances: ExperienceMedia[] = [
  {
    id: "rRRJpKV8I9o",
    title: "Jazz St. Louis Big Band — Live",
    creator: "Jazz St. Louis",
    category: "Coffeehouse Jazz",
    description: "Victor Goines leads a full jazz orchestra through a swinging night in an intimate listening room.",
    format: "Live big-band performance",
  },
  {
    id: "6gHF94oUnQY",
    title: "Joey Alexander Trio — Live from Jazz St. Louis",
    creator: "Jazz St. Louis",
    category: "Coffeehouse Jazz",
    description: "Piano-trio conversation in a close, attentive room where every detail has space to breathe.",
    format: "Live trio performance",
  },
  {
    id: "56PkbtelBAw",
    title: "Bria Skonberg — Live from Jazz St. Louis",
    creator: "Jazz St. Louis",
    category: "Coffeehouse Jazz",
    description: "The trumpeter and vocalist leads a modern revival of classic jazz with generous live-room energy.",
    format: "Live club performance",
  },
  {
    id: "3SCdyCYnXo0",
    title: "The Otherside — Emmet Cohen & Friends",
    creator: "Emmet Cohen",
    category: "Coffeehouse Jazz",
    description: "Emmet Cohen, Rudresh Mahanthappa, Giveton Gelin, Ben Wolfe, and Bryan Carter trade ideas in real time.",
    format: "Live ensemble performance",
  },
  {
    id: "3EnVfigN0Ag",
    title: "Emmet Cohen & Cyrille Aimée — Almost Like Being in Love",
    creator: "International Jazz Day",
    category: "Coffeehouse Jazz",
    description: "A joyful vocal-and-piano performance that captures the spontaneity and warmth of a live jazz room.",
    format: "Live Jazz Day performance",
  },
];

function ExperiencePhotoGallery({
  photos,
  className,
  note,
}: {
  photos: ExperiencePhoto[];
  className: string;
  note?: ExperiencePhotoNote;
}) {
  return (
    <div className={`hhc-experience-photo-grid ${className}`}>
      {photos.map((photo, index) => (
        <figure className="hhc-experience-photo" key={photo.src}>
          <CinematicImage
            src={photo.src}
            alt={photo.alt}
            motionIndex={index}
            frameClassName="hhc-experience-photo-image-frame"
          />
          <figcaption>{photo.caption}</figcaption>
        </figure>
      ))}
      {note && (
        <aside className={`hhc-experience-photo-note${note.imageSrc ? " has-image" : ""}`}>
          {note.imageSrc && (
            <CinematicImage
              src={note.imageSrc}
              alt={note.imageAlt ?? ""}
              motionIndex={photos.length + 2}
              className="hhc-experience-photo-note-image"
              frameClassName="hhc-experience-photo-note-image-frame"
            />
          )}
          <div className="hhc-experience-photo-note-copy">
            <p className="hhc-experience-eyebrow">{note.eyebrow}</p>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
          </div>
        </aside>
      )}
    </div>
  );
}

function ExperienceHeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAmbientPlaying, setIsAmbientPlaying] = useState(false);
  const [isAmbientAutoplayBlocked, setIsAmbientAutoplayBlocked] = useState(false);
  const ambientAudioRef = useRef<HTMLAudioElement>(null);
  const ambientMusicPauseKey = "hhc-experience-ambient-jazz-paused";

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % experienceHeroSlides.length);
    }, 13000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    const audio = ambientAudioRef.current;
    if (!audio) return undefined;

    audio.volume = 0.18;
    audio.loop = true;

    let wasIntentionallyPaused = false;
    try {
      wasIntentionallyPaused = window.sessionStorage.getItem(ambientMusicPauseKey) === "true";
    } catch {
      // Session storage can be unavailable in privacy-restricted browsers.
    }

    if (wasIntentionallyPaused) return undefined;

    void audio.play()
      .then(() => {
        setIsAmbientPlaying(true);
        setIsAmbientAutoplayBlocked(false);
      })
      .catch(() => {
        setIsAmbientPlaying(false);
        setIsAmbientAutoplayBlocked(true);
      });

    return () => audio.pause();
  }, []);

  const goToSlide = (index: number) => {
    setActiveIndex((index + experienceHeroSlides.length) % experienceHeroSlides.length);
  };

  const handleAmbientToggle = () => {
    const audio = ambientAudioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      setIsAmbientPlaying(false);
      try {
        window.sessionStorage.setItem(ambientMusicPauseKey, "true");
      } catch {
        // Continue normally when session storage is unavailable.
      }
      return;
    }

    void audio.play()
      .then(() => {
        setIsAmbientPlaying(true);
        setIsAmbientAutoplayBlocked(false);
        try {
          window.sessionStorage.removeItem(ambientMusicPauseKey);
        } catch {
          // Continue normally when session storage is unavailable.
        }
      })
      .catch(() => {
        setIsAmbientPlaying(false);
        setIsAmbientAutoplayBlocked(true);
      });
  };

  return (
    <div
      className="hhc-experience-hero-carousel"
      role="region"
      aria-label="Hard House Coffee Experience highlights"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
    >
      <div className="hhc-experience-hero-slides">
        {experienceHeroSlides.map((slide, index) => (
          <div
            className={`hhc-experience-hero-slide${index === activeIndex ? " is-active" : ""}`}
            key={slide.src}
            aria-hidden={index !== activeIndex}
          >
            <CinematicImage
              src={slide.src}
              alt={slide.alt}
              motionIndex={index}
              motionVariant={heroCinematicMotionVariants[index % heroCinematicMotionVariants.length]}
              frameClassName="hhc-experience-hero-image-frame"
              loading={index === 0 ? "eager" : "lazy"}
              revealImmediately
            />
          </div>
        ))}
      </div>
      <div className="hhc-experience-hero-music">
        <audio
          ref={ambientAudioRef}
          src="/audio/modern-jazz-groove.mp3"
          preload="auto"
          loop
          onPlay={() => setIsAmbientPlaying(true)}
          onPause={() => setIsAmbientPlaying(false)}
          onError={() => {
            setIsAmbientPlaying(false);
            setIsAmbientAutoplayBlocked(true);
          }}
        />
        <button
          type="button"
          className={`hhc-experience-hero-music-control${isAmbientPlaying ? " is-playing" : ""}`}
          onClick={handleAmbientToggle}
          aria-label={isAmbientPlaying ? "Pause ambient jazz" : "Play ambient jazz"}
          aria-pressed={isAmbientPlaying}
        >
          <span className="hhc-experience-vinyl" aria-hidden="true">
            <span>♫</span>
          </span>
          <span className="hhc-experience-hero-music-copy">
            <strong>{isAmbientPlaying ? "Ambient jazz playing" : isAmbientAutoplayBlocked ? "Tap to begin the jazz" : "Ambient jazz"}</strong>
            <small>{isAmbientPlaying ? "Pause the atmosphere" : "Low-volume lounge accompaniment"}</small>
          </span>
          <span className={`hhc-experience-hero-music-icon${isAmbientPlaying ? " is-pause" : ""}`} aria-hidden="true">
            {isAmbientPlaying ? (
              <>
                <i />
                <i />
              </>
            ) : (
              <b />
            )}
          </span>
        </button>
      </div>
      <div className="hhc-experience-hero-carousel-footer">
        <span className="hhc-experience-hero-carousel-count" aria-live="polite">
          {String(activeIndex + 1).padStart(2, "0")} / {String(experienceHeroSlides.length).padStart(2, "0")}
        </span>
        <div className="hhc-experience-hero-carousel-dots" aria-label="Choose an experience image">
          {experienceHeroSlides.map((slide, index) => (
            <button
              type="button"
              className={`hhc-experience-hero-carousel-dot${index === activeIndex ? " is-active" : ""}`}
              key={slide.src}
              aria-label={`Show experience image ${index + 1}`}
              aria-pressed={index === activeIndex}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <span className="hhc-experience-hero-carousel-label">Coffee / Sound / Atmosphere</span>
      </div>
    </div>
  );
}

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

function LiveJazzPerformanceCard({ performance }: { performance: ExperienceMedia }) {
  return (
    <article className="hhc-experience-live-jazz-card">
      <YouTubeEmbed media={performance} />
      <div className="hhc-experience-live-jazz-copy">
        <p>{performance.creator}</p>
        <h3>{performance.title}</h3>
        <span>{performance.format}</span>
      </div>
    </article>
  );
}

type YouTubePlayerState = -1 | 0 | 1 | 2 | 3 | 5;

interface MusicPlayerHandle {
  cue: (videoId: string) => void;
  play: (videoId: string) => void;
  pause: () => void;
}

const MusicYouTubePlayer = forwardRef<
  MusicPlayerHandle,
  {
    media: ExperienceMedia;
    onStateChange: (state: YouTubePlayerState) => void;
  }
>(function MusicYouTubePlayer({ media, onStateChange }, ref) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const pendingActionRef = useRef<(() => void) | null>(null);
  const stateHandlerRef = useRef(onStateChange);
  const initialMediaRef = useRef(media);
  const isPlayerReadyRef = useRef(false);

  useEffect(() => {
    stateHandlerRef.current = onStateChange;
  }, [onStateChange]);

  const sendPlayerMessage = (func: string, args: unknown[] = []) => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args }),
      "*",
    );
  };

  useImperativeHandle(ref, () => ({
    cue(videoId) {
      const action = () => sendPlayerMessage("cueVideoById", [videoId]);
      if (isPlayerReadyRef.current) action();
      else pendingActionRef.current = action;
    },
    play(videoId) {
      const action = () => sendPlayerMessage("loadVideoById", [videoId]);
      if (isPlayerReadyRef.current) action();
      else pendingActionRef.current = action;
    },
    pause() {
      const action = () => sendPlayerMessage("pauseVideo");
      if (isPlayerReadyRef.current) action();
      else pendingActionRef.current = action;
    },
  }), []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.source !== iframeRef.current?.contentWindow) return;

      let message: {
        event?: string;
        info?: YouTubePlayerState | { playerState?: YouTubePlayerState };
      };

      try {
        message = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
      } catch {
        return;
      }

      if (message.event === "onReady") {
        isPlayerReadyRef.current = true;
        pendingActionRef.current?.();
        pendingActionRef.current = null;
      } else if (message.event === "onStateChange" && typeof message.info === "number") {
        stateHandlerRef.current(message.info);
      } else if (
        message.event === "infoDelivery"
        && typeof message.info === "object"
        && typeof message.info?.playerState === "number"
      ) {
        stateHandlerRef.current(message.info.playerState);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
      isPlayerReadyRef.current = false;
      pendingActionRef.current = null;
    };
  }, []);

  const handlePlayerLoad = () => {
    const listen = () => {
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: "listening", id: "hhc-experience-music-player" }),
        "*",
      );
    };

    listen();
    window.setTimeout(listen, 250);
    window.setTimeout(listen, 750);
  };

  return (
    <div
      className="hhc-experience-embed"
      aria-label={`${media.title} — ${media.creator}`}
    >
      <iframe
        id="hhc-experience-music-player"
        ref={iframeRef}
        src={`https://www.youtube.com/embed/${initialMediaRef.current.id}?rel=0&modestbranding=1&playsinline=1&enablejsapi=1`}
        title={`${media.title} — ${media.creator}`}
        loading="eager"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        onLoad={handlePlayerLoad}
      />
    </div>
  );
});

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
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const musicPlayerRef = useRef<MusicPlayerHandle>(null);
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
    if (sessionId === activeMusicId) return;

    setActiveMusicId(sessionId);
    setIsMusicPlaying(false);
    musicPlayerRef.current?.cue(sessionId);
  };

  const handleMusicToggle = (sessionId: string) => {
    if (sessionId === activeMusicId && isMusicPlaying) {
      setIsMusicPlaying(false);
      musicPlayerRef.current?.pause();
      return;
    }

    setActiveMusicId(sessionId);
    setIsMusicPlaying(true);
    musicPlayerRef.current?.play(sessionId);
  };

  const handleMusicPlayerState = (state: YouTubePlayerState) => {
    if (state === 1) {
      setIsMusicPlaying(true);
    } else if (state === 0 || state === 2 || state === 5) {
      setIsMusicPlaying(false);
    }
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
                <span className="hhc-experience-hero-accent hhc-experience-hero-line">Welcome to the</span>
                <span className="hhc-experience-hero-brand">HARD HOUSE COFFEE</span>
                <span className="hhc-experience-hero-accent hhc-experience-hero-line">Experience</span>
              </h1>
              <p className="hhc-experience-intro">
                Not every great coffee experience begins with a cup. Some begin with a melody.
              </p>
            </div>
            <div className="hhc-experience-artwork-frame">
              <ExperienceHeroCarousel />
            </div>
          </div>
        </section>

        <section className="hhc-experience-content hhc-experience-music-content" id="music" aria-labelledby="music-title">
          <section className="hhc-experience-music-room hhc-experience-music-room-primary">
            <div className="hhc-experience-subheading">
              <p className="hhc-experience-eyebrow">01 / Select a session</p>
              <h2 id="music-title">Music for the ritual</h2>
              <p>Select a session, then use its circular control to play or pause. Playback stays synchronized with the official YouTube player.</p>
            </div>
            <div className="hhc-experience-music-layout">
              <div className="hhc-experience-session-list" role="list" aria-label="Music sessions">
                {experienceMusicSessions.map((session, index) => {
                  const isSelected = activeMusic.id === session.id;
                  const isNowPlaying = isSelected && isMusicPlaying;

                  return (
                  <div
                    key={session.id}
                    role="listitem"
                    className={`hhc-experience-session-row${isSelected ? " is-active" : ""}${isNowPlaying ? " is-playing" : ""}`}
                    onClick={() => handleMusicSelect(session.id)}
                  >
                    <button
                      type="button"
                      className="hhc-experience-session-select"
                      aria-pressed={isSelected}
                    >
                      <span className="hhc-experience-session-number">0{index + 1}</span>
                      <span className="hhc-experience-session-title">
                        <strong>{session.title}</strong>
                        <small>{session.creator}</small>
                      </span>
                    </button>
                    <span className="hhc-experience-session-status" aria-hidden={!isNowPlaying}>
                      {isNowPlaying && (
                        <>
                          <span className="hhc-experience-equalizer" aria-hidden="true">
                            <i />
                            <i />
                            <i />
                          </span>
                          <span>Now playing</span>
                        </>
                      )}
                    </span>
                    <button
                      type="button"
                      className="hhc-experience-session-play"
                      aria-label={`${isNowPlaying ? "Pause" : "Play"} ${session.title}`}
                      aria-pressed={isNowPlaying}
                      onClick={(event) => {
                        event.stopPropagation();
                        handleMusicToggle(session.id);
                      }}
                    >
                      {isNowPlaying ? (
                        <span className="hhc-experience-pause-icon" aria-hidden="true">
                          <i />
                          <i />
                        </span>
                      ) : (
                        <span className="hhc-experience-play-icon" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                  );
                })}
              </div>
              <div className="hhc-experience-music-player">
                <MusicYouTubePlayer
                  ref={musicPlayerRef}
                  media={musicAsMedia}
                  onStateChange={handleMusicPlayerState}
                />
                <div className={`hhc-experience-music-now${isMusicPlaying ? " is-playing" : ""}`} aria-live="polite">
                  <span>{isMusicPlaying ? "Now playing" : "Ready to play"}</span>
                  <strong>{activeMusic.title}</strong>
                  <small>{activeMusic.mood}</small>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="hhc-experience-live-jazz" aria-labelledby="live-jazz-title">
          <div className="hhc-experience-live-jazz-heading">
            <p className="hhc-experience-eyebrow">Experience the Music</p>
            <h2 id="live-jazz-title">Live Jazz Performances</h2>
            <p>
              Some places serve coffee. Others create an atmosphere. Sit back, press play, and enjoy some of the
              world’s finest live jazz performances, where great music and great conversations have always
              belonged together.
            </p>
          </div>
          <section className="hhc-experience-live-jazz-group" aria-labelledby="jazz-lounge-sessions-title">
            <div className="hhc-experience-live-jazz-subheading">
              <p>01 / Warm rooms</p>
              <h3 id="jazz-lounge-sessions-title">Jazz Lounge Sessions</h3>
              <span>Five intimate sets for settling in and staying awhile.</span>
            </div>
            <div className="hhc-experience-live-jazz-grid">
              {liveJazzLoungeSessions.map((performance) => (
                <LiveJazzPerformanceCard key={performance.id} performance={performance} />
              ))}
            </div>
          </section>

          <section className="hhc-experience-live-jazz-group" aria-labelledby="legendary-live-performances-title">
            <div className="hhc-experience-live-jazz-subheading">
              <p>02 / Essential listening</p>
              <h3 id="legendary-live-performances-title">Legendary Live Performances</h3>
              <span>Five memorable performances from artists who keep the language of jazz moving.</span>
            </div>
            <div className="hhc-experience-live-jazz-grid">
              {liveJazzLegendaryPerformances.map((performance) => (
                <LiveJazzPerformanceCard key={performance.id} performance={performance} />
              ))}
            </div>
          </section>
        </section>

        <section className="hhc-experience-photo-chapter hhc-experience-photo-chapter-opening" aria-labelledby="experience-places-title">
          <div className="hhc-experience-photo-heading">
            <p className="hhc-experience-eyebrow">Atmosphere / Field notes</p>
            <h2 id="experience-places-title">Where coffee becomes a place</h2>
            <p>From lit alleys to neighborhood institutions, every room begins before the first cup reaches the table.</p>
          </div>
          <ExperiencePhotoGallery
            photos={experienceStreetPhotos}
            className="hhc-experience-photo-grid-streets"
            note={{
              eyebrow: "The approach / Before the first sip",
                title: "A café begins at the threshold",
              body: "A lit alley, an open doorway, a familiar sign — these are the first notes of the ritual. Before coffee becomes conversation, the room invites you to slow down and stay awhile.",
            }}
          />
        </section>

        <section className="hhc-experience-content" id="featured" aria-labelledby="featured-title">
          <div className="hhc-experience-section-heading">
            <div>
              <p className="hhc-experience-eyebrow">02 / The opening set</p>
              <h2 id="featured-title">The room is ready</h2>
            </div>
            <p className="hhc-experience-section-count">37 selections · carefully collected</p>
          </div>

          <div className="hhc-experience-featured">
            <YouTubeEmbed media={featuredExperienceVideo} featured />
          </div>

          <section className="hhc-experience-photo-interlude" aria-labelledby="experience-rooms-title">
            <div className="hhc-experience-photo-heading is-compact">
              <p className="hhc-experience-eyebrow">Rooms / Objects / Memory</p>
              <h2 id="experience-rooms-title">Every cafe tells a story</h2>
            </div>
            <ExperiencePhotoGallery
              photos={experienceCafePhotos}
              className="hhc-experience-photo-grid-cafes"
              note={{
                eyebrow: "Objects / Rooms / Memory",
                title: "Some places stay with you",
                body: "Wood, porcelain, worn leather, the soft reflection in a window — a café is remembered as much by its details as by its coffee.",
                imageSrc: "/images/experience-vintage-coffeehouse-unsplash.jpg",
                imageAlt: "Warm vintage café interior with a brick wall, wooden counter, and coffee cups",
              }}
            />
          </section>

          <aside className="hhc-experience-photo-bridge" aria-label="Coffee shops across America">
            <p className="hhc-experience-eyebrow">Across the counter / Across the country</p>
            <div className="hhc-experience-photo-bridge-content">
              <h2>Every city pours its own version of home</h2>
              <p>
                In one neighborhood it is a corner window and a paper cup. In another, a long wooden bar,
                a familiar roast, and the same seat waiting by the light.
              </p>
              <span>Community is the common ingredient.</span>
            </div>
          </aside>

          <section className="hhc-experience-photo-interlude hhc-experience-people-chapter" aria-labelledby="experience-people-title">
            <div className="hhc-experience-photo-heading">
              <p className="hhc-experience-eyebrow">Hands / Ritual / Character</p>
              <h2 id="experience-people-title">The people behind the atmosphere</h2>
              <p>Technique gives the cup its shape. Personality gives the room its pulse.</p>
            </div>
            <ExperiencePhotoGallery
              photos={experiencePeoplePhotos}
              className="hhc-experience-photo-grid-people"
              note={{
                eyebrow: "Hands / Ritual / Character",
                title: "The cup passes through many hands",
                body: "A good café is a choreography of small gestures — the greeting, the grind, the pour, the pause before the first sip.",
              }}
            />
          </section>

          <section className="hhc-experience-video-rooms" aria-labelledby="video-rooms-title">
            <div className="hhc-experience-subheading hhc-experience-video-heading">
              <p className="hhc-experience-eyebrow">03 / On screen</p>
              <h2 id="video-rooms-title">A world worth lingering in</h2>
              <p>From roastery floors to championship stages, a small collection of coffee in motion.</p>
            </div>
            {groupedVideos.map((group: { category: ExperienceVideoCategory; videos: ExperienceMedia[] }) => (
              <section key={group.category} className="hhc-experience-category" aria-labelledby={`category-${group.category.replace(/\W+/g, "-").toLowerCase()}`}>
                <div className="hhc-experience-category-heading">
                  <div className="hhc-experience-category-title">
                    <h3 id={`category-${group.category.replace(/\W+/g, "-").toLowerCase()}`}>{group.category}</h3>
                    {group.category === "COFFEE THROUGH TIME" && <p>Five stories that shaped the cup.</p>}
                  </div>
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