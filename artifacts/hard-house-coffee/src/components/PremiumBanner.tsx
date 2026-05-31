export default function PremiumBanner() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "#121212",
        padding: "22px 0",
        overflow: "hidden",
      }}
    >
      {/* Top amber line — glides left */}
      <div className="premium-line premium-line-top" />

      {/* Drifting text */}
      <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
        <span className="premium-text">
          NOW BREWING AT HARD HOUSE COFFEE &nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp; NOW BREWING AT HARD HOUSE COFFEE &nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp; NOW BREWING AT HARD HOUSE COFFEE
        </span>
      </div>

      {/* Bottom amber line — glides right */}
      <div className="premium-line premium-line-bottom" />
    </div>
  );
}
