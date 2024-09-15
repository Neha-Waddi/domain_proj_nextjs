import Searchbar from "@/components/Searchbar";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from 'react-icons/fa';


export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Searchbar/>
      <div className="flex justify-center gap-10 ">

        <Link href="/login"><button className="bg-teal-400 rounded-sm p-2 font-bold ">Login</button></Link>
        <Link href="/signup"><button className="bg-teal-400 rounded-sm p-2 font-bold ">SignUp</button></Link>


      </div>
    </div>
  );
}