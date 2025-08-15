import React from "react";
import Products from "../components/Product";

export default function ProductsPage() {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "2rem 0" }}>Our Products</h1>
      <Products />
      <Products />

    </div>
  );
}
