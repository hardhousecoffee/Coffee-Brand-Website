import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Navbar />

      <div className="relative pt-40 pb-32 px-6 text-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/aroma-beans.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.15)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(11,11,11,0.5), rgba(11,11,11,0.98))" }}
        />
        <div className="relative" style={{ zIndex: 2 }}>
          <p
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "clamp(4rem, 14vw, 10rem)",
              color: "#a14f1f",
              lineHeight: 1,
              marginBottom: "0",
              opacity: 0.35,
              letterSpacing: "0.05em",
            }}
          >
            404
          </p>
          <p className="section-subtitle" style={{ color: "#a14f1f", marginTop: "0.5rem" }}>Page Not Found</p>
          <div className="divider-orange mx-auto" />
          <h1
            className="mt-4"
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "clamp(1.4rem, 4vw, 2.8rem)",
              color: "#f2f2f2",
              lineHeight: 1.2,
            }}
          >
            Lost in the Grind
          </h1>
          <p
            style={{
              color: "#b0a090",
              maxWidth: "440px",
              margin: "1.5rem auto 2.5rem",
              lineHeight: 1.75,
            }}
          >
            The page you're looking for doesn't exist or may have moved. Let's get you back to the good stuff.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/">
              <button className="btn-primary">Back to Home</button>
            </Link>
            <Link href="/blog">
              <button className="btn-secondary">Explore the Blog</button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
