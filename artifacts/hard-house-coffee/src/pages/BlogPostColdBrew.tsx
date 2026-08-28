import EditorialArticle, {
  ArticleCard,
  ArticleGrid,
  ArticleList,
  ArticleNote,
  ArticleSection,
} from "@/components/EditorialArticle";

export default function BlogPostColdBrew() {
  return (
    <EditorialArticle
      title="Cold Brew Mastery: A Complete Home Guide"
      description="Learn the difference between cold brew concentrate and ready-to-drink coffee, with ratios, steeping times, filtration, storage, dilution, and troubleshooting."
      category="Brewing Guides"
      image="/images/milk-pour.png"
      imageAlt="Cold coffee being poured into a glass"
      canonicalPath="/blog/cold-brew-mastery-a-complete-home-guide"
      readTime="8 min read"
      related={[
        { title: "The Art of the Perfect Pour-Over", slug: "the-art-of-the-perfect-pour-over", image: "/images/pour-over-kettle.jpg", category: "Brewing Guides" },
        { title: "Why Every Coffee Lover Needs a Grinder First", slug: "why-every-coffee-lover-needs-a-grinder-first-2026-guide", image: "/images/coffee-grinder-beans.png", category: "Coffee Culture" },
      ]}
      ctaTitle="Make a batch that fits your week."
      ctaText="Cold brew rewards a simple ratio and a little planning more than expensive equipment."
      ctaLabel="Explore Brewing Guides"
    >
      <ArticleSection title="Cold brew and iced coffee are different">
        <p style={{ marginBottom: "1rem" }}>
          Iced coffee is hot-brewed coffee cooled over ice. Cold brew is coffee extracted by
          steeping grounds in cool or room-temperature water for hours. The methods produce
          different flavors: iced coffee can preserve bright, aromatic notes from hot extraction,
          while cold brew often tastes rounder and less sharp.
        </p>
        <p>
          “Less acidic” is a common description, but it does not mean cold brew is acid-free or
          automatically easier on every stomach. The final strength, dilution, roast, water, and
          serving size still matter.
        </p>
      </ArticleSection>

      <ArticleSection title="Choose your batch style">
        <ArticleGrid>
          <ArticleCard title="Concentrate">
            Start with 1 part coffee to 4 parts water by weight, such as 100 grams of coffee and
            400 grams of water. Dilute the strained concentrate with water or milk when serving.
          </ArticleCard>
          <ArticleCard title="Ready to drink">
            Start with 1 part coffee to 8 parts water, such as 75 grams of coffee and 600 grams
            of water. It can be served over ice without much adjustment.
          </ArticleCard>
          <ArticleCard title="Small trial batch">
            Use 30 grams of coffee with 240 grams of water for a one- or two-serving test. A
            smaller batch helps you adjust without committing a full week’s supply.
          </ArticleCard>
        </ArticleGrid>
        <ArticleNote>
          Ratios are starting points. Weigh both coffee and water, and write down what you used so
          you can repeat or change the result intentionally.
        </ArticleNote>
      </ArticleSection>

      <ArticleSection title="The basic method">
        <ArticleList
          ordered
          items={[
            "Grind the coffee coarse, roughly like coarse sea salt. Fine grounds make filtration harder and can create a muddy or bitter batch.",
            "Add the coffee and water to a clean jar, brewer, or covered container. Stir gently until all grounds are saturated.",
            "Cover and steep for 12 to 18 hours at room temperature or in the refrigerator. Longer is not always stronger in a pleasant way.",
            "Filter slowly through the brewer’s filter, a paper filter, or a fine strainer followed by paper. Do not squeeze the grounds aggressively.",
            "Chill the finished coffee, taste a small serving, and dilute gradually. Keep the rest covered in the refrigerator.",
          ]}
        />
      </ArticleSection>

      <ArticleSection title="Dial in the result">
        <ArticleGrid>
          <ArticleCard title="Too bitter or woody">
            Shorten the steep, use a coarser grind, or reduce agitation. A very dark roast can also
            bring roast bitterness that no ratio fully removes.
          </ArticleCard>
          <ArticleCard title="Too weak">
            Check whether you made concentrate or ready-to-drink coffee. Increase the coffee
            ratio, steep a little longer, or dilute less at serving time.
          </ArticleCard>
          <ArticleCard title="Muddy or gritty">
            Use coarser grounds and a second filtration step. Pour slowly; forcing liquid through
            a filter can carry fine particles into the finished drink.
          </ArticleCard>
          <ArticleCard title="Flat or dull">
            Try fresher beans, cleaner water, or a shorter time at room temperature. Cold storage
            can slow extraction and may need a longer steep.
          </ArticleCard>
        </ArticleGrid>
      </ArticleSection>

      <ArticleSection title="Water, roast, and equipment">
        <p style={{ marginBottom: "1rem" }}>
          Water is the majority of the drink, so heavily chlorinated or very hard water can mask
          the coffee. Use clean, pleasant-tasting water that is appropriate for your brewing
          equipment. A basic jar and filter work; dedicated cold-brew brewers mainly improve
          mess, pouring, and filtration.
        </p>
        <p>
          Medium and dark roasts tend to produce the familiar chocolate and caramel profile many
          people expect from cold brew. Light roasts can work too, especially with a longer steep
          or a slightly finer grind, but they may taste brighter and more tea-like.
        </p>
      </ArticleSection>

      <ArticleSection title="Storage and serving">
        <p style={{ marginBottom: "1rem" }}>
          Store strained coffee in a clean, covered container in the refrigerator. Make a batch
          small enough to finish while it still tastes fresh, and discard it if it develops an
          unpleasant smell, flavor, or visible spoilage. Add ice, milk, water, or a simple syrup
          only when serving so the base remains flexible.
        </p>
        <p>
          For a concentrate, try one part concentrate to one part water or milk, then adjust.
          For a ready-to-drink batch, pour over ice and taste before adding anything else. A
          stronger batch is easier to dilute than a weak batch is to rescue.
        </p>
      </ArticleSection>
    </EditorialArticle>
  );
}