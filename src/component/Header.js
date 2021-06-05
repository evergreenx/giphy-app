import React from "react";
import { Link } from "react-router-dom";

import SearchBox from "./SearchBox";

export default function Header() {

 
 

  return (
    <nav className="bg-white px-4 pt-2 shadow-md sticky top-0 z-50 flex justify-between items-center">
      <div className="-mb-px flex">
        <Link
          to="/"
          className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-lg py-3 mr-8"
        >
          GIPHY
        </Link>
      </div>
      <SearchBox />
    </nav>
  );
}
