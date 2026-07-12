import type { Metadata } from "next";
import Link from "next/link";
import { ARTICLES } from "./articles";

const title = "Athens Guides by Your Host — Athens Urban Vibes";
const description =
  "Practical, honest Athens guides from the Athens Urban Vibes host — getting here, choosing your apartment, car-free stays and more. Every fact verified.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/guides",
  },
  openGraph: {
    title,
    description,
    url: "/guides",
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
  ],
};

const cards = [
  ...ARTICLES.map((a) => ({
    href: `/guides/${a.slug}`,
    title: a.title,
    teaser: a.description,
  })),
  {
    href: "/victoria-athens-guide",
    title: "Staying Near Victoria Metro — An Honest Local Guide",
    teaser:
      "An honest local guide to the Victoria area of central-north Athens, where Miron 18 sits — a 7-minute walk from Victoria metro station (Metro Line 1), with self check-in available 24/7. A genuine residential neighbourhood, not a tourist district.",
  },
  {
    href: "/host-recommendations",
    title: "Host Recommendations — Our Favorite Spots",
    teaser:
      "Real, personal recommendations from your Athens Urban Vibes host — favorite cafés, restaurants, and bars we genuinely return to in Athens.",
  },
];

export default function GuidesHubPage() {
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
            Athens Guides by Your Host
          </h1>

          <p style={{ color: "#a1a1aa", marginTop: "14px", fontSize: "1.1rem" }}>
            {
              "Practical, honest guides written by us, the hosts of Athens Urban Vibes — covering how to get here, how to choose the right apartment, and how to enjoy Athens the way we do. Every fact in these guides is verified before we publish it."
            }
          </p>
        </header>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {cards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
            >
              <div
                style={{
                  backgroundColor: "#141414",
                  borderRadius: "18px",
                  overflow: "hidden",
                  border: "1px solid #27272a",
                  padding: "22px",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                  cursor: "pointer",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.5rem",
                    margin: "0 0 12px",
                    lineHeight: 1.2,
                  }}
                >
                  {c.title}
                </h2>
                <p
                  style={{
                    color: "#a1a1aa",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {c.teaser}
                </p>
              </div>
            </Link>
          ))}
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
