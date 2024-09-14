import Link from 'next/link';
import React from 'react';

const SignUp = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 font-bold mb-2">Username</label>
          <input type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="Enter your username" />
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-2">Password</label>
          <input type="password" className="w-full px-3 py-2 border rounded-lg" placeholder="Enter password" />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600">Login</button>
        <Link href="/signup" className="text-teal-400 hover:underline">Don't have an account? Register Now</Link>
      </form>
    </div>
  );
};

export default SignUp;