"use client";
import Link from 'next/link';
import React from 'react';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from 'next-auth/react';


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-bold mb-2">Username</label>
          <input onChange={e=>setUsername(e.target.value)} type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="Enter your username" />
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-2">Password</label>
          <input onChange={e=>setPassword(e.target.value)} type="password" className="w-full px-3 py-2 border rounded-lg" placeholder="Enter password" />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600">Login</button>

        {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

        <Link href="/signup" className="text-teal-400 hover:underline">Don't have an account? Register Now</Link>
      </form>
    </div>
  );
};

export default Login;