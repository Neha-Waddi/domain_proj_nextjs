"use client"
import {React,useState} from 'react';

const Editdomain = ({password,newdomain,confirmdomain,setpassword,setnewdomain,setconfirmdomain}) => {
  const [username,setusername]=useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [domainchangedmessage, setdomainchangedmessage] = useState('');

  const handleSubmit=async(e)=>{
    e.preventDefault();

    setErrorMessage('');
    setdomainchangedmessage('');
    
    if (newdomain !== confirmdomain) {
      setErrorMessage('New domain and confirmation domain do not match.');
      return;
    }

    try {
      const response = await fetch('/api/editdomain', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username,password, newdomain,confirmdomain }),
      });

      const data = await response.json();

      if (response.ok) {
        setdomainchangedmessage(data.message||'domain updated successfully!');
        setusername('');
        setpassword('');
        setnewdomain('');
        setconfirmdomain('');
        setErrorMessage('');
      } else {
        setErrorMessage(data.message || 'An error occurred while updating the domain.');
        setErrorMessage('');
      }
    } catch (error) {
      setErrorMessage("Failed to update domain. Please try again later");
      console.log(error);
    }
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Edit Domain</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center  gap-6">
        <div>
            <label className="block text-gray-700 font-bold mb-2">username:</label>
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
              name="Password"
              placeholder="Enter Password"
              className="w-full px-3 py-2 border rounded-lg"
              onChange={(e) => setpassword(e.target.value)}
              value={password}

            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">New Domain:</label>
            <input
              type="text"
              name="newdomain"
              placeholder="Enter New Domain"
              className="w-full px-3 py-2 border rounded-lg"
              onChange={(e) => setnewdomain(e.target.value)}
              value={newdomain}

            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">Confirm Domain:</label>
            <input
              type="text"
              name="confirmdomain"
              placeholder="Confirm Domain"
              className="w-full px-3 py-2 border rounded-lg"
              onChange={(e) => setconfirmdomain(e.target.value)}
              value={confirmdomain}
            />
          </div>
        </div>
        {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}
        {domainchangedmessage && <p className="text-green-500 text-center mt-4">{domainchangedmessage}</p>}
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