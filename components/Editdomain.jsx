import React from 'react';

const Editdomain = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Edit URL</h1>
      <form >
        <div className="flex flex-col justify-center items-center  gap-6">
          <div>
            <label className="block text-gray-700 font-bold mb-2">Password:</label>
            <input
              type="password"
              name="Password"
              placeholder="Enter Password"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">New Domain:</label>
            <input
              type="text"
              name="newdomain"
              placeholder="Enter New Domain"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">Confirm Domain:</label>
            <input
              type="text"
              name="confirmdomain"
              placeholder="Confirm Domain"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
        </div>
        <div className="text-center mt-4">
          <button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded">
            Save 
          </button>
        </div>
      </form>   

    </div>
  );
};

export default Editdomain;