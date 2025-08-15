import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./Product.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);
  const [modalDesc, setModalDesc] = useState("");

  useEffect(() => {
    fetch("/products.php")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const openModal = (img, desc) => {
    setModalImage(img);
    setModalDesc(desc);
  };
  const closeModal = () => {
    setModalImage(null);
    setModalDesc("");
  };

  const handleBuyNow = () => {
    const phoneNumber = "+94752441325";
    const message = encodeURIComponent(
      `Hello, I am interested in buying this product: ${modalDesc}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  useEffect(() => {
    const appRoot = document.getElementById("root");
    if (modalImage) {
      appRoot.classList.add("blurred-except-modal");
    } else {
      appRoot.classList.remove("blurred-except-modal");
    }
    return () => appRoot.classList.remove("blurred-except-modal");
  }, [modalImage]);

  const modal = modalImage
    ? ReactDOM.createPortal(
        <div className="modal-overlay no-blur" onClick={closeModal}>
          <div
            className="modal-content no-blur"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={modalImage} alt={modalDesc} className="modal-img" />
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <button className="modal-buy" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>,
        document.body
      )
    : null;

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {modal}
      <section id="products" className="products-section scroll-mt-20">
        <h2 className="products-title">Featured Products</h2>
        <hr className="products-divider" />
        <div className="products-list">
          {products.map((prod) => (
            <div className="product-card" key={prod.id}>
              <img
                src={`/uploads/${prod.image}`}
                alt={prod.description}
                className="product-img"
                onClick={() => openModal(`/uploads/${prod.image}`, prod.description)}
                style={{ cursor: "pointer" }}
              />
              <div className="product-description">{prod.description}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
