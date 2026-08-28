import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import RelatedPosts from "@/components/RelatedPosts";

export interface EditorialRelatedPost {
  title: string;
  slug: string;
  image: string;
  category: string;
}

interface EditorialArticleProps {
  title: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  canonicalPath: string;
  readTime: string;
  children: ReactNode;
  related?: EditorialRelatedPost[];
  ctaTitle?: string;
  ctaText?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function ArticleSection({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <section style={{ marginBottom: "3.25rem" }}>
      {eyebrow && (
        <p
          style={{
            color: "#a14f1f",
            fontSize: "0.68rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            fontWeight: 700,
            marginBottom: "0.55rem",
          }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
          fontWeight: 700,
          color: "#f2f2f2",
          lineHeight: 1.3,
          marginBottom: "1.1rem",
          paddingBottom: "0.65rem",
          borderBottom: "1px solid rgba(161,79,31,0.25)",
        }}
      >
        {title}
      </h2>
      <div style={{ color: "#b0a090", fontSize: "1.03rem", lineHeight: 1.85 }}>
        {children}
      </div>
    </section>
  );
}

export function ArticleCard({
  title,
  children,
  tone = "default",
}: {
  title: string;
  children: ReactNode;
  tone?: "default" | "accent";
}) {
  return (
    <div
      style={{
        background: tone === "accent" ? "rgba(139,47,47,0.16)" : "#131313",
        border: "1px solid rgba(161,79,31,0.25)",
        borderRadius: "8px",
        padding: "1.15rem 1.2rem",
        height: "100%",
      }}
    >
      <h3
        style={{
          color: "#f2f2f2",
          fontSize: "0.9rem",
          lineHeight: 1.45,
          marginBottom: "0.55rem",
        }}
      >
        {title}
      </h3>
      <div style={{ color: "#b0a090", fontSize: "0.9rem", lineHeight: 1.7 }}>
        {children}
      </div>
    </div>
  );
}

export function ArticleGrid({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(205px, 1fr))",
        gap: "0.9rem",
        margin: "1.25rem 0",
      }}
    >
      {children}
    </div>
  );
}

export function ArticleList({
  items,
  ordered = false,
}: {
  items: string[];
  ordered?: boolean;
}) {
  const List = ordered ? "ol" : "ul";
  return (
    <List
      style={{
        margin: "1rem 0",
        paddingLeft: "1.35rem",
        color: "#d4cfc9",
      }}
    >
      {items.map((item) => (
        <li key={item} style={{ marginBottom: "0.65rem", paddingLeft: "0.25rem" }}>
          {item}
        </li>
      ))}
    </List>
  );
}

export function ComparisonTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div style={{ overflowX: "auto", margin: "1.25rem 0 1.5rem" }}>
      <table
        style={{
          width: "100%",
          minWidth: "560px",
          borderCollapse: "collapse",
          fontSize: "0.86rem",
          lineHeight: 1.55,
        }}
      >
        <thead>
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                scope="col"
                style={{
                  color: "#f2f2f2",
                  background: "#21150e",
                  textAlign: "left",
                  padding: "0.75rem",
                  borderBottom: "1px solid rgba(161,79,31,0.45)",
                  fontWeight: 700,
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${row[0]}-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td
                  key={`${row[0]}-${cellIndex}`}
                  style={{
                    color: cellIndex === 0 ? "#f2f2f2" : "#b0a090",
                    padding: "0.75rem",
                    verticalAlign: "top",
                    borderBottom: "1px solid rgba(161,79,31,0.14)",
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ArticleNote({ children }: { children: ReactNode }) {
  return (
    <aside
      style={{
        borderLeft: "3px solid #a14f1f",
        background: "rgba(161,79,31,0.1)",
        padding: "1rem 1.15rem",
        margin: "1.25rem 0 2rem",
        color: "#d4cfc9",
        fontSize: "0.93rem",
        lineHeight: 1.75,
      }}
    >
      {children}
    </aside>
  );
}

export default function EditorialArticle({
  title,
  description,
  category,
  image,
  imageAlt,
  canonicalPath,
  readTime,
  children,
  related = [],
  ctaTitle = "Keep exploring the cup.",
  ctaText = "Read more practical coffee guidance from Hard House Coffee.",
  ctaLabel = "Explore the Journal",
  ctaHref = "/blog",
}: EditorialArticleProps) {
  const canonical = `https://hardhousecoffee.com${canonicalPath}`;
  const articleSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: canonical,
    image: `https://hardhousecoffee.com${image}`,
    articleSection: category,
    publisher: {
      "@type": "Organization",
      name: "Hard House Coffee",
      url: "https://hardhousecoffee.com",
    },
  });

  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Helmet>
        <title>{`${title} | Hard House Coffee`}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${title} | Hard House Coffee`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <script type="application/ld+json">{articleSchema}</script>
      <Navbar />

      <header
        className="relative overflow-hidden"
        style={{ height: "340px", borderBottom: "1px solid rgba(161,79,31,0.2)" }}
      >
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.35)" }}
        />
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(11,11,11,0.7) 100%)" }}
        >
          <p className="section-subtitle mb-3">{category}</p>
          <h1
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(1.25rem, 3.5vw, 2.4rem)",
              fontWeight: 700,
              color: "#f2f2f2",
              lineHeight: 1.25,
              maxWidth: "850px",
            }}
          >
            {title}
          </h1>
          <p style={{ color: "#b0a090", marginTop: "0.75rem", fontSize: "0.82rem" }}>
            {readTime}
          </p>
        </div>
      </header>

      <main
        className="max-w-3xl mx-auto px-6 py-16"
        style={{ lineHeight: 1.85, fontSize: "1.03rem" }}
      >
        <AuthorByline />
        <p
          style={{
            color: "#8f7d6e",
            fontSize: "0.78rem",
            lineHeight: 1.65,
            marginBottom: "2.5rem",
          }}
        >
          Editorial note: Hard House Coffee separates researched guidance from hands-on testing.
          Product links may be affiliate links at no additional cost to you. See our{" "}
          <Link href="/about#methodology" style={{ color: "#d4b896" }}>
            research and recommendation methodology
          </Link>{" "}
          and <Link href="/disclaimer" style={{ color: "#d4b896" }}>disclosure</Link>.
        </p>
        {children}

        {related.length > 0 && <RelatedPosts posts={related} />}

        <div
          style={{
            marginTop: "3.5rem",
            padding: "2rem 1.5rem",
            textAlign: "center",
            background: "#131313",
            borderRadius: "8px",
            border: "1px solid rgba(161,79,31,0.28)",
          }}
        >
          <h2 style={{ color: "#f2f2f2", fontSize: "1.2rem", marginBottom: "0.6rem" }}>
            {ctaTitle}
          </h2>
          <p style={{ color: "#b0a090", fontSize: "0.88rem", marginBottom: "1.25rem" }}>
            {ctaText}
          </p>
          <Link href={ctaHref}>
            <button className="btn-primary">{ctaLabel}</button>
          </Link>
        </div>

        <div className="mt-10 text-center">
          <Link href="/blog">
            <button
              className="btn-secondary"
              style={{ fontSize: "0.78rem" }}
              aria-label="Back to the Hard House Coffee blog"
            >
              <span className="arrow-pulse">←</span> Back to Blog
            </button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}