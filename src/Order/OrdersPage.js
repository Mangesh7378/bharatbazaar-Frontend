import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";

function OrdersPage() {

  const [orders, setOrders] = useState([]);

  // Fetch orders from backend
  useEffect(() => {

    fetch("https://bharatbazaar.onrender.com/api/orders")
      .then(res => res.json())
      .then(data => setOrders(data))
      .catch(err => console.error(err));

  }, []);

  // Cancel order function
  const cancelOrder = async (id) => {

    const confirmCancel = window.confirm("Are you sure you want to cancel this order?");
    if(!confirmCancel) return;

    try{

      const response = await fetch(`https://bharatbazaar.onrender.com/api/orders/${id}`,{
        method:"DELETE"
      });

      if(response.ok){

        // Remove order from UI
        setOrders(prevOrders =>
          prevOrders.filter(order => order.id !== id)
        );

        alert("Order Cancelled Successfully");

      }else{
        alert("Failed to cancel order");
      }

    }catch(error){
      console.error(error);
    }

  };

  return (

    <div>

      <Navbar cartCount={0}/>

      <h2 style={{textAlign:"center", marginTop:"20px"}}>Your Orders</h2>

      <div className="product-container">

        {orders.length === 0 && (
          <h3 style={{textAlign:"center"}}>No Orders Yet</h3>
        )}

        {orders.map((item) => (

          <div className="product-card" key={item.id}>

            <img src={item.image} alt={item.productName} />

            <h3>{item.productName}</h3>

            <p>₹ {item.price}</p>

            <p><b>Name:</b> {item.customerName}</p>

            <p><b>Address:</b> {item.address}</p>

            <p><b>District:</b> {item.district}</p>

            <p><b>Pincode:</b> {item.pincode}</p>

            <button
              style={{
                background:"red",
                color:"white",
                padding:"8px 15px",
                border:"none",
                cursor:"pointer",
                marginTop:"10px"
              }}
              onClick={() => cancelOrder(item.id)}
            >
              Cancel Order
            </button>

          </div>

        ))}

      </div>

    </div>

  );

}

export default OrdersPage;