import React from "react";
import Navbar from "./components/Navbar.jsx";
import ProductPage from "./components/ProductPage.jsx";
import NestedCheckbox from "./components/NestedCheckbox.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <ProductPage />
        <section aria-labelledby="nested-title" className="container mt-80">
          <h2 id="nested-title" className="h3 mb-16">Nested Checkbox (Demo)</h2>
          <NestedCheckbox />
        </section>
      </main>
    </>
  );
}