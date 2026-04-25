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

export default function PrivacyPolicy() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <div className="relative pt-40 pb-20 px-6 text-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/aroma-beans.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.18)",
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
            Privacy Policy
          </h1>
          <p style={{ color: "#6b5a4e", fontSize: "0.78rem", marginTop: "1rem" }}>
            Last updated: January 1, 2026
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-2xl mx-auto px-6 py-16">

        <p style={{ color: "#b0a090", fontSize: "0.9rem", lineHeight: 1.85, marginBottom: "2.75rem" }}>
          At Hard House Coffee, we respect your privacy and are committed to protecting the personal
          information you share with us. This Privacy Policy explains what information we collect,
          how we use it, and the choices you have.
        </p>

        <Section title="Information We Collect">
          <p style={{ marginBottom: "1rem" }}>
            We may collect certain information automatically when you visit our website, including:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              "Browser type and version",
              "Pages visited and time spent on each page",
              "Referring website or search engine",
              "General geographic location (country/region level)",
            ].map((item) => (
              <li key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "0.6rem" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#a14f1f", marginTop: "0.6rem", flexShrink: 0 }} />
                {item}
              </li>
            ))}
          </ul>
          <p style={{ marginTop: "1rem" }}>
            If you contact us via our contact form or email, we may also collect your name and
            email address in order to respond to your inquiry.
          </p>
        </Section>

        <Section title="Cookies and Tracking">
          <p style={{ marginBottom: "1rem" }}>
            Our website may use cookies and similar tracking technologies to improve your browsing
            experience and analyze site traffic. Cookies are small data files stored on your device.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            You can instruct your browser to refuse all cookies or to indicate when a cookie is
            being sent. However, some parts of the site may not function properly without cookies.
          </p>
          <p>
            By using this website, you consent to the use of cookies as described in this policy.
          </p>
        </Section>

        <Section title="Third-Party Services">
          <p style={{ marginBottom: "1rem" }}>
            We may use third-party tools and services for analytics, advertising, and affiliate
            marketing. These services may collect information about your use of our site in
            accordance with their own privacy policies. These include, but may not be limited to:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              "Google Analytics — for understanding site traffic",
              "Amazon Associates — for affiliate product links",
              "Other affiliate networks as applicable",
            ].map((item) => (
              <li key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "0.6rem" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#a14f1f", marginTop: "0.6rem", flexShrink: 0 }} />
                {item}
              </li>
            ))}
          </ul>
          <p style={{ marginTop: "1rem" }}>
            We may also use advertising partners such as Google AdSense, which may use cookies and
            similar technologies to display relevant ads based on your browsing behavior.
          </p>
        </Section>

        <Section title="How We Use Your Information">
          <p style={{ marginBottom: "1rem" }}>
            Any information we collect is used solely to operate and improve the website, respond to
            inquiries, and analyze how our content is being used. We do not sell, rent, or share
            your personal information with third parties for marketing purposes.
          </p>
        </Section>

        <Section title="Data Retention">
          <p>
            We retain contact form submissions and email correspondence only as long as necessary
            to respond to your inquiry. Anonymized analytics data may be retained indefinitely for
            the purpose of improving the site.
          </p>
        </Section>

        <Section title="Your Rights">
          <p style={{ marginBottom: "1rem" }}>
            Depending on your location, you may have rights regarding your personal data, including
            the right to access, correct, or delete information we hold about you. To exercise any
            of these rights, contact us at:
          </p>
          <p style={{ color: "#f2f2f2" }}>hello@hardhousecoffee.com</p>
        </Section>

        <Section title="Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. When we do, the updated date at
            the top of this page will be revised. Continued use of the site after changes are posted
            constitutes your acceptance of the updated policy.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            If you have any questions about this Privacy Policy, please reach out to us at{" "}
            <span style={{ color: "#f2f2f2" }}>hello@hardhousecoffee.com</span>.
          </p>
        </Section>
      </div>

      <Footer />
    </div>
  );
}
