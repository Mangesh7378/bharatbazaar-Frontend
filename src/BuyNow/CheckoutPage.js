import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

function CheckoutPage() {

  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  if (!product) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h2>No product selected</h2>
      </div>
    );
  }

  const handlePlaceOrder = () => {
    navigate("/order-details", { state: { product } });
  };

  return (
    <div>

      <Navbar cartCount={0} />

      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Checkout</h2>

      <div style={{
        textAlign: "center",
        marginTop: "40px",
        border: "1px solid #ddd",
        padding: "30px",
        width: "300px",
        margin: "auto",
        background: "white"
      }}>

        <img src={product.image} alt={product.name} width="200"/>

        <h3>{product.name}</h3>

        <p>{product.category}</p>

        <p style={{ fontWeight: "bold" }}>₹ {product.price}</p>

        <button
          style={{
            background: "green",
            color: "white",
            padding: "12px 25px",
            border: "none",
            cursor: "pointer",
            marginTop: "15px"
          }}
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>

      </div>

    </div>
  );
}

export default CheckoutPage;