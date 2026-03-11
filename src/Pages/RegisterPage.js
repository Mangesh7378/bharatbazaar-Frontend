import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";

function RegisterPage() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {

    try {

      const response = await fetch("https://bharatbazaar-1.onrender.com/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password
        })
      });

      const data = await response.text();

      if (data === "Registration successful") {
        navigate("/home");
      } else {
        alert(data);
      }

    } catch (error) {
      alert("Server error. Please try again.");
      console.error(error);
    }

  };

  return (

    <div className="register-container">

      <h1 className="brand-logo">
        <span className="bharat">Bharat </span>
        <span className="bazaar">Bazaar</span>
      </h1>

      <div className="register-card">

        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={registerUser}>Sign Up</button>

        <p>
          Already have an account?
          <span
            className="login-link"
            onClick={() => navigate("/")}
          >
            {" "}Login
          </span>
        </p>

      </div>

    </div>

  );

}

export default RegisterPage;
