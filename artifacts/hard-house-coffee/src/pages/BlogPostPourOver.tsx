import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import RelatedPosts from "@/components/RelatedPosts";
import RecommendedBeans from "@/components/RecommendedBeans";

export default function BlogPostPourOver() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Helmet>
        <title>The Art of the Perfect Pour-Over | Hard House Coffee</title>
        <meta name="description" content="Master the pour-over brewing technique with our step-by-step guide. Unlock nuanced flavors from single-origin beans and elevate your home brew." />
        <meta property="og:title" content="The Art of the Perfect Pour-Over | Hard House Coffee" />
        <meta property="og:description" content="Step-by-step guide to the perfect pour-over brewing technique at home." />
      </Helmet>
      <Navbar />

      {/* Hero banner */}
      <div
        className="relative overflow-hidden"
        style={{ height: "340px", borderBottom: "1px solid rgba(161,79,31,0.2)" }}
      >
        <img
          src="/images/pour-over-kettle.jpg"
          alt="The Art of the Perfect Pour-Over"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.35)" }}
        />
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(11,11,11,0.6) 100%)" }}
        >
          <p className="section-subtitle mb-3">Brewing Guides</p>
          <h1
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(1.2rem, 3.5vw, 2.4rem)",
              fontWeight: 700,
              color: "#f2f2f2",
              lineHeight: 1.25,
              maxWidth: "820px",
            }}
          >
            The Art of the Perfect Pour-Over
          </h1>
          <p style={{ color: "#b0a090", marginTop: "0.75rem", fontSize: "0.85rem" }}>
            6 min read
          </p>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-2xl mx-auto px-6 py-16" style={{ lineHeight: 1.85 }}>
        <AuthorByline />

        {/* Intro */}
        <p style={{ color: "#d4cfc9", fontSize: "1.05rem", marginBottom: "1.25rem" }}>
          If you've ever had a really good pour-over coffee, you know it hits differently. It's
          cleaner, smoother, and you can actually taste the details in the coffee — not just
          bitterness or strength.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "1.25rem" }}>
          But here's the thing. Most people assume pour-over is complicated, when in reality,
          it's just about slowing things down and paying attention to a few key details.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "2rem" }}>
          Before we get into the steps, here's a quick visual guide so you can see what the
          process actually looks like:
        </p>

        {/* YouTube embed — responsive, no autoplay */}
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            borderRadius: "8px",
            marginBottom: "2rem",
            border: "1px solid rgba(161,79,31,0.2)",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/AI4ynXzkSQo"
            title="How to Make Pour Over Coffee"
            frameBorder="0"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </div>

        <p style={{ color: "#b0a090", marginBottom: "2.5rem" }}>
          Now that you've seen it, let's break it down in a way that actually makes sense.
        </p>

        <div className="divider-orange" style={{ marginBottom: "2.5rem" }} />

        {/* What You Need */}
        <Section title="What You Need to Get Started">
          <p style={{ marginBottom: "1rem" }}>
            You don't need anything crazy to make a solid pour-over at home. Just a few essentials:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1rem 0" }}>
            {[
              "Fresh coffee beans",
              "A grinder (preferably burr grinder)",
              "Pour-over dripper (like a V60 or similar)",
              "Paper filter",
              "Kettle (gooseneck helps, but not required)",
              "Scale (optional, but recommended)",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                  marginBottom: "0.75rem",
                  color: "#d4cfc9",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#a14f1f",
                    marginTop: "0.58rem",
                    flexShrink: 0,
                  }}
                />
                {item}
              </li>
            ))}
          </ul>
          <p>That's it. Simple setup, but it makes a big difference.</p>
        </Section>

        {/* Why Pour-Over Tastes Better */}
        <Section title="Why Pour-Over Coffee Tastes Better">
          <p style={{ marginBottom: "1rem" }}>
            The reason pour-over stands out is control.
          </p>
          <p style={{ marginBottom: "0.5rem" }}>You control:</p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1rem 0" }}>
            {[
              "the water temperature",
              "the speed of the pour",
              "the saturation of the grounds",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                  marginBottom: "0.6rem",
                  color: "#d4cfc9",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#a14f1f",
                    marginTop: "0.58rem",
                    flexShrink: 0,
                  }}
                />
                {item}
              </li>
            ))}
          </ul>
          <p style={{ marginBottom: "1rem" }}>
            That control lets you extract more balanced flavors from the coffee. Instead of
            everything hitting at once, you're gradually building the flavor.
          </p>
          <p>That's why pour-over tends to taste cleaner and more refined.</p>
        </Section>

        {/* Step by Step */}
        <Section title="Step-by-Step: How to Make a Proper Pour-Over">
          <p style={{ marginBottom: "1rem" }}>
            Start with freshly ground coffee — medium-coarse, similar to sea salt.
          </p>
          {[
            {
              step: "1. Place your filter and rinse it with hot water",
              detail: "This removes any paper taste and warms everything up.",
            },
            {
              step: "2. Add your coffee grounds",
              detail: "Usually about 1:15 ratio (1 gram coffee to 15 grams water).",
            },
            {
              step: "3. Bloom the coffee",
              detail:
                "Pour a small amount of hot water (just enough to soak the grounds) and let it sit for about 30–45 seconds. This releases trapped gases and prepares the coffee for extraction.",
            },
            {
              step: "4. Continue pouring slowly",
              detail: "Use a steady circular motion. Don't rush it. You want an even extraction.",
            },
            {
              step: "5. Let it drip",
              detail: "Once you've poured all your water, let it fully drain. No rushing here.",
            },
          ].map(({ step, detail }) => (
            <div key={step} style={{ marginBottom: "1.25rem" }}>
              <p style={{ color: "#f2f2f2", fontWeight: 600, marginBottom: "0.25rem" }}>{step}</p>
              <p style={{ color: "#b0a090" }}>{detail}</p>
            </div>
          ))}
          <p>And that's it.</p>
        </Section>

        {/* Common Mistakes */}
        <Section title="Common Mistakes to Avoid">
          <p style={{ marginBottom: "1rem" }}>
            A few things that can throw everything off:
          </p>
          {[
            {
              mistake: "Using water that's too hot",
              detail: "This can make the coffee taste bitter.",
            },
            {
              mistake: "Pouring too fast",
              detail: "You lose control of extraction.",
            },
            {
              mistake: "Using stale beans",
              detail: "Even perfect technique won't fix bad coffee.",
            },
            {
              mistake: "Skipping the bloom",
              detail: "This step matters more than people think.",
            },
          ].map(({ mistake, detail }) => (
            <div key={mistake} style={{ marginBottom: "1.25rem" }}>
              <p style={{ color: "#f2f2f2", fontWeight: 600, marginBottom: "0.25rem" }}>{mistake}</p>
              <p style={{ color: "#b0a090" }}>{detail}</p>
            </div>
          ))}
        </Section>

        {/* Final Thoughts */}
        <Section title="Final Thoughts">
          <p style={{ marginBottom: "1rem" }}>
            Pour-over coffee isn't about being complicated — it's about being intentional.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            Once you get the basics down, it becomes second nature. And the difference in flavor
            is worth it.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            It's one of those things where the more you do it, the more you appreciate it.
          </p>
          <p>And honestly, that's what makes it enjoyable.</p>
        </Section>

<RecommendedBeans variant="brewing" />
        <RelatedPosts posts={[
          { title: "Cold Brew Mastery: A Complete Home Guide", slug: "cold-brew-mastery-a-complete-home-guide", image: "/images/milk-pour.png", category: "Brewing Guides" },
          { title: "Ethiopia vs. Colombia: A Complete Coffee Origin Guide", slug: "ethiopia-vs-colombia-a-complete-coffee-origin-guide", image: "/images/outdoor-coffee.jpg", category: "Bean Picks" },
        ]} />

        {/* CTA */}
        <div
          className="mt-12 p-6 text-center"
          style={{
            background: "#131313",
            borderRadius: "8px",
            border: "1px solid rgba(161,79,31,0.25)",
          }}
        >
          <p
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "1rem",
              color: "#f2f2f2",
              marginBottom: "0.5rem",
            }}
          >
            Ready to complete your setup?
          </p>
          <p style={{ color: "#b0a090", fontSize: "0.85rem", marginBottom: "1.25rem" }}>
            Explore recommended gear and accessories on the site.
          </p>
          <Link href="/products">
            <button className="btn-primary">Shop</button>
          </Link>
        </div>

        {/* Back link */}
        <div className="mt-10 text-center">
          <Link href="/blog">
            <button className="btn-secondary" style={{ fontSize: "0.82rem" }}>
              <span className="arrow-pulse">←</span> Back to Blog
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h2
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
          fontWeight: 700,
          color: "#f2f2f2",
          marginBottom: "1rem",
          paddingBottom: "0.5rem",
          borderBottom: "1px solid rgba(161,79,31,0.2)",
        }}
      >
        {title}
      </h2>
      <div style={{ color: "#b0a090", fontSize: "0.95rem" }}>
        {children}
      </div>
    </div>
  );
}
