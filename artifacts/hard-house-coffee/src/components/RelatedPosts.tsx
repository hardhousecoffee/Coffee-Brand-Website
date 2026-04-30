import { Link } from "wouter";

interface RelatedPost {
  title: string;
  slug: string;
  image: string;
  category: string;
}

export default function RelatedPosts({ posts }: { posts: RelatedPost[] }) {
  return (
    <div style={{ marginTop: "3rem", marginBottom: "1rem" }}>
      <h3
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#a14f1f",
          marginBottom: "1.25rem",
        }}
      >
        Related Articles
      </h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div
              style={{
                background: "#131313",
                borderRadius: "8px",
                border: "1px solid rgba(161,79,31,0.2)",
                overflow: "hidden",
                cursor: "pointer",
                transition: "border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(161,79,31,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(161,79,31,0.2)";
              }}
            >
              <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
                <img
                  src={post.image}
                  alt={post.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.65)" }}
                />
              </div>
              <div style={{ padding: "0.85rem" }}>
                <p style={{ fontSize: "0.62rem", color: "#a14f1f", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.35rem" }}>
                  {post.category}
                </p>
                <p style={{ fontSize: "0.82rem", fontWeight: 700, color: "#f2f2f2", lineHeight: 1.4 }}>
                  {post.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
