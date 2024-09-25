"use client"
import {React,useState} from 'react';


  
const Editurl = ({password, newurl,confirmurl, setpassword, setnewurl ,setconfirmurl}) => {
  const [username,setusername]=useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [urlchangedmessage, seturlchangedmessage] = useState('');

  const handleSubmit=async(e)=>{
    e.preventDefault();

    setErrorMessage('');
    seturlchangedmessage('');
    
    if (newurl !== confirmurl) {
      setErrorMessage('New url and confirmation url do not match.');
      return;
    }

    try {
      const response = await fetch('/api/editurl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username,password, newurl,confirmurl }),
      });

      const data = await response.json();

      if (response.ok) {
        seturlchangedmessage(data.message||'url updated successfully!');
        setusername('');
        setpassword('');
        setnewurl('');
        setconfirmurl('');
      } else {
        setErrorMessage(data.message || 'An error occurred while updating the url.');
      }
    } catch (error) {
      setErrorMessage("Failed to update url. Please try again later");
      console.log(error);
    }
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Edit URL</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center  gap-6">
        <div>
            <label className="block text-gray-700 font-bold mb-2">Username:</label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              className="w-full px-3 py-2 border rounded-lg"
              onChange={(e) => setusername(e.target.value)}
              value={username}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">Password:</label>
            <input
               type="password"
               name="password"
               placeholder="Enter Password"
               className="w-full px-3 py-2 border rounded-lg"
               onChange={(e) => setpassword(e.target.value)}
               value={password}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">New URL:</label>
            <input
              type="url"
              name="newurl"
              placeholder="Enter New URL"
              className="w-full px-3 py-2 border rounded-lg"
              onChange={(e) => setnewurl(e.target.value)}
              value={newurl}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">Confirm URL:</label>
            <input
               type="url"
               name="confirmurl"
               placeholder="Confirm URL"
               className="w-full px-3 py-2 border rounded-lg"
               onChange={(e) => setconfirmurl(e.target.value)}
               value={confirmurl}
            />
          </div>
        </div>
        {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}
        {urlchangedmessage && <p className="text-green-500 text-center mt-4">{urlchangedmessage}</p>}
        <div className="text-center mt-4">
          <button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded">
            Save 
          </button>
        </div>
      </form>   

    </div>
  );
};

export default Editurl;