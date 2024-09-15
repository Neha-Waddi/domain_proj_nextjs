import Searchbar from '@/components/Searchbar'
import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
    <h1 className="text-3xl font-bold text-gray-800 mt-8">Welcome Name</h1>
    <Searchbar/>
    <div className="flex justify-center gap-10 ">
        <Link href=""><button className="bg-teal-400 rounded-sm p-2 font-bold ">Edit Details</button></Link>
        <Link href=""><button className="bg-teal-400 rounded-sm p-2 font-bold ">Logout</button></Link>
      </div>
  </div>
  )
}

export default Home