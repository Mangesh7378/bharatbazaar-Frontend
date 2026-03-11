import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import HomePage from "./Home/HomePage";
import CartPage from "./Cart/CartPage";
import CheckoutPage from "./BuyNow/CheckoutPage";

import OrdersPage from "./Order/OrdersPage";
import OrderDetailsPage from "./Order/OrderDetailsPage";
import OrderSuccessPage from "./Order/OrderSuccessPage";

function App() {

  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const placeOrder = (product) => {
    setOrders([...orders, product]);
  };

  const cancelOrder = (index) => {
    const updatedOrders = orders.filter((_, i) => i !== index);
    setOrders(updatedOrders);
  };

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/home"
          element={<HomePage cart={cart} addToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={<CartPage cart={cart} setCart={setCart} />}
        />

        <Route
          path="/checkout"
          element={<CheckoutPage />}
        />

        <Route
          path="/order-details"
          element={<OrderDetailsPage placeOrder={placeOrder} />}
        />

        <Route
          path="/order-success"
          element={<OrderSuccessPage />}
        />

        <Route
          path="/orders"
          element={<OrdersPage orders={orders} cancelOrder={cancelOrder} />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;