import React, { useState, useContext } from "react";
import  AuthContext  from "../state/AuthContext.jsx";
import axios from "axios";


function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [action, setAction] = useState("");
  const [token, setToken] = useState("");
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
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (action === "Login") {
      axios
        .post("/login", body)
        .then((res) => {
          console.log(res);
         localStorage.setItem("token", res.data.token);
          dispatch({ type: "LOGIN", payload: res.data });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="flex flex-col items-center justify-center h-screen bg-[#23252B]">
        <h1 className="text-[#F57621]">Welcome to Anime GO "Plus Ultra"!</h1>
        <h2 className="text-white mb-20">Please Login or Sign up to continue!</h2>
        <input
          type="text"
          placeholder="Username"
          className="px-4 py-2 mb-4 border rounded-md"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
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
