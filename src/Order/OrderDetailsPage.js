import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function OrderDetailsPage() {

  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product;

  const [name,setName] = useState("");
  const [address,setAddress] = useState("");
  const [district,setDistrict] = useState("");
  const [pincode,setPincode] = useState("");
  const [upi,setUpi] = useState("");

  const handlePayment = async () => {

    if(!name || !address || !district || !pincode){
      alert("Please fill all details");
      return;
    }

    try{

      const response = await fetch("https://bharatbazaar-1.onrender.com/api/orders",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          productName: product.name,
          price: product.price,
          quantity: 1,
          image: product.image,
          customerName: name,
          address: address,
          district: district,
          pincode: pincode,
          upiId: upi
        })
      });

      if(response.ok){
        navigate("/order-success");
      }else{
        alert("Order Failed");
      }

    }catch(error){
      console.error(error);
      alert("Server Error");
    }

  };

  return (

    <div style={{textAlign:"center",marginTop:"40px"}}>

      <h2>Delivery Details</h2>

      <input placeholder="Full Name" onChange={(e)=>setName(e.target.value)}/>
      <br/><br/>

      <input placeholder="Address" onChange={(e)=>setAddress(e.target.value)}/>
      <br/><br/>

      <input placeholder="District" onChange={(e)=>setDistrict(e.target.value)}/>
      <br/><br/>

      <input placeholder="Pincode" onChange={(e)=>setPincode(e.target.value)}/>
      <br/><br/>

      <input placeholder="UPI ID (optional)" onChange={(e)=>setUpi(e.target.value)}/>
      <br/><br/>

      <button
        style={{
          background:"green",
          color:"white",
          padding:"10px 20px",
          border:"none",
          cursor:"pointer"
        }}
        onClick={handlePayment}
      >
        Pay Now
      </button>

    </div>
  );
}

export default OrderDetailsPage;
