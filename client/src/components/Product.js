import React from "react";
import "./Product.css";


const products = [
  {
    name: "Bosch Rotary Hammer Drill With Dust Extraction (Dust Collector) GBH 2-23 REA SDS",
    price: "R5.0.000",
    image: "/LGM.png",
    rating: 0
  },
  {
    name: "Bosch Cordless Drill & Driver GSR 12V 15 FC",
    price: "R5.0.000",
    image: "/LGM.png",
    rating: 0
  },
  {
    name: "MINI SAW MULTI FUNCTION SAW WITH GUIDE BAR & WOOD, TILE, METAL",
    price: "R5.0.000",
    image: "/LGM.png",
    rating: 0
  },
  {
    name: "Electric Grass Trimmer STIHL FSE52 STS 4816 011 4100",
    price: "R5.0.000",
    image: "/LGM.png",
    rating: 0
  },
  {
    name: "Stihl Brush Cutter Flexible Shaft FR3001 STS 4145 011 3301",
    price: "R5.0.000",
    image: "/LGM.png",
    rating: 0
  },
  {
    name: "Battery Charger CB 20 Battery Charger 12V/24V",
    price: "R5.11,000.000",
    image: "/LGM.png",
    rating: 0
  },
  {
    name: "Professional Angle Grinder GWS 850 CE",
    price: "R5.8,000",
    image: "/LGM.png",
    rating: 0
  },
  {
    name: "Heavy Duty Hammer Drill GBH 2-26 DFR",
    price: "R5.15,000",
    image: "/LGM.png",
    rating: 0
  }
];



export default function Products() {
  return (
    <section id="products" className="products-section scroll-mt-20">
      <h2 className="products-title">
        Featured Products
      </h2>
      <hr className="products-divider" />
      <div className="products-list">
        {products.map((prod, idx) => (
          <div className="product-card" key={idx}>
            <img src={prod.image} alt={prod.name} className="product-img" />
            <div className="product-price">{prod.price}</div>
            <div className="product-rating">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="star">&#9733;</span>
              ))}
            </div>
            <div className="product-name">{prod.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}