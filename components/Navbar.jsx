import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import Link from 'next/link';

const Navbar = () => {
    
  return (
    <nav className='bg-gray-800 text-white flex justify-between px-4 py-6'>
        <Link href="/">
        <div className='text-xl font-bold' >
                 Domain in Domain
        </div>
        </Link>
        <Link href="/">
        <div className='flex space-x-4'>
            <AiFillHome className='text-2xl'/>
        </div>
        </Link>
     </nav>

  )
}

export default Navbar