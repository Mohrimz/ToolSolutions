import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import { Footer } from "./components/Footer";

// Lazy-load pages for smaller initial bundles
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const NotFound = lazy(() => import("./pages/NotFound")); // create a simple 404 page

function App() {
  return (
    <Router>
      {/* Accessible skip link to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:p-2 focus:ring"
      >
        Skip to content
      </a>

      <Header />

      {/* Suspense boundary for lazy routes */}
      <Suspense fallback={<div role="status" aria-live="polite" style={{ padding: 16 }}>Loading…</div>}>
        {/* Main landmark with programmatic focus target for skip link */}
        <main id="main-content" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Optional: support /home by redirecting to / */}
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* 404 catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
