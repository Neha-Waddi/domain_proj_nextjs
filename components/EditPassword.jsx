import React from 'react';

const EditPassword = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Edit Password</h1>
      <form >
        <div className="flex flex-col justify-center items-center  gap-6">
          <div>
            <label className="block text-gray-700 font-bold mb-2">Old Password:</label>
            <input
              type="password"
              name="oldPassword"
              placeholder="Enter Old Password"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">New Password:</label>
            <input
              type="password"
              name="newPassword"
              placeholder="Enter New Password"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
        </div>
        <div className="text-center mt-4">
          <button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded">
            Save Changes
          </button>
        </div>
      </form>   

    </div>
  );
};

export default EditPassword;