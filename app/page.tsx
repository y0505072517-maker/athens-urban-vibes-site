"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        backgroundColor: "#0a0a0a",
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "sans-serif",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <header
          style={{
            textAlign: "center",
            marginBottom: "60px",
            paddingTop: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: 900,
              letterSpacing: "1px",
              textTransform: "uppercase",
              margin: 0,
              lineHeight: 1,
            }}
          >
            Experience <span style={{ color: "#D4AF37" }}>Athens</span>
          </h1>

          <p
            style={{
              color: "#e5e5e5",
              fontSize: "clamp(1.1rem, 2vw, 1.8rem)",
              marginTop: "24px",
              fontStyle: "italic",
            }}
          >
            Find your perfect stay in the heart of Greece
          </p>
        </header>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
            alignItems: "stretch",
          }}
        >
          <Link
            href="/athens-urban-vibes"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "block",
            }}
          >
            <div
              style={{
                position: "relative",
                minHeight: "360px",
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid rgba(212,175,55,0.35)",
                backgroundColor: "#111",
                cursor: "pointer",
                boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
              }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  pointerEvents: "none",
                }}
              >
                <source src="/miron.mp4" type="video/mp4" />
              </video>

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.30), rgba(0,0,0,0.88))",
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "36px",
                  pointerEvents: "none",
                }}
              >
                <h2
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.4rem)",
                    fontWeight: 900,
                    margin: 0,
                    lineHeight: 1.05,
                  }}
                >
                  Athens <span style={{ color: "#D4AF37" }}>Urban Vibes</span>
                </h2>

                <p
                  style={{
                    color: "#f1f1f1",
                    fontSize: "1rem",
                    lineHeight: 1.6,
                    marginTop: "20px",
                    marginBottom: "28px",
                    maxWidth: "600px",
                  }}
                >
                  Curated city living at Miron 18. Modern, vibrant, and fully
                  renovated boutique apartments.
                </p>

                <div
                  style={{
                    color: "#D4AF37",
                    fontWeight: 800,
                    fontSize: "13px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    display: "inline-block",
                    borderBottom: "1px solid #D4AF37",
                    paddingBottom: "4px",
                    width: "fit-content",
                  }}
                >
                  Explore Collection →
                </div>
              </div>
            </div>
          </Link>

          <Link
            href="/athenian-sky-retreat"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "block",
            }}
          >
            <div
              style={{
                position: "relative",
                minHeight: "360px",
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid rgba(212,175,55,0.2)",
                cursor: "pointer",
                boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
                backgroundImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.85)), url('/retreat.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "36px",
                  pointerEvents: "none",
                }}
              >
                <h2
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.4rem)",
                    fontWeight: 900,
                    margin: 0,
                    lineHeight: 1.05,
                  }}
                >
                  Athenian <span style={{ color: "#D4AF37" }}>Sky Retreat</span>
                </h2>

                <p
                  style={{
                    color: "#f1f1f1",
                    fontSize: "1rem",
                    lineHeight: 1.6,
                    marginTop: "20px",
                    marginBottom: "28px",
                    maxWidth: "600px",
                  }}
                >
                  Elevated luxury with breathtaking views. Premium suites above
                  the city.
                </p>

                <div
                  style={{
                    color: "#D4AF37",
                    fontWeight: 800,
                    fontSize: "13px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    display: "inline-block",
                    backgroundColor: "rgba(0,0,0,0.35)",
                    padding: "8px 14px",
                    borderRadius: "12px",
                    width: "fit-content",
                  }}
                >
                  Coming Soon
                </div>
              </div>
            </div>
          </Link>
        </section>
      </div>
    </main>
  );
}