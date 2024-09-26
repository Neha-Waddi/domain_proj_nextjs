"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setErrorMessage(""); 

    if (!query) {
      setErrorMessage("Please enter a search query");
      return;
    }

    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();

      if (response.ok && data.length > 0) {
        window.open(data[0].url, "_blank");
      } else {
        setErrorMessage(data.message || "No results found.");
      }
    } catch (error) {
      setErrorMessage("Failed to fetch search results. Please try again.");
    }
  };

  return (
    <section className="flex flex-col justify-center items-center py-20">
      <div className="relative w-96">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 rounded-lg border border-teal-300 focus:outline-none focus:ring-1 focus:ring-teal-500"
          value={query}
          onChange={(e) => setQuery(e.target.value)} 
        />
        <button
          type="submit"
          className="absolute top-0 bottom-0 right-0 p-3 rounded-r-lg bg-teal-600 text-white hover:bg-teal-500"
          onClick={handleSearch}
        >
          <FaSearch className="w-6 h-6" />
        </button>
      </div>

      {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
    </section>
  );
};

export default Searchbar;
