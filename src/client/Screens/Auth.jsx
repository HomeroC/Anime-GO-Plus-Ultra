import React from "react";

function Auth() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#23252B]">
      <input
        type="text"
        placeholder="Username"
        className="px-4 py-2 mb-4 border rounded-md"
      />
      <input
        type="password"
        placeholder="Password"
        className="px-4 py-2 mb-4 border rounded-md"
      />
      <button className="login px-4 py-2 mb-4">
        <a href="/login">Login</a>
      </button>
      <button className="sign-up px-4 py-2">
        <a href="/signup">Sign Up</a>
      </button>
    </div>
  );
}

export default Auth;
