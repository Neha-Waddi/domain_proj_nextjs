import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Searchbar = () => {
  return (
    <section className="flex justify-center items-center py-20">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-96 px-4 py-2 rounded-lg border border-teal-300 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
          <button
            type="submit"
            className="absolute top-0 bottom-0 right-0 p-2 rounded-r-lg bg-teal-600 text-white hover:bg-teal-500"
          >
            <FaSearch className="w-12 h-6"/>
          </button>
        </div>
      </section>
  )
}

export default Searchbar