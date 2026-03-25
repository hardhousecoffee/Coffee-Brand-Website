import { useLocation } from "wouter";

interface PageNavProps {
  nextPath: string;
  nextLabel: string;
}

export default function PageNav({ nextPath, nextLabel }: PageNavProps) {
  const [, setLocation] = useLocation();

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
      <button
        onClick={() => setLocation(nextPath)}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "0.75rem",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "#b0a090",
          padding: 0,
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.color = "#f2f2f2";
          const arrow = (e.currentTarget as HTMLButtonElement).querySelector(".page-nav-arrow") as HTMLElement;
          if (arrow) arrow.style.transform = "translateX(6px)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.color = "#b0a090";
          const arrow = (e.currentTarget as HTMLButtonElement).querySelector(".page-nav-arrow") as HTMLElement;
          if (arrow) arrow.style.transform = "translateX(0)";
        }}
      >
        <span
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          {nextLabel}
        </span>
        <svg
          className="page-nav-arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transition: "transform 0.3s ease" }}
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </button>
    </div>
  );
}
