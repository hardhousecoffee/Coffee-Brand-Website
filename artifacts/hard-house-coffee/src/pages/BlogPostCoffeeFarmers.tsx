import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import RelatedPosts from "@/components/RelatedPosts";
import RecommendedBeans from "@/components/RecommendedBeans";

export default function BlogPostCoffeeFarmers() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Helmet>
        <title>Seed to Sprout – The Secret Lives of Coffee Farmers | Hard House Coffee</title>
        <meta name="description" content="A coffee bean isn't a bean at all — it's a seed inside a fruit. Discover the years of work coffee farmers put in before a single usable crop is harvested." />
        <meta property="og:title" content="Seed to Sprout – The Secret Lives of Coffee Farmers | Hard House Coffee" />
        <meta property="og:description" content="Three to four years of work before a single usable crop. Here's the real story behind your morning cup." />
      </Helmet>
      <Navbar />

      <div className="relative overflow-hidden" style={{ height: "340px", borderBottom: "1px solid rgba(161,79,31,0.2)" }}>
        <img src="/images/coffee-farmer-cherries.jpg" alt="Coffee farmer harvesting coffee cherries" className="w-full h-full object-cover" style={{ filter: "brightness(0.35)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(11,11,11,0.6) 100%)" }}>
          <p className="section-subtitle mb-3">Bean Picks</p>
          <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.2rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#f2f2f2", lineHeight: 1.25, maxWidth: "820px" }}>
            Seed to Sprout – The Secret Lives of Coffee Farmers
          </h1>
          <p style={{ color: "#b0a090", marginTop: "0.75rem", fontSize: "0.85rem" }}>5 min read</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16" style={{ lineHeight: 1.85 }}>
        <AuthorByline />

        <p style={{ color: "#d4cfc9", fontSize: "1.05rem", marginBottom: "1.25rem" }}>
          Have you ever actually stopped to think about what a coffee bean is before it hits your grinder? It's not a bean at all — it's actually the seed inside a bright red fruit called a coffee cherry.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "1.25rem" }}>
          The journey starts in what's called the "Bean Belt," in high-altitude tropical regions around the equator. Farmers have to nurse these fragile shrubs for three to four years before they even harvest a single usable crop. And on steep mountain slopes, almost all the high-end specialty picking is done entirely by hand.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "2.5rem" }}>
          Every single cup of specialty coffee you drink represents years of patient cultivation, careful harvesting, and an intimate knowledge of the land that most of us will never fully appreciate. Understanding where coffee comes from changes how you experience it.
        </p>

        <div className="divider-orange" style={{ marginBottom: "2.5rem" }} />

        <Section title="The Coffee Cherry Journey">
          {[
            { label: "Years 1–3: Cultivation", detail: "Young coffee plants require careful management of shade, water, and nutrients. No commercial harvest is possible until the plant matures." },
            { label: "Year 3–4: First Harvest", detail: "Coffee cherries ripen at different rates on the same branch. Selective hand-picking ensures only the ripest red cherries are collected." },
            { label: "Processing Begins", detail: "Once picked, the fruit must be processed within hours. This is where washed, natural, and honey processing methods come in — each dramatically shaping the final flavor." },
          ].map(({ label, detail }) => (
            <div key={label} style={{ marginBottom: "1.5rem" }}>
              <p style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.35rem" }}>{label}</p>
              <p style={{ color: "#b0a090" }}>{detail}</p>
            </div>
          ))}
        </Section>

        <Section title="What's the difference between Arabica and Robusta coffee beans?">
          <p style={{ marginBottom: "1rem" }}>
            Arabica beans are grown at higher altitudes, offering a sweeter, more complex flavor profile with notes of fruit and sugar, while Robusta beans grow at lower elevations, possess double the caffeine content, and have a more bitter, rubbery flavor with a thicker crema.
          </p>
          <p>
            Because specialty coffee farms put immense care into cultivating fragile Arabica shrubs on steep mountain slopes, the resulting flavors are night and day compared to cheap mass-produced commercial options.
          </p>
        </Section>

<RecommendedBeans variant="origins" />
        <RelatedPosts posts={[
          { title: "The Magic of Processing – How Washing and Drying Shapes Flavor", slug: "the-magic-of-processing-washing-and-drying-shapes-flavor", image: "/images/coffee-natural-processing.jpg", category: "Bean Picks" },
          { title: "Ethiopia vs. Colombia: A Complete Coffee Origin Guide", slug: "ethiopia-vs-colombia-a-complete-coffee-origin-guide", image: "/images/outdoor-coffee.jpg", category: "Bean Picks" },
        ]} />

        <div className="mt-12 p-6 text-center" style={{ background: "#131313", borderRadius: "8px", border: "1px solid rgba(161,79,31,0.25)" }}>
          <p style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "1rem", color: "#f2f2f2", marginBottom: "0.5rem" }}>Taste the difference quality makes.</p>
          <p style={{ color: "#b0a090", fontSize: "0.85rem", marginBottom: "1.25rem" }}>Browse our single-origin bean picks and specialty selections.</p>
          <Link href="/products"><button className="btn-primary">Shop Products</button></Link>
        </div>

        <div className="mt-10 text-center">
          <Link href="/blog"><button className="btn-secondary" style={{ fontSize: "0.82rem" }}><span className="arrow-pulse">←</span> Back to Blog</button></Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1rem, 2.5vw, 1.3rem)", fontWeight: 700, color: "#f2f2f2", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(161,79,31,0.2)" }}>{title}</h2>
      <div style={{ color: "#b0a090", fontSize: "0.95rem" }}>{children}</div>
    </div>
  );
}
