export default function AuthorByline() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        paddingBottom: "1.75rem",
        marginBottom: "1.75rem",
        borderBottom: "1px solid rgba(161,79,31,0.15)",
      }}
    >
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          background: "rgba(161,79,31,0.15)",
          border: "1px solid rgba(161,79,31,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a14f1f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </div>
      <div>
        <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#f2f2f2", marginBottom: "0.1rem" }}>
          Hard House Coffee Team
        </p>
        <p style={{ fontSize: "0.72rem", color: "#6b5a4e" }}>
          Coffee gear experts & brewing enthusiasts
        </p>
      </div>
    </div>
  );
}
