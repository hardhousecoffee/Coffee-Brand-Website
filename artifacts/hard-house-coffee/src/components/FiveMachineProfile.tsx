import { ArticleSection, ArticleList, ArticleGrid, ArticleCard } from "@/components/EditorialArticle";
import type { EverydayMachine } from "@/data/fiveMachineGuide";
import type { FinalMachineProfile } from "@/data/fiveMachineEditorial";

export default function FiveMachineProfile({ machine, editorial }: { machine: EverydayMachine; editorial: FinalMachineProfile }) {
  const root = "/images/five-espresso-machines/";
  const stem = machine.image.replace(/\.[^.]+$/, "");
  return (
    <div id={machine.id} style={{ scrollMarginTop: "5rem" }}>
      <ArticleSection title={editorial.title}>
        <p style={{ color: "#f2f2f2", fontSize: "1.18rem", fontWeight: 700, marginBottom: "0.4rem" }}>
          Approximate U.S. price: {machine.price}
        </p>
        {machine.salePrice && (
          <p style={{ fontSize: "0.88rem", color: "#d4b896", marginBottom: "0.4rem" }}>
            Advertised sale: {machine.salePrice} · Displayed regular/reference price: {machine.regularPrice}
          </p>
        )}
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
              loading={machine.id === "delonghi-em350bk" ? "eager" : "lazy"}
              decoding="async"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </picture>
          <figcaption style={{ padding: "0.85rem 1rem", color: "#b0a090", fontSize: "0.8rem", lineHeight: 1.65 }}>{machine.caption}</figcaption>
        </figure>
        <h3 style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.5rem" }}>{editorial.subtitle}</h3>
        <p style={{ color: "#d4b896", marginBottom: "0.5rem", fontSize: "0.9rem" }}>Model: {machine.model}</p>
        {editorial.paragraphs.map((text) => <p key={text} style={{ marginBottom: "1.1rem" }}>{text}</p>)}
        <ArticleGrid>
          <ArticleCard title="What We Like"><ArticleList items={editorial.likes} /></ArticleCard>
          <ArticleCard title="What Could Be Better"><ArticleList items={editorial.tradeoffs} /></ArticleCard>
        </ArticleGrid>
        <h3 style={{ color: "#f2f2f2", fontWeight: 700, margin: "1.5rem 0 0.6rem" }}>Color and Appearance</h3>
        {editorial.appearance.map((text) => <p key={text} style={{ marginBottom: "1.1rem" }}>{text}</p>)}
        <h3 style={{ color: "#f2f2f2", fontWeight: 700, margin: "1.5rem 0 0.6rem" }}>Who Is It Best For?</h3>
        <p style={{ marginBottom: "1.1rem" }}>{editorial.buyer}</p>
        <h3 style={{ color: "#f2f2f2", fontWeight: 700, margin: "1.5rem 0 0.6rem" }}>Our Verdict</h3>
        {editorial.verdict.map((text) => <p key={text} style={{ marginBottom: "1.1rem" }}>{text}</p>)}
        <p style={{ fontSize: "0.85rem" }}>Research reference: <a href={machine.source} target="_blank" rel="noopener noreferrer" style={{ color: "#d4b896", textDecoration: "underline" }}>{machine.sourceName}</a>.</p>
      </ArticleSection>
    </div>
  );
}
