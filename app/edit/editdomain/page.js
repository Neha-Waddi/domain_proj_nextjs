"use client"
import Editbuttons from '@/components/Editbuttons'
import Editdomain from '@/components/Editdomain'
import {React,useState} from 'react'

const editdomain = () => {
  const [newdomain,setnewdomain]=useState('');
  const [confirmdomain, setconfirmdomain] = useState('');
  const [password, setpassword] = useState('');
  return (
    <div>
        <Editbuttons/>
        <Editdomain
        password={password}
        newdomain={newdomain}
        confirmdomain={confirmdomain} 
        setnewdomain={setnewdomain} 
        setconfirmdomain={setconfirmdomain} 
        setpassword={setpassword}
        />
    </div>
  )
}

export default editdomain