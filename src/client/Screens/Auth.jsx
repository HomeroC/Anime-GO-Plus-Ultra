import React, { useState, useContext } from "react";
import  AuthContext  from "../state/AuthContext.jsx";
import axios from "axios";


function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [action, setAction] = useState("");
  const {dispatch} = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      username,
      password,
    };
    if (action === "Sign Up") {
      axios
        .post("/signup", body)
        .then((res) => {
          console.log(res);
          alert("User created successfully, you may now login!");
        })
        .catch((err) => {
          console.log(err);
          alert("User already exists");
        });
    } else if (action === "Login") {
      axios
        .post("/login", body)
        .then((res) => {
          console.log(res.data)
         localStorage.setItem("token", res.data.token);
          dispatch({ type: "LOGIN", payload: res.data });
          window.location.href = "/home";
        })
        .catch((err) => {
          console.log(err);
          alert("Invalid username or password");
        });
    }
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="flex flex-col items-center justify-center h-screen bg-[#23252B]">
        <h1 className="text-[#F57621]">Welcome to Anime GO "Plus Ultra"!</h1>
        <h2 className="text-white mb-20">
          Please Login or Sign up to continue!
        </h2>
        <label className="text-[#F57621] text-lg" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="px-4 py-2 mb-4 border rounded-md"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="text-[#F57621] text-lg" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="px-4 py-2 mb-4 border rounded-md"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="">
          <button
            className="text-white px-4 py-2 mb-4 w-40"
            onClick={() => setAction("Login")}
          >
            Login
          </button>
          <span className="text-white mx-4">or</span>
          <button
            className="sign-up px-4 py-2"
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
}

export default Auth;
