export default function AuthorByline() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        paddingBottom: "1.75rem",
        marginBottom: "1.75rem",
        borderBottom: "1px solid rgba(161,79,31,0.15)",
      }}
    >
      {/* Hero's vivid bloody-orange filter — makes the emblem glow orange like the homepage */}
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter id="byline-logo-orange" colorInterpolationFilters="sRGB">
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

      <img
        src="/images/logo-icon.png"
        alt="Hard House Coffee"
        style={{
          height: "120px",
          width: "auto",
          filter: "url(#byline-logo-orange)",
          mixBlendMode: "screen",
          flexShrink: 0,
        }}
      />

      <div style={{ marginLeft: "-32px" }}>
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
