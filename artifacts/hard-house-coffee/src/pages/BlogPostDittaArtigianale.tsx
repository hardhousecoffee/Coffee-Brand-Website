import { Link } from "wouter";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import RelatedPosts from "@/components/RelatedPosts";
import RecommendedBeans from "@/components/RecommendedBeans";

export default function BlogPostDittaArtigianale() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Helmet>
        <title>Old World Perfection – Ditta Artigianale (Florence, Italy) | Hard House Coffee</title>
        <meta name="description" content="Founded by champion barista Francesco Sanapo in the heart of Florence, Ditta Artigianale bridges classic Italian espresso tradition with the modern specialty movement." />
        <meta property="og:title" content="Ditta Artigianale – Old World Perfection in Florence | Hard House Coffee" />
        <meta property="og:description" content="Where Italian espresso tradition beautifully embraces the new wave." />
      </Helmet>
      <Navbar />

      <div className="relative overflow-hidden" style={{ height: "340px", borderBottom: "1px solid rgba(161,79,31,0.2)" }}>
        <img src="/images/ditta-artigianale-florence.jpg" alt="Ditta Artigianale coffee shop Florence Italy" className="w-full h-full object-cover" style={{ filter: "brightness(0.35)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(11,11,11,0.6) 100%)" }}>
          <p className="section-subtitle mb-3">Coffee Culture</p>
          <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.2rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#f2f2f2", lineHeight: 1.25, maxWidth: "820px" }}>
            Old World Perfection – Ditta Artigianale (Florence, Italy)
          </h1>
          <p style={{ color: "#b0a090", marginTop: "0.75rem", fontSize: "0.85rem" }}>5 min read</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16" style={{ lineHeight: 1.85 }}>
        <AuthorByline />

        <p style={{ color: "#d4cfc9", fontSize: "1.05rem", marginBottom: "1.25rem" }}>
          You can't talk about elite global coffee without paying homage to the birthplace of espresso. Located right in the historic heart of Florence, Ditta Artigianale is widely recognized as one of the highest-ranked coffee shops in Europe.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "1.25rem" }}>
          Founded by champion barista Francesco Sanapo, it brilliantly bridges the gap between classic Italian espresso tradition and the modern specialty movement. Instead of the traditional, super-dark, bitter roasts you might expect in Italy, Ditta serves incredibly vibrant, responsibly sourced single-origin coffees alongside impeccable pastries.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "2.5rem" }}>
          It's the perfect place to sit back, soak in the stunning Tuscan atmosphere, and see how the old school beautifully embraces the new wave.
        </p>

        <div className="divider-orange" style={{ marginBottom: "2.5rem" }} />

        <Section title="What Makes Ditta Artigianale Special">
          {[
            { label: "Founded by a Champion", detail: "Francesco Sanapo is a multiple Italian Barista Champion. That competition-level precision is built into every service at Ditta." },
            { label: "Italian Tradition Meets Third Wave", detail: "Most Italian cafés cling to dark, anonymous espresso blends. Ditta went the other way — light, transparent, single-origin — and the world took notice." },
            { label: "Multiple Florence Locations", detail: "With several locations in the historic center, Ditta has become a destination for coffee pilgrims from around the world visiting Florence." },
          ].map(({ label, detail }) => (
            <div key={label} style={{ marginBottom: "1.5rem" }}>
              <p style={{ color: "#f2f2f2", fontWeight: 700, marginBottom: "0.35rem" }}>{label}</p>
              <p style={{ color: "#b0a090" }}>{detail}</p>
            </div>
          ))}
        </Section>

        <Section title="What is the best way to clean and maintain an espresso machine?">
          <p style={{ marginBottom: "1rem" }}>
            You should backflush your espresso machine with water after every daily session, clean the shower screen with a dedicated coffee detergent weekly, and descale the internal boilers every 2 to 6 months depending on your local water hardness.
          </p>
          <p>
            At shops like Ditta Artigianale in Florence, pristine machine cleanliness is a core rule. Clean lines guarantee that you taste the vibrant notes of the coffee bean rather than rancid, burnt old coffee oils stuck to the metal components.
          </p>
        </Section>

<RecommendedBeans variant="specialty" />
        <RelatedPosts posts={[
          { title: "Parisian Elegance – Café Lomi (Paris, France)", slug: "parisian-elegance-cafe-lomi-paris-france", image: "/images/cafe-lomi-paris.jpg", category: "Coffee Culture" },
          { title: "The Master of Precision – Glitch Coffee (Tokyo, Japan)", slug: "master-of-precision-glitch-coffee-roasters-tokyo-japan", image: "/images/glitch-coffee-tokyo.jpg", category: "Coffee Culture" },
        ]} />

        <div className="mt-12 p-6 text-center" style={{ background: "#131313", borderRadius: "8px", border: "1px solid rgba(161,79,31,0.25)" }}>
          <p style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "1rem", color: "#f2f2f2", marginBottom: "0.5rem" }}>Keep your setup clean and performing.</p>
          <p style={{ color: "#b0a090", fontSize: "0.85rem", marginBottom: "1.25rem" }}>Browse espresso cleaning products and maintenance tools.</p>
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
