import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productsActions";

const GifDetails = () => {
  const { productId } = useParams();

  let gif = useSelector((state) => state.gif);

  const { title, type, source, import_datetime, rating } = gif;

  const dispatch = useDispatch();
  const fetchGiftDetail = async () => {
    const response = await axios
      .get(
        `https://api.giphy.com/v1/gifs/${productId}?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&q=sphinx`
      )
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data.data));
  };
  console.log(gif);

  useEffect(() => {
    fetchGiftDetail();
  }, []);
  return (
    <div className="container mx-auto px-5 mt-6 capitalize bg-white rounded-lg shadow-lg p-5 flex flex-col text-center justify-center">
      <center>
        {/* <img
        src={gif.images.downsized_medium.url}
        className="w-96 h-96 justify-self-center"
        alt={"gif"}
      /> */}

        {/* 
<img
        src={images.downsized_medium.url}
        className="w-96 h-96 justify-self-center"
        alt={"gif"}
      /> */}
      </center>

      <h1 className="text-lg font-bold">
        Gif Title : {title ? title : "No title"}
      </h1>
      <h1 className="text-lg font-bold">type: {type}</h1>
      <p className="font-bold text-lg">
        source :
        <a href={source} className="lowercase">
          {source}
        </a>
        <p>rate: {rating}</p>
      </p>
      <p>Date created : {import_datetime}</p>
    </div>
  );
};

export default GifDetails;
