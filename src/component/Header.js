import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setGifs } from "../redux/actions/productsActions";


export default function Header() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();


  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");

    axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&q=${search}`
    ).then(res =>{

        console.log(res , 'this is the response')
    dispatch(setGifs(res.data.data));

    })
  };

  return (
    <nav className="bg-white px-4 pt-2 shadow-md sticky top-0 z-50">
      <div className="-mb-px flex">
        <Link
          to="/"
          className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-lg py-3 mr-8"
        >
          GIPHY
        </Link>
      </div>
      <form onSubmit={getSearch}>
        <input
        required
          value={search}
          onChange={updateSearch}
          className="border-none w-80 p-3 m-4 bg-gray-200"
          placeholder="search"
          type="search"
        />
      </form>
    </nav>
  );
}
