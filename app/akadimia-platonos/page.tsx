import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const title = "Athens Urban Vibes — Akadimia Platonos | Opening Soon";
const description =
  "Athens Urban Vibes is renovating a third boutique location — 6 to 8 apartments in Akadimia Platonos, the historic Plato's Academy neighbourhood of Athens. In development now, opening in the coming months.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/akadimia-platonos",
  },
  openGraph: {
    title,
    description,
    url: "/akadimia-platonos",
    type: "website",
    siteName: "Athens Urban Vibes",
    locale: "en_US",
    images: ["/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Athens Urban Vibes — Akadimia Platonos",
  url: "https://www.athensurbanvibes.com/akadimia-platonos",
  description:
    "A third Athens Urban Vibes boutique location in development in Akadimia Platonos, Athens — 6 to 8 apartments, opening in the coming months.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Athens",
    addressCountry: "GR",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Athens Urban Vibes",
    url: "https://www.athensurbanvibes.com",
  },
};

const intro = `Our next boutique location is on the way. In Akadimia Platonos — the historic neighbourhood of Plato's Academy — we're renovating a collection of 6 to 8 boutique apartments as part of the Athens Urban Vibes network. It's currently in development and will open in the coming months.`;

const ancientModern = `This is a corner of Athens where history and nightlife meet. It's about a 14-minute walk to the Plato's Academy Archaeological Park, roughly 13 minutes to Metaxourgeio metro station, and around 19 minutes to Gazi and Technopolis — the city's culture and nightlife district. Authentic local Athens, away from the tourist crowds.`;

const closing = `Same care and fully-renovated boutique style you'll find across Athens Urban Vibes. Check back soon for photos and availability.`;

export default function AkadimiaPlatonosPage() {
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
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
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

          <div>
            <Image
              src="/logo.png"
              alt="Athens Urban Vibes"
              width={140}
              height={140}
              style={{ objectFit: "contain", marginBottom: "20px" }}
            />
          </div>

          <div
            style={{
              color: "#D4AF37",
              fontSize: "11px",
              fontWeight: "bold",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Coming Soon · Our Third Location
          </div>

          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: "900",
              margin: 0,
            }}
          >
            Athens Urban Vibes — Akadimia Platonos
          </h1>

          <p style={{ color: "#a1a1aa", marginTop: "14px", fontSize: "1.1rem" }}>
            {intro}
          </p>
        </header>

        <section style={{ textAlign: "center", marginTop: "50px" }}>
          <h2 style={{ fontSize: "1.5rem", margin: "12px 0", lineHeight: 1.2 }}>
            Where ancient meets modern
          </h2>
          <p style={{ color: "#a1a1aa", marginTop: "14px", fontSize: "1.1rem" }}>
            {ancientModern}
          </p>
        </section>

        <section style={{ textAlign: "center", marginTop: "50px" }}>
          <p style={{ color: "#a1a1aa", marginTop: "14px", fontSize: "1.1rem" }}>
            {closing}
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
