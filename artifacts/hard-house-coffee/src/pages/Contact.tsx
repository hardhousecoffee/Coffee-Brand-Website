import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Helmet>
        <title>Contact Us | Hard House Coffee</title>
        <meta name="description" content="Get in touch with the Hard House Coffee team. Have a question, product suggestion, or partnership inquiry? We would love to hear from you." />
        <meta property="og:title" content="Contact Us | Hard House Coffee" />
        <meta property="og:description" content="Reach out to Hard House Coffee for questions, partnerships, and coffee talk." />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <div className="relative pt-40 pb-24 px-6 text-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/steamy-mug.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.22)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(11,11,11,0.3), rgba(11,11,11,0.97))" }}
        />
        <div className="relative" style={{ zIndex: 2 }}>
          <p className="section-subtitle" style={{ color: "#a14f1f" }}>Get in Touch</p>
          <div className="divider-orange mx-auto" />
          <h1
            className="mt-4"
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "clamp(2rem, 5vw, 3.6rem)",
              color: "#f2f2f2",
              lineHeight: 1.2,
            }}
          >
            Contact Us
          </h1>
          <p style={{ color: "#b0a090", maxWidth: "460px", margin: "1.5rem auto 0", lineHeight: 1.75 }}>
            Have a question, a product suggestion, or just want to talk coffee? We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">

          {/* Email block */}
          <div
            className="p-8"
            style={{
              background: "#131313",
              borderRadius: "10px",
              border: "1px solid rgba(161,79,31,0.25)",
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "8px",
                background: "rgba(161,79,31,0.12)",
                border: "1px solid rgba(161,79,31,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.25rem",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a14f1f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <h3
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: "#a14f1f",
                marginBottom: "0.5rem",
              }}
            >
              Email
            </h3>
            <p style={{ color: "#f2f2f2", fontSize: "0.95rem", marginBottom: "0.4rem" }}>
              hardhousecoffee@gmail.com
            </p>
            <p style={{ color: "#6b5a4e", fontSize: "0.78rem", lineHeight: 1.6 }}>
              We typically respond within 1–2 business days.
            </p>
          </div>

          {/* Business block */}
          <div
            className="p-8"
            style={{
              background: "#131313",
              borderRadius: "10px",
              border: "1px solid rgba(161,79,31,0.25)",
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "8px",
                background: "rgba(161,79,31,0.12)",
                border: "1px solid rgba(161,79,31,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.25rem",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a14f1f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                <line x1="12" x2="12" y1="12" y2="17" />
                <line x1="9.5" x2="14.5" y1="14.5" y2="14.5" />
              </svg>
            </div>
            <h3
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: "#a14f1f",
                marginBottom: "0.5rem",
              }}
            >
              Partnerships & Press
            </h3>
            <p style={{ color: "#f2f2f2", fontSize: "0.95rem", marginBottom: "0.4rem" }}>
              hardhousecoffee@gmail.com
            </p>
            <p style={{ color: "#6b5a4e", fontSize: "0.78rem", lineHeight: 1.6 }}>
              For brand collaborations, press inquiries, and affiliate proposals.
            </p>
          </div>
        </div>

        {/* Message form */}
        <div
          className="p-10"
          style={{
            background: "#131313",
            borderRadius: "10px",
            border: "1px solid rgba(161,79,31,0.2)",
          }}
        >
          <h2
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
              color: "#f2f2f2",
              marginBottom: "0.4rem",
            }}
          >
            Send a Message
          </h2>
          <p style={{ color: "#6b5a4e", fontSize: "0.8rem", marginBottom: "2rem" }}>
            Fill out the form below and we'll get back to you.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const name = (form.elements.namedItem("name") as HTMLInputElement).value;
              const email = (form.elements.namedItem("email") as HTMLInputElement).value;
              const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
              window.location.href = `mailto:hardhousecoffee@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              {[
                { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label
                    htmlFor={id}
                    style={{
                      display: "block",
                      fontSize: "0.72rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#b0a090",
                      marginBottom: "0.5rem",
                      fontWeight: 600,
                    }}
                  >
                    {label}
                  </label>
                  <input
                    id={id}
                    name={id}
                    type={type}
                    placeholder={placeholder}
                    required
                    style={{
                      width: "100%",
                      background: "#0b0b0b",
                      border: "1px solid rgba(161,79,31,0.25)",
                      borderRadius: "6px",
                      padding: "0.7rem 1rem",
                      color: "#f2f2f2",
                      fontSize: "0.9rem",
                      outline: "none",
                    }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "#a14f1f"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(161,79,31,0.25)"; }}
                  />
                </div>
              ))}
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                style={{
                  display: "block",
                  fontSize: "0.72rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#b0a090",
                  marginBottom: "0.5rem",
                  fontWeight: 600,
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us what's on your mind..."
                required
                style={{
                  width: "100%",
                  background: "#0b0b0b",
                  border: "1px solid rgba(161,79,31,0.25)",
                  borderRadius: "6px",
                  padding: "0.7rem 1rem",
                  color: "#f2f2f2",
                  fontSize: "0.9rem",
                  outline: "none",
                  resize: "vertical",
                  fontFamily: "Inter, sans-serif",
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "#a14f1f"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(161,79,31,0.25)"; }}
              />
            </div>

            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
