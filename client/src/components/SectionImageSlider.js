import React, { useState, useEffect } from "react";
import "./SectionImageSlider.css";

const images = [
  "/uploads/slider/slide11.jpg",
  "/uploads/slider/slide12.jpg",
  "/uploads/slider/slide13.jpg",
];

export default function SectionImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-fullbox">
      <img
        src={images[current]}
        alt={`Tool ${current + 1}`}
        className="slider-fullimg"
      />
    </div>
  );
}
