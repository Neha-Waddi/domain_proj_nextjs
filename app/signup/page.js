"use client"
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

export default function Signup(){

  const [username, setUsername] = useState("");
  const [domainName, setDomainName] = useState("");
  const [url, setUrl] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit=async(e)=>{

    e.preventDefault();

    if(!username || !domainName || !url || !password || !confirmPassword ){
      setError("Please fill all the fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try{
      const res=await fetch('/api/signup',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({
          username,
          domainName,
          url,
          password,
          confirmPassword,
          }),
      });

      if(res.ok){
        const form=e.target;
        form.reset();
        setUsername("");
        setDomainName("");
        setUrl("");
        setPassword("");
        setconfirmPassword("");
        setError("");
      }
      else{
        setError("user registration failed")
      }
    }catch(error){
      set("error during registration",error)
    }


  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-2">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700 font-bold mb-2">Username</label>
          <input type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="Enter your username" onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">Domain Name</label>
          <input type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="Enter your domain name"  onChange={(e)=>setDomainName(e.target.value)}/>
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">URL</label>
          <input type="url" className="w-full px-3 py-2 border rounded-lg" placeholder="Enter URL"  onChange={(e)=>setUrl(e.target.value)}/>
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">Password</label>
          <input type="password" className="w-full px-3 py-2 border rounded-lg" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">confirm Password</label>
          <input type="password" className="w-full px-3 py-2 border rounded-lg" placeholder="confirm your password"  onChange={(e)=>setconfirmPassword(e.target.value)}/>
        </div>
        <button
  type="submit"
  className="w-full bg-teal-500 text-white font-bold py-2 rounded-lg hover:bg-teal-600"
  disabled={!username || !domainName || !url || !password || !confirmPassword}
>
  Sign Up
</button>

        { error &&(
        <div>
          <p className="text-red-500 text-center mt-4">{error}</p>
        </div>)
        }
        <Link href='/login' className='text-teal-400 hover:underline'>Already Have An Account?Login</Link>

      </form>
    </div>
  );
};

