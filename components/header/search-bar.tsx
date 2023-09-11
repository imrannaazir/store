"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <form
      className="
    flex-grow
    "
    >
      <label
        htmlFor="default-search"
        className="
        mb-2 
        text-sm 
        font-medium 
        text-gray-900 
        sr-only
        
        "
      >
        Search
      </label>

      <div
        className="
      relative"
      >
        <div
          className="
        hidden  
        absolute 
        inset-y-0
        left-0
        md:flex 
        items-center 
        pl-3 
        pointer-events-none
        "
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>

        <input
          type="search"
          id="default-search"
          className="
          block 
          w-full 
          p-4 
          md:pl-10 
          text-sm 
          text-gray-900 
          border 
          border-gray-300 
          rounded-full 
          bg-gray-50 
          focus:outline-none
          focus:border-primary 
          focus:shadow-lg"
          placeholder="Search Mockups, Logos..."
          required
        />
        <button
          type="submit"
          className="
          text-white 
          absolute 
          inset-y-0
          right-0
          bg-primary/80 
          hover:bg-primary
          focus:outline-none 
          font-medium 
          rounded-full
          text-sm px-4 
          py-2
          "
        >
          <span
            className="
          hidden 
          md:block"
          >
            Search
          </span>

          <Search
            className="
          md:hidden
          text-xl"
          />
        </button>
      </div>
    </form>
  );
}
