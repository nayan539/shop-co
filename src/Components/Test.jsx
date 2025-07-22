import React, { useState } from "react";

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 25 },
  { id: 3, name: "Product 3", price: 40 },
  { id: 4, name: "Product 4", price: 60 },
  { id: 5, name: "Product 5", price: 80 },
];

export default function PriceRangeFilter() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);

  const filteredProducts = products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Filter Products by Price Range</h2>
      <div style={styles.rangeContainer}>
        <input
          type="range"
          min="0"
          max="100"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          style={styles.rangeInput}
        />
        <input
          type="range"
          min="0"
          max="100"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          style={styles.rangeInput}
        />
      </div>
      <div style={styles.priceDisplay}>
        <span>Min Price: ${minPrice}</span>
        <span>Max Price: ${maxPrice}</span>
      </div>
      <div style={styles.productsContainer}>
        {filteredProducts.length === 0 ? (
          <p style={styles.noProductsText}>No products found in this range.</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} style={styles.productCard}>
              <h3 style={styles.productName}>{product.name}</h3>
              <p style={styles.productPrice}>${product.price.toFixed(2)}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 480,
    margin: "2rem auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "1rem",
    backgroundColor: "#f7f9fc",
    borderRadius: 8,
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    color: "#333",
    marginBottom: "1.5rem",
  },
  rangeContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
    marginBottom: 24,
  },
  rangeInput: {
    width: "100%",
  },
  priceDisplay: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  productsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  productCard: {
    backgroundColor: "#fff",
    padding: "12px 16px",
    borderRadius: 6,
    boxShadow: "0 1px 6px rgba(0,0,0,0.1)",
    display: "flex",
    justifyContent: "space-between",
  },
  productName: {
    margin: 0,
    fontWeight: "600",
    color: "#222",
  },
  productPrice: {
    margin: 0,
    fontWeight: "700",
    color: "#1976d2",
  },
  noProductsText: {
    textAlign: "center",
    fontStyle: "italic",
    color: "#999",
  },
};
