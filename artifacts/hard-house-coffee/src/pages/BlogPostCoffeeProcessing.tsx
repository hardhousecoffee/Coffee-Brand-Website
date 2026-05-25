import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import RelatedPosts from "@/components/RelatedPosts";

export default function BlogPostCoffeeProcessing() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Helmet>
        <title>The Magic of Processing – How Washing and Drying Shapes Flavor | Hard House Coffee</title>
        <meta name="description" content="Washed vs natural processing — how a simple post-harvest choice completely changes the flavors in your cup." />
        <meta property="og:title" content="How Washing and Drying Shapes Coffee Flavor | Hard House Coffee" />
        <meta property="og:description" content="The way a coffee is processed after harvest completely changes how it tastes. Here's what that means for your cup." />
      </Helmet>
      <Navbar />

      <div className="relative overflow-hidden" style={{ height: "340px", borderBottom: "1px solid rgba(161,79,31,0.2)" }}>
        <img src="/images/coffee-natural-processing.jpg" alt="Coffee natural processing drying on raised beds" className="w-full h-full object-cover" style={{ filter: "brightness(0.35)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(11,11,11,0.6) 100%)" }}>
          <p className="section-subtitle mb-3">Bean Picks</p>
          <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.2rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#f2f2f2", lineHeight: 1.25, maxWidth: "820px" }}>
            The Magic of Processing – How Washing and Drying Shapes Flavor
          </h1>
          <p style={{ color: "#b0a090", marginTop: "0.75rem", fontSize: "0.85rem" }}>5 min read</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16" style={{ lineHeight: 1.85 }}>
        <AuthorByline />

        <p style={{ color: "#d4cfc9", fontSize: "1.05rem", marginBottom: "1.25rem" }}>
          Here's a fun piece of trivia for the next time you're hanging out at a café: the way a coffee bean is cleaned after harvest completely changes how it tastes in your cup.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "1.25rem" }}>
          There are two main methods. You've got "washed" coffees, where the fruit pulp is stripped away with water before drying, leaving you with a super clean, bright, and crisp cup. Then you have "natural" processing — where the whole cherry is left out to dry in the sun with the seeds still inside. The beans basically soak up all those natural sugars from the fruit, resulting in these crazy, wild, fruit-forward flavors that can taste exactly like blueberries or strawberries.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "2.5rem" }}>
          It's amazing how a simple processing choice creates two completely different drinking experiences from the exact same origin.
        </p>

        <div className="divider-orange" style={{ marginBottom: "2.5rem" }} />

        <Section title="The Three Main Processing Methods">
          {[
            { label: "Washed (Wet Process)", detail: "Fruit pulp is removed before drying. Result: clean, bright, and acidic with clarity of flavor. Origin characteristics shine through." },
            { label: "Natural (Dry Process)", detail: "The whole cherry dries in the sun for weeks. Result: heavy, fruity, wine-like flavors. Often tastes of berries, tropical fruit, or chocolate." },
            { label: "Honey Process", detail: "A middle ground — some fruit is left on the bean during drying. Balances the sweetness of natural with some of the clarity of washed." },
          ].map(({ label, detail }) => (
            <div key={label} style={{ marginBottom: "1.5rem" }}>
              <p style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.35rem" }}>{label}</p>
              <p style={{ color: "#b0a090" }}>{detail}</p>
            </div>
          ))}
        </Section>

        <Section title="Why does my coffee taste sour or bitter?">
          <p style={{ marginBottom: "1rem" }}>
            Sour coffee is usually an indicator of under-extraction, meaning the water passed through the grounds too quickly or the grind size was too coarse. Bitter coffee indicates over-extraction, which happens when the water pulls out too many heavy compounds due to an overly fine grind size or a brewing time that was too long.
          </p>
          <p>
            Processing methods like washed or natural play a massive role in a coffee's inherent acidity and sweetness. Understanding how extraction changes those natural flavors allows you to perfectly balance out your morning cup.
          </p>
        </Section>

        <RelatedPosts posts={[
          { title: "Seed to Sprout – The Secret Lives of Coffee Farmers", slug: "seed-to-sprout-secret-lives-of-coffee-farmers", image: "/images/coffee-farmer-cherries.jpg", category: "Bean Picks" },
          { title: "The Art of the Roast – Finding the Perfect Profile", slug: "the-art-of-the-roast-finding-perfect-profile-in-the-drum", image: "/images/coffee-drum-roaster.jpg", category: "Bean Picks" },
        ]} />

        <div className="mt-12 p-6 text-center" style={{ background: "#131313", borderRadius: "8px", border: "1px solid rgba(161,79,31,0.25)" }}>
          <p style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "1rem", color: "#f2f2f2", marginBottom: "0.5rem" }}>Explore beans from every process method.</p>
          <p style={{ color: "#b0a090", fontSize: "0.85rem", marginBottom: "1.25rem" }}>Browse our curated single-origin bean selection.</p>
          <Link href="/products"><button className="btn-primary">Shop Products</button></Link>
        </div>

        <div className="mt-10 text-center">
          <Link href="/blog"><button className="btn-secondary" style={{ fontSize: "0.75rem" }}>Back to Blog</button></Link>
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
