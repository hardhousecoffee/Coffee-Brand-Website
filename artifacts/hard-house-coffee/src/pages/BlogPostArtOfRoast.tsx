import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import RelatedPosts from "@/components/RelatedPosts";
import RecommendedBeans from "@/components/RecommendedBeans";

export default function BlogPostArtOfRoast() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Helmet>
        <title>The Art of the Roast – Finding the Perfect Profile in the Drum | Hard House Coffee</title>
        <meta name="description" content="Roasting coffee is part science, part instinct. From first crack to the perfect profile — here's what happens inside the drum that determines how your coffee tastes." />
        <meta property="og:title" content="The Art of the Roast – Finding the Perfect Profile | Hard House Coffee" />
        <meta property="og:description" content="A few seconds too long can ruin an entire batch. Here's the tightrope walk of coffee roasting." />
      </Helmet>
      <Navbar />

      <div className="relative overflow-hidden" style={{ height: "340px", borderBottom: "1px solid rgba(161,79,31,0.2)" }}>
        <img src="/images/coffee-drum-roaster.jpg" alt="Coffee drum roaster professional roasting" className="w-full h-full object-cover" style={{ filter: "brightness(0.35)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(11,11,11,0.6) 100%)" }}>
          <p className="section-subtitle mb-3">Bean Picks</p>
          <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.2rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#f2f2f2", lineHeight: 1.25, maxWidth: "820px" }}>
            The Art of the Roast – Finding the Perfect Profile in the Drum
          </h1>
          <p style={{ color: "#b0a090", marginTop: "0.75rem", fontSize: "0.85rem" }}>5 min read</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16" style={{ lineHeight: 1.85 }}>
        <AuthorByline />

        <p style={{ color: "#d4cfc9", fontSize: "1.05rem", marginBottom: "1.25rem" }}>
          Roasting coffee is this incredible mix of pure science and artistic instinct. You start with these hard, green, grassy-smelling seeds, toss them into a massive rotating drum heated to hundreds of degrees, and then you watch and listen.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "1.25rem" }}>
          A master roaster is looking for very specific milestones, like "first crack" — which sounds exactly like popping corn and signals that the bean is expanding and releasing moisture. If you stop the roast early, you preserve those delicate, bright, floral notes of a light roast. Let it go a bit longer, and you unlock those deep, smoky, chocolatey, caramelized flavors.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "2.5rem" }}>
          A few seconds too long can completely ruin an entire batch. It's a total tightrope walk — and that's exactly what makes exceptional roasters so rare.
        </p>

        <div className="divider-orange" style={{ marginBottom: "2.5rem" }} />

        <Section title="The Roast Spectrum">
          {[
            { label: "Light Roast", detail: "Stopped shortly after first crack. Preserves the most origin character — delicate florals, fruit, and high acidity. Green tea, jasmine, berry notes are common." },
            { label: "Medium Roast", detail: "The balance point. Sweetness, body, and origin character are all present. Caramel, nuts, and mild chocolate notes dominate." },
            { label: "Dark Roast", detail: "Pushed past second crack. Bold, smoky, and full-bodied. The roast itself becomes the dominant flavor over the origin character." },
          ].map(({ label, detail }) => (
            <div key={label} style={{ marginBottom: "1.5rem" }}>
              <p style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.35rem" }}>{label}</p>
              <p style={{ color: "#b0a090" }}>{detail}</p>
            </div>
          ))}
        </Section>

        <Section title="What is the ideal water temperature for brewing coffee?">
          <p style={{ marginBottom: "1rem" }}>
            The ideal water temperature for brewing coffee is between 195°F and 205°F. Using boiling water (above 212°F) can scorch the delicate oils in the grounds, leading to a bitter taste, while water below 195°F will under-extract the coffee, making it taste sour and weak.
          </p>
          <p>
            When roasting masters work tirelessly to dial in light or dark roast profiles, using the correct water temperature ensures you actually unlock those sweet, caramelized chocolate or floral notes instead of destroying them in the brewer.
          </p>
        </Section>

<RecommendedBeans variant="roasting" />
        <RelatedPosts posts={[
          { title: "The Magic of Processing – How Washing and Drying Shapes Flavor", slug: "the-magic-of-processing-washing-and-drying-shapes-flavor", image: "/images/coffee-natural-processing.jpg", category: "Bean Picks" },
          { title: "Top 5 Dark Roast Beans for Espresso in 2026", slug: "top-5-dark-roast-beans-for-espresso-in-2026", image: "/images/coffee-cheers.jpg", category: "Bean Picks" },
        ]} />

        <div className="mt-12 p-6 text-center" style={{ background: "#131313", borderRadius: "8px", border: "1px solid rgba(161,79,31,0.25)" }}>
          <p style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "1rem", color: "#f2f2f2", marginBottom: "0.5rem" }}>Find your perfect roast level.</p>
          <p style={{ color: "#b0a090", fontSize: "0.85rem", marginBottom: "1.25rem" }}>Browse our curated bean picks from light to dark.</p>
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
