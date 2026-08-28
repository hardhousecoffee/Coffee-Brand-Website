import EditorialArticle, {
  ArticleCard,
  ArticleGrid,
  ArticleList,
  ArticleNote,
  ArticleSection,
  ComparisonTable,
} from "@/components/EditorialArticle";

export default function BlogPostCoffeeOrigins() {
  return (
    <EditorialArticle
      title="Ethiopia vs. Colombia: A Complete Coffee Origin Guide"
      description="Compare representative Ethiopian and Colombian coffees by region, varietal, processing, roast, flavor tendency, freshness, and brewing method."
      category="Bean Picks"
      image="/images/outdoor-coffee.jpg"
      imageAlt="Coffee served outdoors"
      canonicalPath="/blog/ethiopia-vs-colombia-a-complete-coffee-origin-guide"
      readTime="8 min read"
      related={[
        { title: "Top 5 Dark Roast Beans for Espresso in 2026", slug: "top-5-dark-roast-beans-for-espresso-in-2026", image: "/images/coffee-cheers.jpg", category: "Bean Picks" },
        { title: "The Art of the Perfect Pour-Over", slug: "the-art-of-the-perfect-pour-over", image: "/images/pour-over-kettle.jpg", category: "Brewing Guides" },
      ]}
      ctaTitle="Taste the differences without turning them into stereotypes."
      ctaText="Origin is a useful clue, but processing, roast, freshness, and recipe finish the picture."
      ctaLabel="Explore Bean Guides"
    >
      <ArticleSection title="Country is the beginning, not the whole profile">
        <p style={{ marginBottom: "1rem" }}>
          Ethiopia and Colombia are both major coffee-producing origins, but neither is one flavor.
          Coffee varies by region, altitude, cultivar, harvest, processing method, roast, and
          preparation. A washed coffee from one area can taste very different from a natural
          coffee from another area in the same country.
        </p>
        <p>
          The comparison below uses representative tendencies to help you read a bag and choose a
          brewing direction. It should not be used to predict every coffee from either country.
        </p>
      </ArticleSection>

      <ArticleSection title="Representative differences">
        <ComparisonTable
          headers={["Factor", "Ethiopia", "Colombia", "Why it matters"]}
          rows={[
            ["Common cup tendency", "Floral, citrus, stone fruit, tea-like or wine-like", "Cocoa, caramel, red fruit, balanced sweetness", "These are tendencies, not guarantees"],
            ["Regional range", "Yirgacheffe, Sidama, Guji and many other producing areas", "Huila, Nariño, Antioquia and many other producing areas", "Region narrows the story beyond country"],
            ["Processing examples", "Washed and natural are both common", "Washed, natural and honey-style lots all exist", "Processing can outweigh origin shorthand"],
            ["Brewing fit", "Often rewarding in pour-over and other clarity-focused methods", "Flexible in filter, espresso, and milk drinks", "Roast and density still determine the recipe"],
            ["Buying clue", "Look for region, process, and roast date", "Look for region, process, and roast date", "A specific lot is more useful than a flag on a bag"],
          ]}
        />
      </ArticleSection>

      <ArticleSection title="Ethiopia: what to look for">
        <ArticleGrid>
          <ArticleCard title="Washed lots">
            Washed Ethiopian coffees are often described with citrus, floral, or tea-like language.
            A lighter roast and careful pour-over can preserve those high notes, though water and
            extraction still decide whether they taste lively or sour.
          </ArticleCard>
          <ArticleCard title="Natural lots">
            Drying the coffee fruit with the seed inside can bring more fruit-forward, jammy, or
            wine-like notes. Fermentation and drying choices vary, so “natural” is not a promise
            of one exact flavor.
          </ArticleCard>
        </ArticleGrid>
      </ArticleSection>

      <ArticleSection title="Colombia: what to look for">
        <ArticleGrid>
          <ArticleCard title="Regional range">
            Colombia’s mountainous growing areas create many microclimates. A Huila coffee and a
            Nariño coffee can share a country label while offering different acidity, body, and
            fruit character.
          </ArticleCard>
          <ArticleCard title="Everyday flexibility">
            Balanced Colombian coffees often work across pour-over, batch brew, espresso, and
            milk drinks. A darker roast can emphasize chocolate and body; a lighter roast can
            reveal more fruit and acidity.
          </ArticleCard>
        </ArticleGrid>
        <ArticleNote>
          Altitude is informative but not a quality score. Cultivar, harvest conditions, sorting,
          processing, roasting, storage, and brewing all affect the final cup.
        </ArticleNote>
      </ArticleSection>

      <ArticleSection title="A simple tasting framework">
        <ArticleList
          ordered
          items={[
            "Taste both coffees with the same water, dose, brewer, and ratio so the comparison is fair.",
            "Notice aroma before cooling. Write down whether it reminds you of citrus, flowers, cocoa, stone fruit, nuts, or something else.",
            "Compare acidity, sweetness, body, and finish separately. Acidity can be bright and pleasant or sharp and under-extracted.",
            "Let the cup cool. Some coffees become clearer as they lose heat, while roast bitterness can become more obvious.",
            "Change the brew only after you have identified the difference. A finer grind can increase extraction; it cannot change the origin.",
          ]}
        />
      </ArticleSection>

      <ArticleSection title="How roast and brewing change the answer">
        <p style={{ marginBottom: "1rem" }}>
          A dark roast can make an Ethiopian coffee taste more roast-driven and can make a
          Colombian coffee taste heavier and more chocolate-forward. A light roast can expose
          acidity and fruit but may need hotter water, a finer grind, and a longer extraction.
        </p>
        <p>
          For a first comparison, choose similarly fresh bags with clearly stated region and
          process. Brew them with the same recipe, then make small changes. The most useful answer
          to “Ethiopia or Colombia?” is the one you can describe in your own cup.
        </p>
      </ArticleSection>
    </EditorialArticle>
  );
}