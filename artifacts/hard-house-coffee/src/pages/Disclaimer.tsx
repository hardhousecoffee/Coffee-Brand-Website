import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2.75rem" }}>
      <h2
        style={{
          fontFamily: "'Cinzel Decorative', serif",
          fontSize: "clamp(0.95rem, 2vw, 1.2rem)",
          color: "#f2f2f2",
          marginBottom: "1rem",
          paddingBottom: "0.5rem",
          borderBottom: "1px solid rgba(161,79,31,0.18)",
        }}
      >
        {title}
      </h2>
      <div style={{ color: "#b0a090", fontSize: "0.9rem", lineHeight: 1.85 }}>
        {children}
      </div>
    </div>
  );
}

export default function Disclaimer() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <div className="relative pt-40 pb-20 px-6 text-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/outdoor-coffee.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.2)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(11,11,11,0.2), rgba(11,11,11,0.98))" }}
        />
        <div className="relative" style={{ zIndex: 2 }}>
          <p className="section-subtitle" style={{ color: "#a14f1f" }}>Legal</p>
          <div className="divider-orange mx-auto" />
          <h1
            className="mt-4"
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)",
              color: "#f2f2f2",
              lineHeight: 1.2,
            }}
          >
            Disclaimer
          </h1>
          <p style={{ color: "#6b5a4e", fontSize: "0.78rem", marginTop: "1rem" }}>
            Last updated: January 1, 2025
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-2xl mx-auto px-6 py-16">

        <p style={{ color: "#b0a090", fontSize: "0.9rem", lineHeight: 1.85, marginBottom: "2.75rem" }}>
          Please read this Disclaimer carefully before using Hard House Coffee. By accessing or
          using our website, you acknowledge that you have read, understood, and agree to be bound
          by the terms set out below.
        </p>

        <Section title="Affiliate Disclosure">
          <p style={{ marginBottom: "1rem" }}>
            Hard House Coffee participates in affiliate marketing programs. This means we may earn
            a commission if you click on a product link and make a purchase — at no additional cost
            to you. We are a participant in the Amazon Services LLC Associates Program, an affiliate
            advertising program designed to provide a means for sites to earn advertising fees by
            advertising and linking to Amazon.com.
          </p>
          <p>
            Our editorial opinions are never influenced by affiliate relationships. We only recommend
            products we genuinely believe in.
          </p>
        </Section>

        <Section title="For Informational Purposes Only">
          <p style={{ marginBottom: "1rem" }}>
            All content published on Hard House Coffee — including blog posts, product reviews,
            gear guides, and recommendations — is provided for general informational and
            entertainment purposes only.
          </p>
          <p>
            Nothing on this website should be construed as professional advice of any kind. You
            should conduct your own research or consult a qualified professional before making any
            purchasing decisions.
          </p>
        </Section>

        <Section title="Accuracy of Information">
          <p style={{ marginBottom: "1rem" }}>
            We make every effort to ensure that the information on this site is accurate and up
            to date. However, product specifications, prices, and availability are subject to
            change at any time without notice.
          </p>
          <p>
            Hard House Coffee makes no warranties or representations about the completeness,
            reliability, or accuracy of any information on this site.
          </p>
        </Section>

        <Section title="External Links">
          <p>
            Our website may contain links to external websites that are not under our control.
            We have no responsibility for the content of those sites. The inclusion of any link
            does not imply endorsement by Hard House Coffee.
          </p>
        </Section>

        <Section title="Limitation of Liability">
          <p>
            To the fullest extent permitted by law, Hard House Coffee shall not be liable for any
            direct, indirect, incidental, or consequential damages arising from your use of — or
            inability to use — this website or any content on it.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            If you have any questions regarding this Disclaimer, please contact us at{" "}
            <span style={{ color: "#f2f2f2" }}>hello@hardhousecoffee.com</span>.
          </p>
        </Section>
      </div>

      <Footer />
    </div>
  );
}
