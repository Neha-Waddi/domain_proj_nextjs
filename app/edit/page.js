"use client"
import EditPassword from '@/components/EditPassword';
import {React,useState} from 'react';
import Editbuttons from '@/components/Editbuttons';

const EditPasswordPage = () => {
  const [username,setusername]=useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Editbuttons/>
      <div className="mt-8">
        <EditPassword 
        username={username}
        setusername={setusername}
        oldPassword={oldPassword} 
        newPassword={newPassword} 
        confirmPassword={confirmPassword}
        setOldPassword={setOldPassword} 
        setNewPassword={setNewPassword} 
        setconfirmPassword={setconfirmPassword} 
        />
      </div>
    </div>
  );
};

export default EditPasswordPage;