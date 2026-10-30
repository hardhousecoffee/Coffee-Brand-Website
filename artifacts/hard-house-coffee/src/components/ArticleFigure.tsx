import type { ArticleImage } from "@/data/articles/types";

export default function ArticleFigure({ src, alt, caption }: ArticleImage) {
  return (
    <figure style={{ margin: "1.5rem 0 2rem" }}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        style={{ display: "block", width: "100%", height: "auto", maxHeight: "420px", objectFit: "contain", borderRadius: "8px", background: "#171717" }}
      />
      <figcaption style={{ color: "#8f7d6e", fontSize: "0.78rem", lineHeight: 1.65, marginTop: "0.65rem" }}>
        {caption}
      </figcaption>
    </figure>
  );
}
