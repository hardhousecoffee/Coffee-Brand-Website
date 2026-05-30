import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import RelatedPosts from "@/components/RelatedPosts";
import RecommendedBeans from "@/components/RecommendedBeans";

export default function BlogPostSeattleCoffeeScene() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Helmet>
        <title>Seattle – Exploring the Deep Roots of the Emerald City's Coffee Scene | Hard House Coffee</title>
        <meta name="description" content="Seattle's coffee history goes far deeper than one green-logo chain. Espresso Vivace, David Schomer, and the roots of modern American espresso technique." />
        <meta property="og:title" content="Seattle – Deep Roots of the Emerald City's Coffee Scene | Hard House Coffee" />
        <meta property="og:description" content="The real heartbeat of Seattle's coffee history is way cooler than you think." />
      </Helmet>
      <Navbar />

      <div className="relative overflow-hidden" style={{ height: "340px", borderBottom: "1px solid rgba(161,79,31,0.2)" }}>
        <img src="/images/espresso-vivace-seattle.jpg" alt="Espresso Vivace Seattle coffee shop" className="w-full h-full object-cover" style={{ filter: "brightness(0.35)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(11,11,11,0.6) 100%)" }}>
          <p className="section-subtitle mb-3">Coffee Culture</p>
          <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.2rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#f2f2f2", lineHeight: 1.25, maxWidth: "820px" }}>
            Seattle – Exploring the Deep Roots of the Emerald City's Coffee Scene
          </h1>
          <p style={{ color: "#b0a090", marginTop: "0.75rem", fontSize: "0.85rem" }}>6 min read</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16" style={{ lineHeight: 1.85 }}>
        <AuthorByline />

        <p style={{ color: "#d4cfc9", fontSize: "1.05rem", marginBottom: "1.25rem" }}>
          When you think of coffee in Seattle, your mind probably jumps straight to the massive green siren corporate headquarters. But the real heartbeat of Seattle's coffee history is so much cooler than that.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "1.25rem" }}>
          If you ever find yourself walking around the Pacific Northwest, you have to dig into places like Espresso Vivace. David Schomer started it way back in the late '80s, and he's basically the godfather of modern espresso technique in America — he literally popularized latte art in the U.S. and wrote the definitive guide to espresso used by baristas worldwide.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "2.5rem" }}>
          The city that launched a global coffee empire still has some of the most technically focused, seriously passionate coffee people anywhere on the planet — and you can feel that energy the moment you walk into one of these storied shops.
        </p>

        <div className="divider-orange" style={{ marginBottom: "2.5rem" }} />

        <Section title="Essential Seattle Coffee Stops">
          {[
            { name: "Espresso Vivace", desc: "The spiritual home of American espresso technique. David Schomer's legacy lives in every perfectly pulled shot served here." },
            { name: "Victrola Coffee Roasters", desc: "A cornerstone of Seattle's third-wave scene. Exceptional single-origin offerings roasted with obsessive care." },
            { name: "Lighthouse Roasters", desc: "One of Seattle's oldest specialty roasters. A community institution that never traded quality for scale." },
          ].map(({ name, desc }) => (
            <div key={name} style={{ marginBottom: "1.5rem", paddingBottom: "1.5rem", borderBottom: "1px solid rgba(161,79,31,0.1)" }}>
              <p style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.35rem" }}>{name}</p>
              <p style={{ color: "#b0a090" }}>{desc}</p>
            </div>
          ))}
        </Section>

        <Section title="What questions should I consider when choosing an espresso machine?">
          <p style={{ marginBottom: "1rem" }}>
            Before buying an espresso machine, you need to ask yourself how much time you want to spend learning the craft, how many milk drinks you plan to make back-to-back, and your budget for a matching grinder. Decide whether you want a hands-on semi-automatic experience or a fully automated machine.
          </p>
          <p>
            Walking into legendary Seattle coffee houses like Espresso Vivace reminds you that great espresso is an art form that requires the right tools. Finding a home machine that matches your lifestyle is the first step toward becoming your own barista.
          </p>
        </Section>

<RecommendedBeans variant="espresso" />
        <RelatedPosts posts={[
          { title: "San Francisco – Birthplace of the Specialty Revolution", slug: "san-francisco-birthplace-of-specialty-revolution", image: "/images/san-francisco-specialty-coffee.jpg", category: "Coffee Culture" },
          { title: "The Rise of Specialty Coffee Bars", slug: "the-rise-of-specialty-coffee-bars", image: "/images/black-cafe.jpg", category: "Coffee Culture" },
        ]} />

        <div className="mt-12 p-6 text-center" style={{ background: "#131313", borderRadius: "8px", border: "1px solid rgba(161,79,31,0.25)" }}>
          <p style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "1rem", color: "#f2f2f2", marginBottom: "0.5rem" }}>Bring that Seattle energy home.</p>
          <p style={{ color: "#b0a090", fontSize: "0.85rem", marginBottom: "1.25rem" }}>Explore our curated espresso gear and bean picks.</p>
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
