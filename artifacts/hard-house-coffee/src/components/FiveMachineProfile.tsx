import { ArticleSection, ArticleList, ArticleGrid, ArticleCard } from "@/components/EditorialArticle";
import type { EverydayMachine } from "@/data/fiveMachineGuide";

export default function FiveMachineProfile({ machine, index }: { machine: EverydayMachine; index: number }) {
  const root = "/images/five-espresso-machines/";
  const stem = machine.image.replace(/\.[^.]+$/, "");
  return (
    <div id={machine.id} style={{ scrollMarginTop: "5rem" }}>
      <ArticleSection title={`${index}. ${machine.name}`} eyebrow={machine.eyebrow}>
        <p style={{ color: "#d4b896", marginBottom: "0.5rem", fontSize: "0.9rem" }}>Model: {machine.model}</p>
        <p style={{ color: "#f2f2f2", fontSize: "1.18rem", fontWeight: 700, marginBottom: "0.4rem" }}>
          Approximate U.S. price: {machine.price}
        </p>
        {machine.salePrice && (
          <p style={{ fontSize: "0.88rem", color: "#d4b896", marginBottom: "0.4rem" }}>
            Advertised sale: {machine.salePrice} · Displayed regular/reference price: {machine.regularPrice}
          </p>
        )}
        <p style={{ fontSize: "0.88rem", marginBottom: "1.4rem" }}>{machine.priceNote}</p>
        <figure style={{ margin: "0 0 1.5rem", background: "#131313", border: "1px solid rgba(161,79,31,0.25)", borderRadius: "8px", overflow: "hidden" }}>
          <picture>
            <source
              type="image/webp"
              srcSet={`${root}${stem}-640.webp 640w, ${root}${stem}.webp ${machine.width}w`}
              sizes="(max-width: 767px) calc(100vw - 48px), 720px"
            />
            <img
              src={`${root}${machine.image}`}
              alt={machine.alt}
              width={machine.width}
              height={machine.height}
              loading="lazy"
              decoding="async"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </picture>
          <figcaption style={{ padding: "0.85rem 1rem", color: "#b0a090", fontSize: "0.8rem", lineHeight: 1.65 }}>{machine.caption}</figcaption>
        </figure>
        <dl style={{ padding: "1rem 1.15rem", background: "#131313", borderLeft: "3px solid #a14f1f", marginBottom: "1.5rem", fontSize: "0.92rem" }}>
          {[
            ["Operation", machine.operation],
            ["Built-in grinder", machine.grinder],
            ["Milk preparation", machine.milk],
          ].map(([label, value]) => <div key={label} style={{ marginBottom: "0.35rem" }}><dt style={{ display: "inline", fontWeight: 700, color: "#f2f2f2" }}>{label}: </dt><dd style={{ display: "inline", margin: 0 }}>{value}</dd></div>)}
        </dl>
        {machine.paragraphs.map((text) => <p key={text.slice(0, 55)} style={{ marginBottom: "1.1rem" }}>{text}</p>)}
        <h3 style={{ color: "#f2f2f2", fontWeight: 700, margin: "1.5rem 0 0.6rem" }}>Useful features</h3>
        <ArticleList items={machine.features} />
        <h3 style={{ color: "#f2f2f2", fontWeight: 700, margin: "1.5rem 0 0.6rem" }}>Colors and finishes</h3>
        <p style={{ marginBottom: "1.5rem" }}>{machine.finishNote}</p>
        <ArticleGrid>
          <ArticleCard title="Practical advantages"><ArticleList items={machine.pros} /></ArticleCard>
          <ArticleCard title="Tradeoffs to consider"><ArticleList items={machine.cons} /></ArticleCard>
        </ArticleGrid>
        <p style={{ margin: "1.3rem 0 0.8rem" }}><strong style={{ color: "#f2f2f2" }}>Best suited to:</strong> {machine.bestFor}.</p>
        <p style={{ marginBottom: "1rem" }}><strong style={{ color: "#f2f2f2" }}>Editorial verdict:</strong> {machine.verdict}</p>
        <p style={{ fontSize: "0.85rem" }}>Research reference: <a href={machine.source} target="_blank" rel="noopener noreferrer" style={{ color: "#d4b896", textDecoration: "underline" }}>{machine.sourceName}</a>.</p>
      </ArticleSection>
    </div>
  );
}
