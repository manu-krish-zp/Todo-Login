import React, { useState } from "react";

const Login = (props) => {
  const [name,setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (event) =>{
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    //Login API Call
    props.setIsLoggedIn(true);
  
  };

  const handleRegistration = (event) => {
    event.preventDefault();
    //Registration API Call
    alert("Registration successfull!");
    };

  return (
    <form className="login">
      <input placeholder="Name" onChange={handleName} type="text"/>
      <input placeholder="Email" onChange={handleEmailChange} type="email"/>
      <input placeholder="Password" onChange={handlePasswordChange} type="password"/>
      <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleRegistration}>Sign up</button>
      </div>
    </form>
  );
};

export default Login;
