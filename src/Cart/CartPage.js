import React from "react";
import Navbar from "../Components/Navbar";

function CartPage({ cart, setCart }) {

  const removeFromCart = (index) => {

    const updatedCart = cart.filter((item,i)=> i !== index);

    setCart(updatedCart);

  };

  return (

    <div>

      <Navbar cartCount={cart.length} />

      <h2 style={{textAlign:"center"}}>Your Cart</h2>

      <div className="product-container">

        {cart.map((item,index)=>(

          <div className="product-card" key={index}>

            <img src={item.image} alt="" />

            <h3>{item.name}</h3>

            <p>{item.category}</p>

            <p>₹ {item.price}</p>

            <div style={{display:"flex",gap:"10px",justifyContent:"center"}}>

              <button
                style={{
                  background:"#e74c3c",
                  color:"white",
                  border:"none",
                  padding:"8px 15px",
                  cursor:"pointer"
                }}
                onClick={()=>removeFromCart(index)}
              >
                Remove
              </button>

              <button
                style={{
                  background:"#f39c12",
                  color:"white",
                  border:"none",
                  padding:"8px 15px",
                  cursor:"pointer"
                }}
              >
                Buy Now
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default CartPage;