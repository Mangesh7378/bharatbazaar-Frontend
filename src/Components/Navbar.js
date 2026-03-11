import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ cartCount, setSearch }) {

  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const handleLogout = () => {

    const confirmLogout = window.confirm("Are you sure you want to logout?");

    if(confirmLogout){
      localStorage.removeItem("user");
      navigate("/login");
    }
  };

  const handleSearch = () => {
    setSearch(searchText);
  };

  return (
    <header className="header">

      <div className="logo">
        🛒 <span className="bharat">Bharat</span>
        <span className="bazaar">Bazaar</span>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <ul className="nav-links">

        <li onClick={() => navigate("/home")}>
          <b>Home</b>
        </li>

        <li onClick={() => navigate("/orders")} style={{cursor:"pointer"}}>
          <b>Orders</b>
        </li>

        <li onClick={() => navigate("/cart")} style={{cursor:"pointer"}}>
          <b>Cart ({cartCount})</b>
        </li>

        <li onClick={handleLogout} style={{cursor:"pointer"}}>
          <b>Logout</b>
        </li>

      </ul>

    </header>
  );
}

export default Navbar;