import React, { useState } from "react";
import Navbar from "../Components/Navbar.js";
import ProductAdd from "../Product/ProductAdd.js";

function HomePage({ cart, addToCart }) {

  const [search, setSearch] = useState("");

  return (

    <div>

      <Navbar cartCount={cart.length} setSearch={setSearch} />

      <ProductAdd addToCart={addToCart} search={search} />

    </div>

  );

}

export default HomePage;