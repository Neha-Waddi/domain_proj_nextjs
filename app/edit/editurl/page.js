"use client"
import Editbuttons from '@/components/Editbuttons'
import Editurl from '@/components/Editurl'
import {React,useState} from 'react';


const editurl = () => {
  const [newurl,setnewurl]=useState('');
  const [confirmurl, setconfirmurl] = useState('');
  const [password, setpassword] = useState('');
  return (
    <div>
        <Editbuttons/>
        <Editurl
        password={password}
        newurl={newurl}
        confirmurl={confirmurl} 
        setnewurl={setnewurl} 
        setpassword={setpassword} 
        setconfirmurl={setconfirmurl}
        />
    </div>
  )
}

export default editurl