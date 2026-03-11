import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductAdd.css";

function ProductAdd({ addToCart, search }) {

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://bharatbazaar.onrender.com/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  // 🔎 search filtering
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleBuyNow = (product) => {
    navigate("/checkout", { state: { product } });
  };

  return (
    <div className="product-container">

      {filteredProducts.map((product) => (

        <div className="product-card" key={product.id}>

          <img src={product.image} alt={product.name} />

          <h3>{product.name}</h3>

          <p>{product.category}</p>

          <p className="price">₹ {product.price}</p>

          <p className="discount">{product.discount}% OFF</p>

          <div className="product-buttons">

            <button
              className="cart-btn"
              onClick={() => addToCart(product)}
            >
              Add To Cart
            </button>

            <button
              className="buy-btn"
              onClick={() => handleBuyNow(product)}
            >
              Buy Now
            </button>

          </div>

        </div>

      ))}

    </div>
  );
}

export default ProductAdd;