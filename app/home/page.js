"use client";
import Searchbar from "@/components/Searchbar";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession(); 

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-800 mt-8">
        Welcome {session?.user.name}
      </h1>
      <Searchbar />
      <div className="flex justify-center gap-10">
        <Link href="/edit">
          <button className="bg-teal-400 rounded-sm p-2 font-bold">
            Edit Details
          </button>
        </Link>
        <Link href="">
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="bg-teal-400 rounded-sm p-2 font-bold"
          >
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
