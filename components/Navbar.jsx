import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FaInfoCircle } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-teal-700 text-white flex justify-between px-4 py-10 mt-1">
      <div className="flex items-center">
        <Link href="/">
          <div className="text-xl font-bold">Domain in Domain</div>
        </Link>
      </div>
      <div className="flex items-center gap-6 mr-2">
        <Link href="/home">
          <AiFillHome className="text-3xl" />
        </Link>
        <Link href="/info">
          <FaInfoCircle className="text-3xl" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;