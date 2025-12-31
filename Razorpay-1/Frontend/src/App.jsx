import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products/getProduct")
      .then((response) => {
        setProduct(response.data.product);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, []);

  if (!product) {
    return <div className="loading">Loading product...</div>;
  }

  // paise = inr
  const priceInINR = product.price.amount / 100;

  return (
    <div className="app">
      <div className="product-card">
        <div className="image-box">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="product-info">
          <span className="category">{product.category}</span>

          <h2 className="title">{product.title}</h2>

          <p className="description">{product.description}</p>

          <div className="price">
            ₹{priceInINR.toLocaleString("en-IN")}
            <span> {product.price.currency}</span>
          </div>

          <button
            className="buy-btn"
            onClick={() => alert("Buy Now clicked 🚀")}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
