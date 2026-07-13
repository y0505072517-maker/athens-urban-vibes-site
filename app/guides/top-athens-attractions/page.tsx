import type { Metadata } from "next";
import Link from "next/link";

const pageTitle = "Top 10 Must-See Attractions in Athens";
const description =
  "Ten must-see Athens attractions with direct Google Maps links — the classic landmarks every guest asks us about, in one practical list.";
const title = `${pageTitle} — Athens Urban Vibes`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/guides/top-athens-attractions",
  },
  openGraph: {
    title,
    description,
    url: "/guides/top-athens-attractions",
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
      name: "Guides",
      item: "https://www.athensurbanvibes.com/guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: pageTitle,
      item: "https://www.athensurbanvibes.com/guides/top-athens-attractions",
    },
  ],
};

type Attraction = { emoji: string; name: string; desc: string; url: string };

const attractions: Attraction[] = [
  {
    emoji: "✨",
    name: "Acropolis",
    desc: "The crown jewel of Athens. Marvel at the Parthenon and soak in ancient history.",
    url: "https://maps.app.goo.gl/8nc76Wyh1tAGxChEA",
  },
  {
    emoji: "🏛",
    name: "Acropolis Museum",
    desc: "A sleek, modern space filled with ancient wonders — and a good escape from the midday sun.",
    url: "https://maps.app.goo.gl/oB5Xdn5XAzt6qMT28",
  },
  {
    emoji: "⛰️",
    name: "Mount Lycabettus",
    desc: "The highest point in Athens and a favourite sunset spot. Hike up or take the funicular.",
    url: "https://maps.app.goo.gl/6kNFPeD7LsEncsR36",
  },
  {
    emoji: "🌿",
    name: "Plaka District",
    desc: "Charming alleys, local taverns and souvenirs — the old heart of Athens.",
    url: "https://maps.app.goo.gl/irBXBQMDpCQGC73P9",
  },
  {
    emoji: "⚖️",
    name: "Ancient Agora",
    desc: "Once the city's political and commercial centre. Don't miss the Temple of Hephaestus.",
    url: "https://maps.app.goo.gl/m6KKAQzFgdFtJoJNA",
  },
  {
    emoji: "🏛️",
    name: "Syntagma Square",
    desc: "In front of Parliament — time your visit for the changing of the guard.",
    url: "https://maps.app.goo.gl/vfGei7Ph6vJG1jfr5",
  },
  {
    emoji: "🛍",
    name: "Monastiraki Flea Market",
    desc: "A bustling market of clothes, antiques and street food.",
    url: "https://maps.app.goo.gl/zXwFEoMJduxDWTKbA",
  },
  {
    emoji: "🎨",
    name: "Psiri Neighbourhood",
    desc: "Colourful murals, local bars and Athenian nightlife.",
    url: "https://maps.app.goo.gl/mWTxQzHDYsnzMLWJ9",
  },
  {
    emoji: "⛪",
    name: "Temple of Olympian Zeus",
    desc: "Massive ancient temple ruins with impressive columns.",
    url: "https://maps.app.goo.gl/WuPkWNPHuMmXdkYe9",
  },
  {
    emoji: "🌳",
    name: "National Garden",
    desc: "A green escape in the city centre, ideal for a peaceful stroll.",
    url: "https://maps.app.goo.gl/VQHEeQGRhRziFo3z6",
  },
];

const bodyP = {
  color: "#a1a1aa",
  fontSize: "1.1rem",
  marginTop: "14px",
  textAlign: "center" as const,
};
const goldLink = {
  color: "#D4AF37",
  textDecoration: "none",
  borderBottom: "1px solid #D4AF37",
  paddingBottom: "3px",
};

export default function TopAthensAttractionsPage() {
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
            href="/guides"
            style={{
              color: "#888",
              textDecoration: "none",
              fontSize: "12px",
              letterSpacing: "1px",
              display: "inline-block",
              marginBottom: "20px",
            }}
          >
            ← ALL GUIDES
          </Link>

          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: "900",
              margin: 0,
            }}
          >
            {pageTitle}
          </h1>

          <p style={bodyP}>
            {
              "These are the landmarks our guests ask about most — the classics that make a first visit to Athens. Each one links straight to Google Maps so you can plan your route."
            }
          </p>
        </header>

        {attractions.map((a, i) => (
          <div key={a.name} style={{ marginTop: "30px", textAlign: "center" }}>
            <p style={{ color: "#a1a1aa", fontSize: "1.1rem" }}>
              <strong>
                {i + 1}. <span aria-hidden="true">{a.emoji}</span> {a.name}
              </strong>{" "}
              — {a.desc}
            </p>
            <p style={{ color: "#a1a1aa", fontSize: "1.1rem", marginTop: "8px" }}>
              <a
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                style={goldLink}
              >
                View on Google Maps
              </a>
            </p>
          </div>
        ))}

        <p style={{ ...bodyP, marginTop: "50px" }}>
          {"Enjoy your stay — and tag us "}
          <a
            href="https://www.instagram.com/athens_urban_vibes"
            target="_blank"
            rel="noopener noreferrer"
            style={goldLink}
          >
            @athens_urban_vibes
          </a>
          {" if you visit them all!"}
        </p>

        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Link href="/guides" style={goldLink}>
            More guides
          </Link>
        </div>
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
