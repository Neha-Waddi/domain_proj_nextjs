import React from 'react';
import Link from 'next/link';

const SignUp = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-2">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 font-bold mb-2">Username</label>
          <input type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="Enter your username" />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">Domain Name</label>
          <input type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="Enter your domain name" />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">URL</label>
          <input type="url" className="w-full px-3 py-2 border rounded-lg" placeholder="Enter URL" />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">Password</label>
          <input type="password" className="w-full px-3 py-2 border rounded-lg" placeholder="Enter password" />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">Re-enter Password</label>
          <input type="password" className="w-full px-3 py-2 border rounded-lg" placeholder="Re-enter your password" />
        </div>
        <button type="submit" className="w-full bg-teal-500 text-white font-bold py-2 rounded-lg hover:bg-teal-600">Sign Up</button>
        <Link href='/login' className='text-teal-400 hover:underline'>Already Have An Account?Login</Link>

      </form>
    </div>
  );
};

export default SignUp;