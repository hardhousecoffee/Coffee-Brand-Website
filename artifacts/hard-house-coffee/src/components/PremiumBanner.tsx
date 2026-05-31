const DEFAULT_PHRASE = "NOW BREWING AT HARD HOUSE COFFEE \u00A0\u00A0\u2736\u00A0\u00A0 ";

interface Props {
  phrase?: string;
  reverse?: boolean;
}

export default function PremiumBanner({ phrase = DEFAULT_PHRASE, reverse = false }: Props) {
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
      <div className="premium-line premium-line-top" />

      <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
        <div className={reverse ? "premium-marquee premium-marquee-reverse" : "premium-marquee"}>
          <span className="premium-text">{phrase}</span>
          <span className="premium-text">{phrase}</span>
          <span className="premium-text">{phrase}</span>
          <span className="premium-text">{phrase}</span>
        </div>
      </div>

      <div className="premium-line premium-line-bottom" />
    </div>
  );
}
