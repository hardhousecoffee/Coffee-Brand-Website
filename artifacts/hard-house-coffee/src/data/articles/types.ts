export interface ArticleImage {
  src: string;
  alt: string;
  caption: string;
}

export interface ResearchedArticle {
  slug: string;
  title: string;
  description: string;
  category: "Espresso Machines" | "Gear Reviews" | "Brewing Guides" | "Bean Picks" | "Coffee Culture";
  image: string;
  imageAlt: string;
  purpose: string;
  intro: string;
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
    table?: { headers: string[]; rows: string[][] };
    image?: ArticleImage;
  }[];
  sources: { label: string; url: string }[];
  links: { label: string; path: string }[];
}
