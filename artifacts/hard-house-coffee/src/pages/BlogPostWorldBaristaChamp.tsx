import Link from "@/components/ShoppingLink";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorByline from "@/components/AuthorByline";
import RelatedPosts from "@/components/RelatedPosts";
import RecommendedBeans from "@/components/RecommendedBeans";
import WorldBaristaArticleContent from "@/components/WorldBaristaArticleContent";

const headline = "World Barista Championship: History, Rules, and How to Qualify";
const seoTitle = "World Barista Championship: History, Rules & How to Qualify | Hard House Coffee";
const description = "Discover the history of the World Barista Championship, how baristas qualify, competition rules, judging criteria, and how coffee fans can watch.";

export default function BlogPostWorldBaristaChamp() {
  return (
    <div className="hhc-legacy-article" style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={description} />
        <link rel="canonical" href="https://hardhousecoffee.com/blog/inside-world-barista-championship-olympics-of-caffeine" />
      </Helmet>
      <Navbar />

      <div className="relative overflow-hidden" style={{ height: "340px", borderBottom: "1px solid rgba(161,79,31,0.2)" }}>
        <img src="/images/world-barista-championship.jpg" alt="World Barista Championship competition stage" className="w-full h-full object-cover" style={{ filter: "brightness(0.35)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(11,11,11,0.6) 100%)" }}>
          <p className="section-subtitle mb-3">Coffee Culture</p>
          <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.2rem, 3.5vw, 2.4rem)", fontWeight: 700, color: "#f2f2f2", lineHeight: 1.25, maxWidth: "820px" }}>
            {headline}
          </h1>
          <p style={{ color: "#b0a090", marginTop: "0.75rem", fontSize: "0.85rem" }}>15 min read</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-16" style={{ lineHeight: 1.85, fontSize: "1.3rem" }}>
        <AuthorByline />

        <WorldBaristaArticleContent />

<RecommendedBeans variant="espresso" />
        <RelatedPosts posts={[
          { title: "Meet the Masters – What Makes a Top-Tier Barista Truly Elite", slug: "meet-the-masters-what-makes-top-tier-barista-truly-elite", image: "/images/barista-latte-art.jpg", category: "Coffee Culture" },
          { title: "Global Excellence – Onyx Coffee Lab (Bentonville, Arkansas)", slug: "global-excellence-onyx-coffee-lab-bentonville-arkansas", image: "/images/onyx-coffee-lab.jpg", category: "Coffee Culture" },
        ]} />

        <div className="mt-12 p-6 text-center" style={{ background: "#131313", borderRadius: "8px", border: "1px solid rgba(161,79,31,0.25)" }}>
          <p style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "1rem", color: "#f2f2f2", marginBottom: "0.5rem" }}>Compete at home with precision tools.</p>
          <p style={{ color: "#b0a090", fontSize: "0.85rem", marginBottom: "1.25rem" }}>Browse scales, grinders, and professional espresso accessories.</p>
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
