import React from "react";
import Products from "../components/Product";
import Products2 from "../components/Product2";
import Products3 from "../components/Product3";
import Products4 from "../components/Product4";
import Products5 from "../components/Product5";

export default function ProductsPage() {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "2rem 0" }}>Our Products</h1>
      <Products />
      <Products2 />
      <Products3 />
      <Products4 />
      <Products5 />

    </div>
  );
}
