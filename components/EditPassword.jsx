"use client"
import {React,useState} from 'react';

const EditPassword = ({oldPassword, newPassword, confirmPassword, setOldPassword, setNewPassword, setconfirmPassword }) => {
  const [username,setusername]=useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordchangedMessage, setpasswordchangedMessage] = useState('');

  const handleSubmit=async(e)=>{
    e.preventDefault();



    setErrorMessage('');
    setpasswordchangedMessage('');

    if (newPassword !== confirmPassword) {
      setErrorMessage('New password and confirmation password do not match.');
      return;
    }

    try {
      const response = await fetch('/api/editPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username,oldPassword, newPassword,confirmPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        setpasswordchangedMessage(data.message||'Password updated successfully!');
        setOldPassword('');
        setNewPassword('');
        setconfirmPassword('');
      } else {
        setErrorMessage(data.message || 'An error occurred while updating the password.');
      }
    } catch (error) {
      setErrorMessage("'Failed to update password. Please try again later'");
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Edit Password</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center  gap-6">
        <div>
            <label className="block text-gray-700 font-bold mb-2">username:</label>
            <input
              type="username"
              name="username"
              onChange={(e)=>setusername(e.target.value)}
              placeholder="Enter username"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">Old Password:</label>
            <input
              type="password"
              name="oldPassword"
              value={oldPassword}
              onChange={(e)=>setOldPassword(e.target.value)}
              placeholder="Enter Old Password"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">New Password:</label>
            <input
              type="password"
              name="newPassword"
              value={newPassword}
              onChange={(e)=>setNewPassword(e.target.value)}
              placeholder="Enter New Password"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e)=>setconfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
        </div>
        {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}
        {passwordchangedMessage && <p className="text-green-500 text-center mt-4">{passwordchangedMessage}</p>}
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