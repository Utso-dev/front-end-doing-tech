"use client";
import { SearchIcon } from "@/public/Icons";
import { useState } from "react";

function Search() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <div>
      <div className=" flex items-center gap-3 max-w-145 mx-auto w-full px-2 sm:px-0">
        <div className="flex items-center bg-white rounded-full mx p-1.5 pl-5 py-3 sm:pl-6 shadow-2xl transition-all focus-within:ring-2 max-w-100 w-full focus-within:ring-primaryColor">
          <SearchIcon className="text-grayColor w-5 h-5 shrink-0 mr-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Course, topic, creator"
            className="w-full  bg-transparent text-blackColor placeholder-gray-400 text-base md:text-lg outline-none pr-3 font-normal"
          />
        </div>
        <button
          type="submit"
          className="bg-primaryColor hover:shadow-md font-medium shadow-primaryColor/50 text-black text-base sm:text-lg px-6 sm:px-8 py-3 rounded-full transition-colors cursor-pointer shrink-0 shadow-sm"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
