import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedGif } from "../redux/actions/gifsActions";

const GifDetails = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  let gif = useSelector((state) => state.gif);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchGifDetail = async () => {
      const response = await axios
        .get(
          `https://api.giphy.com/v1/gifs/${id}?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&q=sphinx`
        )

        .catch((err) => {
          console.log("Err: ", err);
        });
      setLoading(false);

      dispatch(selectedGif(response.data.data));
    };
    fetchGifDetail();
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className="loader flex justify-center mx-auto mt-6 ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
    );
  }

  return (
    <div className="container mx-auto px-5 mt-6 capitalize bg-white rounded-lg shadow-lg p-5 flex flex-col justify-center">
      {gif.images ? (
        <img
          src={gif.images.fixed_height.url}
          className="w-96 h-96 justify-self-center"
          alt={"gif"}
        />
      ) : (
        "loading"
      )}

      <h1 className="text-lg font-bold">
        Gif Title : {gif.title ? gif.title : "No title"}
      </h1>
      <h1 className="text-lg font-bold">type: {gif.type}</h1>

      <p className="font-bold text-lg ">rate: {gif.rating}</p>

      <p className="font-bold text-lg">Date created : {gif.import_datetime}</p>
    </div>
  );
};

export default GifDetails;
