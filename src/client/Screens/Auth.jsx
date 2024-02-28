import React, { useState } from "react";
import axios from "axios";

function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [action, setAction] = useState("");

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
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="flex flex-col items-center justify-center h-screen bg-[#23252B]">
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
