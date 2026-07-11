import type { Metadata } from "next";
import Link from "next/link";

const title =
  "Staying Near Victoria Metro, Athens — Honest Neighbourhood Guide | Athens Urban Vibes";
const description =
  "An honest local guide to the Victoria area of central-north Athens, where Miron 18 sits — a 7-minute walk from Victoria metro station (Metro Line 1), with self check-in available 24/7. A genuine residential neighbourhood, not a tourist district.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/victoria-athens-guide",
  },
  openGraph: {
    title,
    description,
    url: "/victoria-athens-guide",
    type: "website",
    siteName: "Athens Urban Vibes",
    locale: "en_US",
    images: ["/logo.png"],
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.athensurbanvibes.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Victoria Guide",
      item: "https://www.athensurbanvibes.com/victoria-athens-guide",
    },
  ],
};

const shortAnswer = `Miron 18 sits in the Victoria area of central-north Athens — a genuine local neighbourhood, a 7-minute mostly-flat walk from Victoria metro station. It's not the tourist center, and that's the point: you get authentic everyday Athens, fast metro connections, and better value — with self check-in available 24/7.`;

const whatArea = `Victoria is a lived-in, multicultural Athens neighbourhood — locals, everyday shops, and none of the tourist-district polish or prices. Guests regularly mention what's within walking distance: grocery stores, coffee shops, restaurants, banks, and a pharmacy. Like any big-city neighbourhood, it's busiest and most comfortable along the main streets; the metro is the easy way in and out at night.`;

const gettingAround = `Victoria station is on Metro Line 1. From there the network connects you across the city, and the Athens metro links directly to the airport. Your apartment is a 7-minute walk from the station — verified on foot, not just on a map.`;

const arriving = `Every apartment has self check-in with a smart lock, available 24/7 — whether you land in the afternoon or at 2 AM, you can let yourself in at any hour.`;

export default function VictoriaAthensGuidePage() {
  return (
    <main
      style={{
        backgroundColor: "#0e0e0e",
        minHeight: "100vh",
        color: "white",
        padding: "40px 20px",
        fontFamily: "sans-serif",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbLd).replace(/</g, "\\u003c"),
        }}
      />

      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <header style={{ textAlign: "center", marginBottom: "50px" }}>
          <Link
            href="/"
            style={{
              color: "#888",
              textDecoration: "none",
              fontSize: "12px",
              letterSpacing: "1px",
              display: "inline-block",
              marginBottom: "20px",
            }}
          >
            ← BACK TO MAIN PAGE
          </Link>

          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: "900",
              margin: 0,
            }}
          >
            Staying Near Victoria Metro — An Honest Local Guide
          </h1>
        </header>

        <section style={{ textAlign: "center", marginTop: "50px" }}>
          <h2 style={{ fontSize: "1.5rem", margin: "12px 0", lineHeight: 1.2 }}>
            The short answer
          </h2>
          <p style={{ color: "#a1a1aa", marginTop: "14px", fontSize: "1.1rem" }}>
            {shortAnswer}
          </p>
        </section>

        <section style={{ textAlign: "center", marginTop: "50px" }}>
          <h2 style={{ fontSize: "1.5rem", margin: "12px 0", lineHeight: 1.2 }}>
            What the area is really like
          </h2>
          <p style={{ color: "#a1a1aa", marginTop: "14px", fontSize: "1.1rem" }}>
            {whatArea}
          </p>
        </section>

        <section style={{ textAlign: "center", marginTop: "50px" }}>
          <h2 style={{ fontSize: "1.5rem", margin: "12px 0", lineHeight: 1.2 }}>
            Getting around
          </h2>
          <p style={{ color: "#a1a1aa", marginTop: "14px", fontSize: "1.1rem" }}>
            {gettingAround}
          </p>
        </section>

        <section style={{ textAlign: "center", marginTop: "50px" }}>
          <h2 style={{ fontSize: "1.5rem", margin: "12px 0", lineHeight: 1.2 }}>
            Arriving late? No problem
          </h2>
          <p style={{ color: "#a1a1aa", marginTop: "14px", fontSize: "1.1rem" }}>
            {arriving}
          </p>
        </section>

        <section style={{ textAlign: "center", marginTop: "50px" }}>
          <p style={{ color: "#a1a1aa", marginTop: "14px", fontSize: "1.1rem" }}>
            {"Questions about the area or your arrival? We're happy to help before you book — see "}
            <Link
              href="/athens-urban-vibes"
              style={{
                color: "#D4AF37",
                textDecoration: "none",
                borderBottom: "1px solid #D4AF37",
                paddingBottom: "3px",
              }}
            >
              the apartments at Miron 18
            </Link>
            .
          </p>
        </section>
      </div>

      <footer style={{ marginTop: "60px", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontSize: "1.5rem",
            color: "#D4AF37",
          }}
        >
          "Making people smile"
        </p>
      </footer>
    </main>
  );
}
