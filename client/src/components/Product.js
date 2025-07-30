import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./Product.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
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

  const openModal = (img) => setModalImage(img);
  const closeModal = () => setModalImage(null);

  // Blur the whole app background except the modal when modal is open
  useEffect(() => {
    const appRoot = document.getElementById('root');
    if (modalImage) {
      appRoot.classList.add('blurred-except-modal');
    } else {
      appRoot.classList.remove('blurred-except-modal');
    }
    return () => appRoot.classList.remove('blurred-except-modal');
  }, [modalImage]);

  const modal = modalImage ? ReactDOM.createPortal(
    <div className="modal-overlay no-blur" onClick={closeModal}>
      <div className="modal-content no-blur" onClick={e => e.stopPropagation()}>
        <img src={modalImage} alt="Product" className="modal-img" />
        <button className="modal-close" onClick={closeModal}>&times;</button>
        <button className="modal-buy">Buy Now</button>
      </div>
    </div>,
    document.body
  ) : null;

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
            <div className="product-card" key={prod._id}>
              <img src={prod.image} alt={prod.description} className="product-img" onClick={() => openModal(prod.image)} style={{ cursor: 'pointer' }} />
              <div className="product-description">{prod.description}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}