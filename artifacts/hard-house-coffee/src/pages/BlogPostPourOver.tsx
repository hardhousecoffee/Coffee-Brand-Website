import EditorialArticle, {
  ArticleCard,
  ArticleGrid,
  ArticleList,
  ArticleNote,
  ArticleSection,
} from "@/components/EditorialArticle";

export default function BlogPostPourOver() {
  return (
    <EditorialArticle
      title="The Art of the Perfect Pour-Over"
      description="A repeatable pour-over recipe with practical ratios, temperature, grind, pouring stages, troubleshooting, and roast-specific adjustments."
      category="Brewing Guides"
      image="/images/pour-over-kettle.jpg"
      imageAlt="Gooseneck kettle beside a pour-over dripper"
      canonicalPath="/blog/the-art-of-the-perfect-pour-over"
      readTime="8 min read"
      related={[
        { title: "Cold Brew Mastery: A Complete Home Guide", slug: "cold-brew-mastery-a-complete-home-guide", image: "/images/milk-pour.png", category: "Brewing Guides" },
        { title: "Ethiopia vs. Colombia: A Complete Coffee Origin Guide", slug: "ethiopia-vs-colombia-a-complete-coffee-origin-guide", image: "/images/outdoor-coffee.jpg", category: "Bean Picks" },
      ]}
      ctaTitle="Make the next cup easier to repeat."
      ctaText="A scale and a few notes will teach you more than chasing a complicated recipe."
      ctaLabel="Explore Brewing Guides"
    >
      <ArticleSection title="A dependable starting recipe">
        <p style={{ marginBottom: "1rem" }}>
          Pour-over is not difficult because it has many steps; it is difficult when the dose,
          grind, water, and timing change together. Start with 20 grams of coffee and 300 grams
          of water, a 1:15 ratio. Use a medium-fine grind, water around 93°C / 200°F, and aim for
          a total brew time of roughly 2:45 to 3:30. Those are starting points, not laws.
        </p>
        <p>
          A V60, Kalita Wave, or similar dripper can all make a good cup. The shape and filter
          change the flow, so keep the recipe stable while you learn your particular brewer.
        </p>
      </ArticleSection>

      <ArticleSection title="What you need">
        <ArticleGrid>
          <ArticleCard title="Coffee and grinder">
            Use whole beans when possible. A burr grinder makes it easier to adjust the particle
            size; a blade grinder tends to produce both dust and large fragments.
          </ArticleCard>
          <ArticleCard title="Dripper and filter">
            Rinse the paper filter with hot water to remove papery flavor and warm the brewer.
            Discard the rinse water before adding coffee.
          </ArticleCard>
          <ArticleCard title="Scale and kettle">
            A scale makes dose, water, and timing visible. A gooseneck kettle helps with control,
            but a careful pour from another kettle can still work.
          </ArticleCard>
        </ArticleGrid>
      </ArticleSection>

      <ArticleSection title="The four pouring stages">
        <ArticleList
          ordered
          items={[
            "Add 20 grams of coffee, settle the bed, and make a small well in the center. Start the timer as water first touches the grounds.",
            "Bloom with about 50 to 60 grams of water. Swirl gently so all grounds are wet, then wait 30 to 45 seconds. Fresh coffee may need more time to release gas.",
            "Pour in controlled pulses until you reach 200 grams, keeping the water level steady rather than flooding the filter. Pour in small circles and avoid the paper walls.",
            "Finish to 300 grams, then let the bed drain. A flat bed is a useful visual clue, but taste and repeatability matter more than appearance.",
          ]}
        />
        <ArticleNote>
          The point of staged pouring is even contact, not theatrical movement. If your brewer
          drains very quickly, use a finer grind; if it stalls and tastes dry, use a coarser grind
          or a gentler pour.
        </ArticleNote>
      </ArticleSection>

      <ArticleSection title="Adjust by taste">
        <ArticleGrid>
          <ArticleCard title="Sour, sharp, or thin">
            The cup may be under-extracted. Try a slightly finer grind, hotter water, a longer
            contact time, or a more complete bloom. Change one variable first.
          </ArticleCard>
          <ArticleCard title="Bitter, dry, or hollow">
            The cup may be over-extracted or unevenly extracted. Try a slightly coarser grind,
            cooler water, fewer aggressive pulses, or a more even bed.
          </ArticleCard>
          <ArticleCard title="Weak but clean">
            Increase the coffee dose or move from 1:16 toward 1:15. If the flavor is also dull,
            check bean freshness and grinder consistency before adding more coffee.
          </ArticleCard>
          <ArticleCard title="Clogged and slow">
            Very fine particles, a fine grind, or agitation can slow the filter. Use a coarser
            setting and pour more gently; some coffees naturally produce more fines.
          </ArticleCard>
        </ArticleGrid>
      </ArticleSection>

      <ArticleSection title="Light roast versus dark roast">
        <p style={{ marginBottom: "1rem" }}>
          Light roasts often benefit from hotter water, a finer grind, and enough contact time to
          extract their denser structure. They can show fruit, florals, or acidity when the recipe
          is working, but those flavors should not be confused with sourness.
        </p>
        <p>
          Darker roasts generally extract more readily. Start a little cooler or coarser if the
          cup tastes roasty or dry, and consider a slightly lower ratio if you prefer more body.
          Roast level is only one variable; origin, processing, age, and water chemistry all play
          a role.
        </p>
      </ArticleSection>

      <ArticleSection title="How to improve without buying more gear">
        <p style={{ marginBottom: "1rem" }}>
          Keep a short brew log: coffee, dose, water, grind setting, total time, and one sentence
          about taste. Rinse the filter, use fresh water, and preheat the brewer. If you change
          beans, expect to adjust the grind. If you change the grind, leave the ratio alone until
          you taste the result.
        </p>
        <p>
          A good pour-over is not a performance. It is a small, repeatable system that makes the
          cup easier to understand.
        </p>
      </ArticleSection>
    </EditorialArticle>
  );
}