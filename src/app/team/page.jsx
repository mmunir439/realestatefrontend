import React from "react";
import Header from "@/components/Header";
const members = [
  {
    name: "Ali Khan",
    role: "Founder & CEO",
    phone: "+92 300 1234567",
    whatsapp: "923001234567",
    bio: "Leads strategy and client relations with 10+ years experience in real estate.",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Ayesha Siddiqui",
    role: "Head of Sales",
    phone: "+92 321 7654321",
    whatsapp: "923217654321",
    bio: "Experienced sales lead helping clients find their dream properties.",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Farhan Raza",
    role: "Marketing Director",
    phone: "+92 312 5678901",
    whatsapp: "923125678901",
    bio: "Manages brand campaigns and digital marketing for property listings.",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Sana Qureshi",
    role: "Property Manager",
    phone: "+92 333 9876543",
    whatsapp: "923339876543",
    bio: "Oversees day-to-day property operations and ensures client satisfaction.",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
  },
  {
    name: "Imran Malik",
    role: "Legal & Compliance",
    phone: "+92 300 3456789",
    whatsapp: "923003456789",
    bio: "Handles contracts, legal compliance, and property documentation.",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
  },
  {
    name: "Hina Ahmed",
    role: "Client Success",
    phone: "+92 321 1122334",
    whatsapp: "92321122334",
    bio: "Ensures smooth onboarding and long-term client satisfaction.",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
    image: "https://randomuser.me/api/portraits/women/88.jpg",
  },
];

export default function TeamPage() {
  return (
    <>
      <Header />
      <main
        style={{
          padding: "2rem",
          fontFamily:
            "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      }}
        >   
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>Our Team</h1>
      <p
        style={{
          textAlign: "center",
          color: "#555",
          maxWidth: 900,
          margin: "0 auto 2rem",
        }}
      >
        Meet our professional real estate team based in Pakistan. Contact us via
        phone or WhatsApp to discuss your property needs.
      </p>

      <div
        className="team-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.25rem",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {members.map((m) => (
          <article
            key={m.name}
            style={{
              textAlign: "center",
              padding: "1rem",
              borderRadius: 8,
              background: "#fff",
              boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
            }}
          >
            <img
              src={m.image}
              alt={m.name}
              style={{
                width: 120,
                height: 120,
                objectFit: "cover",
                borderRadius: "50%",
                display: "block",
                margin: "0 auto 0.75rem",
              }}
            />
            <h3 style={{ margin: "0.25rem 0" }}>{m.name}</h3>
            <div
              style={{
                color: "#666",
                fontSize: "0.95rem",
                marginBottom: "0.5rem",
              }}
            >
              {m.role}
            </div>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#444",
                marginBottom: "0.75rem",
              }}
            >
              {m.bio}
            </p>

            <div
              style={{
                fontSize: "0.9rem",
                color: "#222",
                marginBottom: "0.5rem",
              }}
            >
              <a
                href={`tel:${m.phone}`}
                style={{ color: "#0b5cff", textDecoration: "none" }}
              >
                {m.phone}
              </a>
              <span style={{ margin: "0 6px", color: "#888" }}>•</span>
              <a
                href={`https://wa.me/${m.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#25D366", textDecoration: "none" }}
              >
                WhatsApp
              </a>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0A66C2" }}
              >
                LinkedIn
              </a>
              <a
                href={m.twitter}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#1DA1F2" }}
              >
                Twitter
              </a>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        .team-grid { padding: 0 1rem; }
        @media (max-width: 900px) {
          .team-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .team-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
    </>
  );
}
