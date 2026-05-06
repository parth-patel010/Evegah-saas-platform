"use client";
import { useState } from "react";
import Image from "next/image";
export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch("http://localhost:5000/login", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    alert(data.message);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 w-[450px] text-center">

        {/* Logo */}
        <div className="relative w-60 h-20 mx-auto mb-6">
          <Image
            src="/Evegah_login_page_logo.png"
            alt="Evegah Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl text-black font-semibold mb-6">Login</h2>

        {/* Inputs */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-black w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-black w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-400"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full mt-6 py-3 rounded-xl text-white font-medium bg-gradient-to-r from-purple-500 to-purple-700 hover:opacity-90">
          Login
        </button>

        {/* Footer Links */}
        <div className="mt-6 text-sm text-black flex justify-center gap-2">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>

      </div>
    </div>
  );
}