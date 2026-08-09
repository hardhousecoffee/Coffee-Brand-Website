export default function AuthorByline() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.85rem",
        paddingBottom: "1.75rem",
        marginBottom: "1.75rem",
        borderBottom: "1px solid rgba(161,79,31,0.15)",
      }}
    >
      {/* Hidden SVG carrying the same bloody-orange filter used in the hero */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="hhc-author-orange" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="0.263 0.263 0.263 0 0
                      0.097 0.097 0.097 0 0
                      0.031 0.031 0.031 0 0
                      0     0     0     1 0"
            />
          </filter>
        </defs>
      </svg>

      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: "#0b0b0b",
          border: "1px solid rgba(161,79,31,0.35)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          overflow: "hidden",
        }}
      >
        <img
          src="/images/logo-icon.png"
          alt="Hard House Coffee"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: "url(#hhc-author-orange)",
            mixBlendMode: "screen",
          }}
        />
      </div>

      <div>
        <p style={{ fontSize: "1.04rem", fontWeight: 700, color: "#f2f2f2", marginBottom: "0.15rem" }}>
          Hard House Coffee Team
        </p>
        <p style={{ fontSize: "0.94rem", color: "#6b5a4e" }}>
          Coffee gear experts & brewing enthusiasts
        </p>
      </div>
    </div>
  );
}
