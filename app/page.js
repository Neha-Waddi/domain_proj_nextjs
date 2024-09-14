import Image from "next/image";
import { FaSearch } from 'react-icons/fa';


export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
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

      <div className="flex justify-center gap-10 ">

        <button className="bg-teal-400 rounded-sm p-2 font-bold ">Login</button>
        <button className="bg-teal-400 rounded-sm p-2 font-bold ">SignUp</button>


      </div>
    </div>
  );
}