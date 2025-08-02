import React from "react";
import { Particles } from "./ui/particles"; // Adjust path if needed
import "./ImageSlider.css";

const images = [
  "/uploads/slider/1.png",
  "/uploads/slider/2.png",
  "/uploads/slider/3.png",
  "/uploads/slider/4.png",
  "/uploads/slider/5.png",
  "/uploads/slider/6.png",
  "/uploads/slider/7.png",
  "/uploads/slider/8.png",
];

const duplicatedImages = [...images, ...images];

export default function WelcomeSection() {
  return (
    <>
      {/* Welcome Content */}
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
          <h1 style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            color: "#222",
            marginBottom: "0.5rem"
          }}>
            Welcome to <span style={{ color: "#3498db" }}>Tool Solutions</span>
          </h1>
          <div style={{
            width: "60px",
            height: "4px",
            background: "#3498db",
            borderRadius: "2px",
            margin: "0.5rem 0 1.5rem 0"
          }} />
          <p style={{ fontSize: "1.2rem", color: "#444", marginBottom: "1.2rem" }}>
            Tool Solutions is a leading wholesale supplier of high-quality hand tools in Sri Lanka, trusted by workshops, construction crews, and industrial buyers. We specialize in delivering durable, precision-made tools that meet the demands of professionals across the country.
          </p>
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            //load image from assets folder
            src={require("../assets/TOOL.jpg")}
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

      {/* Image Slider */}
      <div className="slider-root" style={{
        position: "relative",
        width: "1200px",
        height: "300px",
        margin: "2rem auto",
        overflow: "hidden",
        borderRadius: "1.5rem"
      }}>
        {/* Particles background */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Particles
            className="w-full h-full"
            color="#000000"
            quantity={1000}
          />
        </div>

        <div className="slider-outer" style={{ position: "relative", zIndex: 1, width: "100%", height: "100%" }}>
          <div className="slider-scroll-container">
            <div className="slider-infinite-scroll">
              {duplicatedImages.map((image, index) => (
                <div className="slider-image-item" key={index}>
                  <img
                    src={image}
                    alt={`Gallery image ${(index % images.length) + 1}`}
                    className="slider-img"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
