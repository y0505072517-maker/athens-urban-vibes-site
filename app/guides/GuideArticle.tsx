import Link from "next/link";
import type { Article } from "./articles";

// Render inline **bold** markers as <strong>; everything else stays plain text.
function renderInline(text: string) {
  return text.split("**").map((seg, i) =>
    i % 2 === 1 ? <strong key={i}>{seg}</strong> : seg
  );
}

export function GuideArticle({ article }: { article: Article }) {
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
        name: article.title,
        item: `https://www.athensurbanvibes.com/guides/${article.slug}`,
      },
    ],
  };

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
            {article.title}
          </h1>
        </header>

        {article.blocks.map((block, i) => {
          if (block.type === "h2") {
            return (
              <h2
                key={i}
                style={{
                  fontSize: "1.5rem",
                  margin: "50px 0 0",
                  lineHeight: 1.2,
                  textAlign: "center",
                }}
              >
                {renderInline(block.text)}
              </h2>
            );
          }
          if (block.type === "ul") {
            return (
              <ul
                key={i}
                style={{
                  listStyle: "none",
                  margin: "14px 0 0",
                  padding: 0,
                  textAlign: "center",
                }}
              >
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    style={{
                      color: "#a1a1aa",
                      fontSize: "1.1rem",
                      marginTop: j === 0 ? "0" : "8px",
                    }}
                  >
                    {renderInline(item)}
                  </li>
                ))}
              </ul>
            );
          }
          if (block.type === "plink") {
            return (
              <p
                key={i}
                style={{
                  color: "#a1a1aa",
                  fontSize: "1.1rem",
                  marginTop: "14px",
                  textAlign: "center",
                }}
              >
                {renderInline(block.before)}
                <Link
                  href={block.href}
                  style={{
                    color: "#D4AF37",
                    textDecoration: "none",
                    borderBottom: "1px solid #D4AF37",
                    paddingBottom: "3px",
                  }}
                >
                  {block.linkText}
                </Link>
                {renderInline(block.after)}
              </p>
            );
          }
          return (
            <p
              key={i}
              style={{
                color: "#a1a1aa",
                fontSize: "1.1rem",
                marginTop: "14px",
                textAlign: "center",
              }}
            >
              {renderInline(block.text)}
            </p>
          );
        })}

        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Link
            href="/guides"
            style={{
              color: "#D4AF37",
              textDecoration: "none",
              borderBottom: "1px solid #D4AF37",
              paddingBottom: "3px",
            }}
          >
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
