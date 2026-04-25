import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPost2026EspressoGuide() {
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
              fontSize: "clamp(1.2rem, 3.5vw, 2.4rem)",
              color: "#f2f2f2",
              lineHeight: 1.25,
              maxWidth: "820px",
            }}
          >
            Best Espresso Machines for Beginners (2026 Guide)
          </h1>
          <p style={{ color: "#b0a090", marginTop: "0.75rem", fontSize: "0.85rem" }}>
            6 min read
          </p>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-2xl mx-auto px-6 py-16" style={{ lineHeight: 1.85 }}>

        {/* Intro */}
        <p style={{ color: "#d4cfc9", fontSize: "1.05rem", marginBottom: "1.25rem" }}>
          If you're getting into espresso for the first time, let me save you some frustration —
          not all machines are beginner-friendly, and a lot of them will make you feel like you
          need a barista certification just to make a decent shot.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "1.25rem" }}>
          The truth is, the "best" espresso machine isn't about price. It's about how easy it is
          to use, how consistent it is, and whether it actually helps you learn instead of
          overwhelming you.
        </p>
        <p style={{ color: "#b0a090", marginBottom: "2.5rem" }}>
          So here are a few beginner-friendly options that actually make sense.
        </p>

        <div className="divider-orange" style={{ marginBottom: "2.5rem" }} />

        {/* What to look for */}
        <Section title="What to Look for as a Beginner">
          <p style={{ marginBottom: "1rem" }}>
            Before jumping into specific machines, here's what really matters:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1rem 0" }}>
            {[
              "Easy controls (you don't want to fight the machine)",
              "Consistent pressure and temperature",
              "A decent steam wand (if you like lattes or cappuccinos)",
              "Not overly complicated",
            ].map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
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
                    marginTop: "0.58rem",
                    flexShrink: 0,
                  }}
                />
                {item}
              </li>
            ))}
          </ul>
          <p>
            A lot of people make the mistake of buying something too advanced and end up never
            using it.
          </p>
        </Section>

        {/* Machine 1 */}
        <Section title="1. Breville Bambino Plus">
          <p style={{ marginBottom: "1rem" }}>
            This is one of the best starting points.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            It heats up fast, the controls are simple, and it produces real espresso without a
            huge learning curve. The automatic milk frothing is a big bonus if you don't want to
            deal with manual steaming right away.
          </p>
          <p>
            It's not the cheapest option, but it's one of those machines you won't outgrow
            immediately.
          </p>
        </Section>

        {/* Machine 2 */}
        <Section title="2. De'Longhi Stilosa">
          <p style={{ marginBottom: "1rem" }}>
            If you're trying to stay on a budget, this one gets the job done.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            It's more manual, so you'll have to learn a bit, but that's not necessarily a bad
            thing. It teaches you the basics without being overly complicated.
          </p>
          <p>
            Just know it takes a little more effort to dial things in.
          </p>
        </Section>

        {/* Machine 3 */}
        <Section title="3. Breville Barista Express">
          <p style={{ marginBottom: "1rem" }}>
            This is for beginners who want an all-in-one setup.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            It comes with a built-in grinder, which saves you from buying one separately. That
            alone makes your life easier when you're starting out.
          </p>
          <p>
            There's a bit more of a learning curve compared to the Bambino, but it gives you
            more control once you get comfortable.
          </p>
        </Section>

        {/* Final Thoughts */}
        <Section title="Final Thoughts">
          <p style={{ marginBottom: "1rem" }}>
            Don't overthink it.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            Your first machine doesn't need to be perfect — it just needs to get you started and
            make good coffee consistently.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            The biggest mistake people make is trying to skip the learning phase by buying
            something too advanced. Keep it simple, learn the basics, and upgrade later if you
            want to.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            If anything, focus more on using the machine regularly than chasing the "perfect"
            setup.
          </p>
          <p>
            That's what actually makes the difference.
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
            Ready to complete your setup?
          </p>
          <p style={{ color: "#b0a090", fontSize: "0.85rem", marginBottom: "1.25rem" }}>
            Explore recommended gear and accessories on the site.
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
