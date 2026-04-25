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

export default function TermsOfUse() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <div className="relative pt-40 pb-20 px-6 text-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/cafe-alley.jpg')",
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
            Terms of Use
          </h1>
          <p style={{ color: "#6b5a4e", fontSize: "0.78rem", marginTop: "1rem" }}>
            Last updated: January 1, 2025
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-2xl mx-auto px-6 py-16">

        <p style={{ color: "#b0a090", fontSize: "0.9rem", lineHeight: 1.85, marginBottom: "2.75rem" }}>
          Welcome to Hard House Coffee. By accessing or using this website, you agree to comply
          with and be bound by the following Terms of Use. If you do not agree with any part of
          these terms, please do not use our website.
        </p>

        <Section title="Use of the Website">
          <p style={{ marginBottom: "1rem" }}>
            This website is provided for personal, non-commercial informational use only. You may
            not use this site for any unlawful purpose or in a way that could damage, disable, or
            impair the site or interfere with any other party's use of it.
          </p>
          <p>
            You agree not to attempt to gain unauthorized access to any part of the site or any
            server, network, or database connected to it.
          </p>
        </Section>

        <Section title="Intellectual Property">
          <p style={{ marginBottom: "1rem" }}>
            All content on this website — including text, images, logos, graphics, and layout — is
            the property of Hard House Coffee or its content providers and is protected by
            applicable copyright laws.
          </p>
          <p>
            You may not reproduce, distribute, or create derivative works from any content on this
            site without express written permission from Hard House Coffee.
          </p>
        </Section>

        <Section title="Product Reviews and Recommendations">
          <p>
            Our reviews and recommendations reflect our honest, independent opinions. We do not
            accept payment in exchange for positive reviews. Where affiliate relationships exist,
            they are disclosed in accordance with our Disclaimer policy.
          </p>
        </Section>

        <Section title="Third-Party Links">
          <p>
            Our website may link to third-party websites. We have no control over the content or
            practices of those sites and accept no responsibility for them. Access to any
            third-party site from a link on our website is at your own risk.
          </p>
        </Section>

        <Section title="Disclaimer of Warranties">
          <p style={{ marginBottom: "1rem" }}>
            This website is provided on an "as is" and "as available" basis, without warranties of
            any kind, either express or implied. Hard House Coffee does not warrant that the site
            will be uninterrupted, error-free, or free of viruses or other harmful components.
          </p>
        </Section>

        <Section title="Limitation of Liability">
          <p>
            To the maximum extent permitted by law, Hard House Coffee shall not be liable for any
            indirect, incidental, special, or consequential damages arising from your use of this
            website or any information contained on it.
          </p>
        </Section>

        <Section title="Changes to These Terms">
          <p>
            We reserve the right to modify these Terms of Use at any time. Changes will be posted
            on this page with an updated revision date. Your continued use of the site following
            any changes constitutes acceptance of those changes.
          </p>
        </Section>

        <Section title="Governing Law">
          <p>
            These Terms of Use shall be governed by and construed in accordance with applicable
            laws. Any disputes arising from your use of this website shall be resolved through
            appropriate legal channels.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            For any questions about these Terms of Use, please contact us at{" "}
            <span style={{ color: "#f2f2f2" }}>hello@hardhousecoffee.com</span>.
          </p>
        </Section>
      </div>

      <Footer />
    </div>
  );
}
