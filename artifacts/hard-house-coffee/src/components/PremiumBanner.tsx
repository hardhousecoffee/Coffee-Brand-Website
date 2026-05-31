const DEFAULT_PHRASE = "NOW BREWING AT HARD HOUSE COFFEE \u00A0\u00A0\u2736\u00A0\u00A0 ";

interface Props {
  phrase?: string;
}

export default function PremiumBanner({ phrase = DEFAULT_PHRASE }: Props) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "#121212",
        padding: "20px 0",
        overflow: "hidden",
      }}
    >
      {/* Top orange line — shimmer glides left */}
      <div className="premium-line premium-line-top" />

      {/* Seamless continuous marquee */}
      <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
        <div className="premium-marquee">
          <span className="premium-text">{phrase}</span>
          <span className="premium-text">{phrase}</span>
          <span className="premium-text">{phrase}</span>
          <span className="premium-text">{phrase}</span>
        </div>
      </div>

      {/* Bottom orange line — shimmer glides right */}
      <div className="premium-line premium-line-bottom" />
    </div>
  );
}
