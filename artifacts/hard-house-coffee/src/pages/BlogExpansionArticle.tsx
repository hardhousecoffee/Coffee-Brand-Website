import { Link, useLocation } from "wouter";
import EditorialArticle, { ArticleSection, ArticleList, ComparisonTable, ArticleNote } from "@/components/EditorialArticle";
import ArticleFigure from "@/components/ArticleFigure";
import { expandedArticles, articleReadTime } from "@/data/articles";

export default function BlogExpansionArticle() {
  const [location] = useLocation();
  const article = expandedArticles.find((entry) => `/blog/${entry.slug}` === location.replace(/\/+$/, ""));
  // Only registered article routes use this component; fail visibly if data drifts.
  if (!article) throw new Error(`Missing researched article data for ${location}`);
  return (
    <EditorialArticle
      title={article.title}
      description={article.description}
      category={article.category}
      image={article.image}
      imageAlt={article.imageAlt}
      canonicalPath={`/blog/${article.slug}`}
      readTime={articleReadTime(article)}
    >
      <p style={{ color: "#d4cfc9", marginBottom: "2rem" }}>{article.intro}</p>
      <ArticleFigure src={article.image} alt={article.imageAlt} caption="Preserved Hard House Coffee image asset. Photograph illustrates the subject; it is not evidence of hands-on testing. Specifications can vary by model revision and region." />
      {article.sections.map((section) => (
        <ArticleSection key={section.heading} title={section.heading}>
          {section.paragraphs.map((paragraph) => <p key={paragraph} style={{ marginBottom: "1rem" }}>{paragraph}</p>)}
          {section.bullets && <ArticleList items={section.bullets} />}
          {section.table && <ComparisonTable {...section.table} />}
          {section.image && <ArticleFigure {...section.image} />}
        </ArticleSection>
      ))}
      <ArticleSection title="Sources and research notes">
        <ArticleNote>
          Research checked October 30, 2026. This is independently written, research-based guidance, not a hands-on test.
          Manufacturer claims are identified as such. Sources may change; availability, regional specifications and support terms should be confirmed for the exact model.
        </ArticleNote>
        <ul style={{ paddingLeft: "1.35rem" }}>
          {article.sources.map((source) => (
            <li key={source.url} style={{ marginBottom: "0.75rem", overflowWrap: "anywhere" }}>
              <a href={source.url} target="_blank" rel="noopener noreferrer" style={{ color: "#d4b896", textDecoration: "underline" }}>{source.label}</a>
            </li>
          ))}
        </ul>
      </ArticleSection>
      <ArticleSection title="Related reading">
        <ul style={{ paddingLeft: "1.35rem" }}>
          {article.links.map((link) => (
            <li key={link.path} style={{ marginBottom: "0.75rem" }}>
              <Link href={link.path} style={{ color: "#d4b896", textDecoration: "underline" }}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </ArticleSection>
    </EditorialArticle>
  );
}
