import { machineArticles } from "./machines";
import { equipmentArticles } from "./equipment";
import { techniqueArticles } from "./technique";
import { coffeeArticles } from "./coffee";

export const expandedArticles = [
  ...machineArticles, ...equipmentArticles, ...techniqueArticles, ...coffeeArticles,
];

export function articleReadTime(article: (typeof expandedArticles)[number]) {
  const words = [
    article.intro,
    ...article.sections.flatMap((section) => [
      ...section.paragraphs, ...(section.bullets ?? []),
      ...(section.table?.rows.flat() ?? []),
    ]),
  ].join(" ").split(/\s+/).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
}
