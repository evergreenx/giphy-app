import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setGifs } from "../redux/actions/gifsActions";



export default function SearchBox() {
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
      <>
  

       <form onSubmit={getSearch}>
        <input
        data-testid="search"
        required
          value={search}
          onChange={updateSearch}
          className="border-none w-80 p-3 m-4 bg-gray-200 focus:outline-none"
          placeholder="search"
          type="search"
        />
      </form>
   
    </>
  );
}
