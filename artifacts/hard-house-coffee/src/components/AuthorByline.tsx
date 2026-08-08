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
      <div
        style={{
          width: "46px",
          height: "46px",
          borderRadius: "50%",
          background: "rgba(161,79,31,0.12)",
          border: "1px solid rgba(161,79,31,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          overflow: "hidden",
          padding: "5px",
        }}
      >
        <img
          src="/images/logo-icon.png"
          alt="Hard House Coffee"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
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
