import type { Metadata } from "next";
import Link from "next/link";

const pageTitle = "Nearby Essentials at Miron 18";
const description =
  "Pharmacies, bakeries, supermarkets, transport and a recommended taxi driver — the handy everyday spots near Miron 18, from your Athens Urban Vibes host.";
const title = "Nearby Essentials at Miron 18 — Athens Urban Vibes";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/guides/nearby-essentials",
  },
  openGraph: {
    title,
    description,
    url: "/guides/nearby-essentials",
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
      item: "https://www.athensurbanvibes.com/guides/nearby-essentials",
    },
  ],
};

const bodyP = {
  color: "#a1a1aa",
  fontSize: "1.1rem",
  marginTop: "14px",
  textAlign: "center" as const,
};
const h2Style = {
  fontSize: "1.5rem",
  margin: "50px 0 0",
  lineHeight: 1.2,
  textAlign: "center" as const,
};
const goldLink = {
  color: "#D4AF37",
  textDecoration: "none",
  borderBottom: "1px solid #D4AF37",
  paddingBottom: "3px",
};

export default function NearbyEssentialsPage() {
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
              "To help you settle in quickly, here's a friendly guide to the handy everyday spots near your apartment at Miron 18 — everything you need for a comfortable start to your Athens stay."
            }
          </p>
        </header>

        <h2 style={h2Style}>
          <span aria-hidden="true">💊</span> Pharmacies
        </h2>
        <p style={bodyP}>
          {
            "Several pharmacies are within easy walking distance of Miron 18, the nearest just a short walk away. In Greece there is always a duty pharmacy open, even overnight and on holidays — if one is closed, a notice on the door points you to the nearest one currently on duty. Your smartphone map will show the closest option at any given time."
          }
        </p>

        <h2 style={h2Style}>
          <span aria-hidden="true">🥐</span> Bakeries
        </h2>
        <p style={bodyP}>
          {
            "For fresh bread and pastries, the local bakery is only about 160 metres away — a 2-minute stroll. A few more bakeries and cafés are a short walk beyond that if you'd like to explore."
          }
        </p>

        <h2 style={h2Style}>
          <span aria-hidden="true">🛒</span> Supermarkets
        </h2>
        <p style={bodyP}>
          {
            "For groceries and essentials, BAZAAR supermarket is the closest — about 74 metres from your door. Larger chains such as AB Vasilopoulos (Shop & Go) and other options are also a short walk away."
          }
        </p>

        <h2 style={h2Style}>
          <span aria-hidden="true">🚇</span> Metro
        </h2>
        <p style={bodyP}>
          {
            "Victoria Metro Station (Line 1) is a verified 7-minute walk from Miron 18 — your main connection across the city. Attiki Station (Lines 1 and 2) is also within walking distance, a little further on. For step-by-step directions from the airport, see our "
          }
          <Link href="/guides/getting-to-miron-18" style={goldLink}>
            Getting to Miron 18 guide
          </Link>
          .
        </p>

        <h2 style={h2Style}>
          <span aria-hidden="true">🚌</span> Buses
        </h2>
        <p style={bodyP}>
          {
            "Local bus stops are within a short walk, and the Attica KTEL terminal — for trips outside the city — is nearby as well. Your map app will show live routes and times."
          }
        </p>

        <h2 style={h2Style}>
          <span aria-hidden="true">🚖</span> Taxis & Our Recommended Driver
        </h2>
        <p style={bodyP}>
          {
            "For getting around, the FREE NOW and Uber apps both work well in Athens — both connect you to licensed taxis. And if you'd like to arrange an airport pick-up in advance, we're happy to recommend Nectarius, a courteous and reliable driver we personally use."
          }
        </p>
        <p style={{ color: "#a1a1aa", fontSize: "1.1rem", marginTop: "8px", textAlign: "center" }}>
          {"Nectarius — +30 698 081 6461"}
        </p>

        <p style={{ ...bodyP, marginTop: "50px" }}>
          {
            "We hope this helps you feel at home quickly. Anything you need, just ask — we're always happy to help make your stay comfortable."
          }
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
