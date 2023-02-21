import React, { useEffect, useRef } from "react";
import Home from "./Home";
// import { useNavigate } from "react-router-dom";

const Login = () => {

    const username=useRef();
    const password=useRef();
    // const navigate=useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("token")){
            // navigate("/")
            
        }
    },[])

    function login(){
        if(!username.current.value||!password.current.value){
            window.alert('Both the fields are required');
        }
        else{
            localStorage.setItem("token","userToken");
            // navigate("/")
            <Home/>
        }
    }

  return (
    <>
    <div
      className=""
      style={{ height: "100vh" }}
    >
       <h1>Login</h1>
       <form action="#" >
        <input
        ref={username}
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          className="mt-4 w-50"
        />
         <input
         ref={password}
         type="password"
         className="mt-4 w-50"
          placeholder="Password"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <button onClick={login}>
            Continue to the application
        </button>
        </form>
    </div>
    </>
  );
};

export default Login;

