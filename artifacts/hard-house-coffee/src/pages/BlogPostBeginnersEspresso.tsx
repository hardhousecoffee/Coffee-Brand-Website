import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPostBeginnersEspresso() {
  return (
    <div style={{ backgroundColor: "#0b0b0b", color: "#f2f2f2", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero banner */}
      <div
        className="relative overflow-hidden"
        style={{ height: "340px", borderBottom: "1px solid rgba(161,79,31,0.2)" }}
      >
        <img
          src="/images/espresso-machine.jpg"
          alt="Espresso Machine"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.35)" }}
        />
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(11,11,11,0.6) 100%)" }}
        >
          <p className="section-subtitle mb-3">Espresso Machines</p>
          <h1
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "clamp(1.4rem, 4vw, 2.6rem)",
              color: "#f2f2f2",
              lineHeight: 1.25,
              maxWidth: "780px",
            }}
          >
            Best Espresso Machines for Beginners
          </h1>
          <p style={{ color: "#b0a090", marginTop: "0.75rem", fontSize: "0.85rem" }}>
            5 min read
          </p>
        </div>
      </div>

      {/* Article body */}
      <div
        className="max-w-2xl mx-auto px-6 py-16"
        style={{ lineHeight: 1.85 }}
      >

        {/* Intro */}
        <p style={{ color: "#d4cfc9", fontSize: "1.05rem", marginBottom: "1.25rem" }}>
          Getting into espresso can feel confusing at first.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "1.25rem" }}>
          There are so many machines out there, and they all look similar. Some are simple, others
          look like something from a coffee shop. And the prices are all over the place.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "2.5rem" }}>
          So where do you actually start?
        </p>

        <div className="divider-orange" style={{ marginBottom: "2.5rem" }} />

        {/* Section 1 */}
        <Section title="What most beginners get wrong">
          <p style={{ marginBottom: "1rem" }}>
            A lot of people think they need the best machine right away. You don't.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            What you need is something easy to use, consistent, and enjoyable.
          </p>
          <p>
            If it's too complicated, you won't use it.
          </p>
        </Section>

        {/* Section 2 */}
        <Section title="The 3 main types of machines">
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              { label: "Fully automatic", detail: "Press a button, it does everything." },
              { label: "Semi-automatic", detail: "Best for beginners — gives you some control." },
              { label: "Manual", detail: "Not beginner-friendly." },
            ].map(({ label, detail }) => (
              <li
                key={label}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                  marginBottom: "0.9rem",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#a14f1f",
                    marginTop: "0.55rem",
                    flexShrink: 0,
                  }}
                />
                <span>
                  <strong style={{ color: "#f2f2f2" }}>{label}</strong>
                  {" — "}
                  <span style={{ color: "#b0a090" }}>{detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Section 3 */}
        <Section title="What matters most">
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {["Ease of use", "Consistency", "Build quality", "Milk frothing"].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "center",
                  marginBottom: "0.75rem",
                  color: "#d4cfc9",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#a14f1f",
                    flexShrink: 0,
                  }}
                />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* Section 4 */}
        <Section title="What I recommend">
          <p style={{ marginBottom: "1rem" }}>
            Don't go too cheap or too expensive.
          </p>
          <p>
            Pick something in the middle that's easy to learn and reliable.
          </p>
        </Section>

        {/* Section 5 */}
        <Section title="Final thoughts">
          <p style={{ marginBottom: "1rem" }}>
            Making espresso at home is about learning and enjoying the process.
          </p>
          <p>
            If you're getting started, check out the machines we recommend on our shop page.
          </p>
        </Section>

        {/* CTA */}
        <div
          className="mt-12 p-6 text-center"
          style={{
            background: "#131313",
            borderRadius: "8px",
            border: "1px solid rgba(161,79,31,0.25)",
          }}
        >
          <p
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "1rem",
              color: "#f2f2f2",
              marginBottom: "0.5rem",
            }}
          >
            Ready to pick your machine?
          </p>
          <p style={{ color: "#b0a090", fontSize: "0.85rem", marginBottom: "1.25rem" }}>
            Browse our curated selection of espresso machines for every budget.
          </p>
          <Link href="/products">
            <button className="btn-primary">Shop Espresso Machines</button>
          </Link>
        </div>

        {/* Back link */}
        <div className="mt-10 text-center">
          <Link href="/blog">
            <button className="btn-secondary" style={{ fontSize: "0.75rem" }}>
              ← Back to Blog
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h2
        style={{
          fontFamily: "'Cinzel Decorative', serif",
          fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
          color: "#f2f2f2",
          marginBottom: "1rem",
          paddingBottom: "0.5rem",
          borderBottom: "1px solid rgba(161,79,31,0.2)",
        }}
      >
        {title}
      </h2>
      <div style={{ color: "#b0a090", fontSize: "0.95rem" }}>
        {children}
      </div>
    </div>
  );
}
