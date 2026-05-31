import { Link } from "wouter";

interface PageNavProps {
  nextPath: string;
  nextLabel: string;
  showArrow?: boolean;
}

export default function PageNav({ nextPath, nextLabel, showArrow = true }: PageNavProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "3rem 0 4rem",
        borderTop: "1px solid rgba(139,47,47,0.15)",
      }}
    >
      <Link href={nextPath}>
        <button
          onClick={() => window.scrollTo(0, 0)}
          className="back-to-top-btn"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "transparent",
            border: "1px solid rgba(161,79,31,0.35)",
            borderRadius: "6px",
            padding: "0.55rem 1.6rem",
            color: "#b0a090",
            fontSize: "0.82rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "all 0.25s ease",
            fontWeight: 600,
            fontFamily: "'Cinzel Decorative', serif",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "#a14f1f";
            (e.currentTarget as HTMLElement).style.color = "#d4b896";
            (e.currentTarget as HTMLElement).style.background = "rgba(161,79,31,0.1)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(161,79,31,0.35)";
            (e.currentTarget as HTMLElement).style.color = "#b0a090";
            (e.currentTarget as HTMLElement).style.background = "transparent";
          }}
        >
          {nextLabel}
          {showArrow && (
            <svg
              width="13"
              height="13"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="arrow-pulse"
              style={{ flexShrink: 0 }}
            >
              <path
                d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </Link>
    </div>
  );
}
