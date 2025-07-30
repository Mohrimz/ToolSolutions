import React from "react";

export default function WelcomeSection() {
  return (
    <section style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "#fff",
      borderRadius: "1.2rem",
      boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
      margin: "2rem auto",
      padding: "2rem 2.5rem",
      maxWidth: "1200px",
      minWidth: "320px"
    }}>
      <div style={{ flex: 1, paddingRight: "2rem" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 700, color: "#222", marginBottom: "0.5rem" }}>
          Welcome to <span style={{ color: "#3498db" }}>Tool Solutions</span>
        </h1>
        <div style={{ width: "60px", height: "4px", background: "#3498db", borderRadius: "2px", margin: "0.5rem 0 1.5rem 0" }} />
        <p style={{ fontSize: "1.2rem", color: "#444", marginBottom: "1.2rem" }}>
          Tool Solutions is a leading wholesale supplier of high-quality hand tools in Sri Lanka, trusted by workshops, construction crews, and industrial buyers. We specialize in delivering durable, precision-made tools that meet the demands of professionals across the country.
        </p>
      </div>
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <img
          src="/uploads/welcome.jpg"
          alt="Welcome to Tool Solutions"
          style={{
            width: "100%",
            maxWidth: "420px",
            borderRadius: "1.2rem",
            boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
            objectFit: "cover"
          }}
        />
      </div>
    </section>
  );
} 