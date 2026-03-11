import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {

const navigate = useNavigate();

const [name,setName] = useState("");
const [password,setPassword] = useState("");

const loginUser = async () => {

const response = await fetch("https://bharatbazaar.onrender.com/api/login",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name:name,
password:password
})
});

const data = await response.text();

if(data === "Login successful"){
navigate("/home");
}else{
alert(data);
}

};

return(

<div className="login-container">

<h1 className="brand-logo">
<span className="bharat">Bharat</span>
<span className="bazaar">Bazaar</span>
</h1>

<div className="login-card">

<h2>Log in</h2>

<input
type="text"
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={loginUser}>Login</button>

<p>
Don't have an account? 
<span
className="signup"
onClick={()=>navigate("/register")}
>
 Sign Up
</span>
</p>

</div>

</div>

);

}

export default LoginPage;