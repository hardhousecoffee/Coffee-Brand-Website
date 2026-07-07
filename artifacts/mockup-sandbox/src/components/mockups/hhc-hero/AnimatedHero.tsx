import { motion } from "framer-motion";

const beans = [
  { id: 1, x: "8%", y: "20%", size: 38, rotate: 25, delay: 0, duration: 7 },
  { id: 2, x: "15%", y: "65%", size: 28, rotate: -40, delay: 1.2, duration: 9 },
  { id: 3, x: "5%", y: "80%", size: 22, rotate: 60, delay: 0.5, duration: 8 },
  { id: 4, x: "78%", y: "15%", size: 32, rotate: -20, delay: 0.8, duration: 10 },
  { id: 5, x: "88%", y: "55%", size: 44, rotate: 45, delay: 2, duration: 7.5 },
  { id: 6, x: "82%", y: "78%", size: 26, rotate: -60, delay: 1.5, duration: 9.5 },
  { id: 7, x: "25%", y: "88%", size: 20, rotate: 80, delay: 3, duration: 6.5 },
  { id: 8, x: "68%", y: "85%", size: 30, rotate: -15, delay: 0.3, duration: 11 },
  { id: 9, x: "92%", y: "30%", size: 18, rotate: 35, delay: 2.5, duration: 8.5 },
  { id: 10, x: "3%", y: "45%", size: 24, rotate: -70, delay: 1.8, duration: 7.8 },
];

function CoffeeBean({ size, color = "#6b3a1f" }: { size: number; color?: string }) {
  return (
    <svg width={size} height={size * 0.65} viewBox="0 0 60 40" fill="none">
      <ellipse cx="30" cy="20" rx="28" ry="18" fill={color} />
      <path d="M30 4 Q38 20 30 36" stroke="#3d1f0a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function SteamLine({ delay = 0, x = 0 }: { delay?: number; x?: number }) {
  return (
    <motion.div
      style={{
        position: "absolute",
        bottom: "100%",
        left: `calc(50% + ${x}px)`,
        width: 3,
        height: 50,
        borderRadius: 10,
        background: "linear-gradient(to top, rgba(255,255,255,0.35), transparent)",
        filter: "blur(2px)",
      }}
      animate={{
        y: [-10, -60],
        opacity: [0, 0.7, 0],
        scaleX: [1, 1.5, 0.8],
        x: [0, x > 0 ? 8 : -8, x > 0 ? 14 : -14],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        delay,
        ease: "easeOut",
      }}
    />
  );
}

export function AnimatedHero() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b0b0b",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Radial glow behind cup */}
      <div
        style={{
          position: "absolute",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(161,79,31,0.18) 0%, rgba(161,79,31,0.06) 50%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -52%)",
          pointerEvents: "none",
        }}
      />

      {/* Floating coffee beans */}
      {beans.map((b) => (
        <motion.div
          key={b.id}
          style={{
            position: "absolute",
            left: b.x,
            top: b.y,
            rotate: b.rotate,
            opacity: 0.75,
          }}
          animate={{
            y: [0, -18, 0, 12, 0],
            rotate: [b.rotate, b.rotate + 12, b.rotate - 8, b.rotate],
            opacity: [0.55, 0.9, 0.7, 0.55],
          }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            delay: b.delay,
            ease: "easeInOut",
          }}
        >
          <CoffeeBean size={b.size} color={b.id % 3 === 0 ? "#8b4513" : b.id % 3 === 1 ? "#6b3a1f" : "#4a2010"} />
        </motion.div>
      ))}

      {/* Nav */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          borderBottom: "1px solid rgba(161,79,31,0.15)",
        }}
      >
        <span style={{ color: "#a14f1f", fontWeight: 700, fontSize: 18, letterSpacing: 2, textTransform: "uppercase" }}>
          Hard House Coffee
        </span>
        <div style={{ display: "flex", gap: 32 }}>
          {["Home", "Products", "About", "Contact"].map((item) => (
            <span
              key={item}
              style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, cursor: "pointer", letterSpacing: 1 }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Hero content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0,
          zIndex: 10,
          textAlign: "center",
        }}
      >
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            color: "#a14f1f",
            fontSize: 13,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Premium · Affiliate Picks · Curated
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          style={{
            color: "#ffffff",
            fontSize: 68,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -1,
            marginBottom: 24,
          }}
        >
          Brewed for the
          <br />
          <span style={{ color: "#a14f1f" }}>Bold & Restless</span>
        </motion.h1>

        {/* Animated coffee cup */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "relative", marginBottom: 32 }}
        >
          {/* Steam lines */}
          <div style={{ position: "absolute", bottom: "100%", left: 0, right: 0, height: 80 }}>
            <SteamLine delay={0} x={-18} />
            <SteamLine delay={0.7} x={0} />
            <SteamLine delay={1.4} x={18} />
          </div>

          {/* Coffee cup SVG */}
          <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
            {/* Cup body */}
            <path d="M30 50 L35 130 Q35 140 45 140 L115 140 Q125 140 125 130 L130 50 Z" fill="#1a0a04" stroke="#a14f1f" strokeWidth="2" />
            {/* Coffee liquid */}
            <motion.path
              d="M32 65 L34 120 Q34 130 44 130 L116 130 Q126 130 126 120 L128 65 Z"
              fill="#3d1505"
              animate={{ opacity: [0.9, 1, 0.85, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Coffee surface with latte art */}
            <motion.ellipse
              cx="80" cy="68" rx="46" ry="12"
              fill="#6b2e10"
              animate={{ scaleX: [1, 1.02, 0.99, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            {/* Latte art heart */}
            <motion.path
              d="M72 68 Q74 63 78 67 Q80 65 84 63 Q90 63 88 69 Q86 74 80 77 Q74 74 72 68 Z"
              fill="rgba(210,150,80,0.6)"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {/* Handle */}
            <path d="M125 70 Q155 70 155 90 Q155 115 125 115" stroke="#a14f1f" strokeWidth="6" fill="none" strokeLinecap="round" />
            {/* Saucer */}
            <ellipse cx="80" cy="145" rx="60" ry="8" fill="#1a0a04" stroke="#a14f1f" strokeWidth="1.5" />
          </svg>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, maxWidth: 420, lineHeight: 1.7, marginBottom: 36 }}
        >
          Discover the best coffee gear, beans, and brewing essentials — hand-picked for true coffee lovers.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{ display: "flex", gap: 16 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: "#a14f1f",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "14px 32px",
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: 0.5,
              cursor: "pointer",
            }}
          >
            Shop Our Picks
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: "transparent",
              color: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(161,79,31,0.5)",
              borderRadius: 6,
              padding: "14px 32px",
              fontSize: 15,
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
        }}
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 11, letterSpacing: 3, textTransform: "uppercase" }}>
          Scroll
        </span>
        <div style={{ width: 1, height: 30, background: "linear-gradient(to bottom, rgba(161,79,31,0.7), transparent)" }} />
      </motion.div>
    </div>
  );
}
