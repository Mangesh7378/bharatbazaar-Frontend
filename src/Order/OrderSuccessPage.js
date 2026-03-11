import React from "react";
import { useNavigate } from "react-router-dom";

function OrderSuccessPage(){

  const navigate = useNavigate();

  return(

    <div style={{textAlign:"center",marginTop:"100px"}}>

      <h1>✅ Order Placed Successfully</h1>

      <p>Your payment was successful.</p>

      <p>Your order will be delivered soon.</p>

      <button
        style={{
          marginTop:"20px",
          padding:"12px 25px",
          background:"orange",
          border:"none",
          cursor:"pointer"
        }}
        onClick={()=>navigate("/orders")}
      >
        View Orders
      </button>

    </div>

  );

}

export default OrderSuccessPage;