import React from 'react'
import Link from 'next/link'

const Editbuttons = () => {
  return (
        <div className="flex justify-center gap-10 mt-6">
        <Link href="/edit">
          <button className="bg-teal-400 rounded-sm p-2 font-bold">Edit Password</button>
        </Link>
        <Link href="/edit/editurl">
          <button className="bg-teal-400 rounded-sm p-2 font-bold">Edit URL</button>
        </Link>
        <Link href="/edit/editdomain">
          <button className="bg-teal-400 rounded-sm p-2 font-bold">Edit Domain</button>
        </Link>
      </div>
  )
}

export default Editbuttons