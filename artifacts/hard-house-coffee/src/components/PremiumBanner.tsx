import { useIsMobile } from "@/hooks/use-mobile";

const DEFAULT_PHRASE = "NOW BREWING AT HARD HOUSE COFFEE \u00A0\u00A0\u2736\u00A0\u00A0 ";

interface Props {
  phrase?: string;
  reverse?: boolean;
}

export default function PremiumBanner({ phrase = DEFAULT_PHRASE, reverse = false }: Props) {
  const mobilePhrase = phrase.replace(/\s+/g, " ").replace("✶", "").trim();
  const isMobile = useIsMobile();

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "100%",
        minWidth: 0,
        boxSizing: "border-box",
        contain: "inline-size paint",
        backgroundColor: "#121212",
        padding: "20px 0",
        overflow: "clip",
      }}
    >
      <div className="premium-line premium-line-top" />

      <div
        style={{
          position: "relative",
          width: "100%",
          minWidth: 0,
          height: "1.2em",
          overflow: "clip",
          clipPath: "inset(0)",
          whiteSpace: "nowrap",
        }}
      >
        {isMobile ? (
          <span className="premium-mobile-text">
            {mobilePhrase}
            <span aria-hidden="true"> ✶</span>
          </span>
        ) : (
          <div className={reverse ? "premium-marquee premium-marquee-reverse" : "premium-marquee"}>
            <span className="premium-text">{phrase}</span>
            <span className="premium-text">{phrase}</span>
            <span className="premium-text">{phrase}</span>
            <span className="premium-text">{phrase}</span>
            <span className="premium-text">{phrase}</span>
            <span className="premium-text">{phrase}</span>
            <span className="premium-text">{phrase}</span>
            <span className="premium-text">{phrase}</span>
          </div>
        )}
      </div>

      <div className="premium-line premium-line-bottom" />
    </div>
  );
}
