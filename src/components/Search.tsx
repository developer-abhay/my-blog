"use client";

import React, { useState, useRef } from "react";
import { SearchIcon } from "./svg.icons";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="ms-auto">
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center rounded-md gap-1"
        aria-label="Open Search"
      >
        <SearchIcon />
      </button>
      {isOpen && (
        <div className="z-50 absolute top-0 left-0 h-screen w-screen flex justify-center items-center bg-opacity-50 bg-slate-400">
          <div
            aria-label="search"
            className="border border-zinc-400 bg-white dark:bg-[#0a0910ec] sm:mx-auto sm:mb-auto sm:mt-16 sm:h-max sm:max-h-[calc(100%-8rem)] sm:min-h-[15rem] sm:w-5/6 sm:max-w-[48rem] sm:rounded-md"
          >
            <div className="dialog-frame flex flex-col gap-4 p-6 pt-12 sm:pt-6">
              <button
                onClick={() => setIsOpen(false)}
                className="ms-auto cursor-pointer rounded-full bg-black text-white px-4 py-2 dark:bg-white dark:text-black"
              >
                Close
              </button>
              {process.env.NODE_ENV === "development" ? (
                <div className="mx-auto text-center dark:text-white">
                  <p>To be updated</p>
                </div>
              ) : (
                <div className="search-container dark:text-white">
                  <div id="pagefind__search" />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
