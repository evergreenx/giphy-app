import React, { useEffect , useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setGifs } from "../redux/actions/gifsActions";
import Header from "../component/Header";

const GifsListing = () => {
  const gifs = useSelector((state) => state.allGifs.gifs);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    const fetchGifs = async () => {
      const response = await axios
        .get(
          "https://api.giphy.com/v1/gifs/trending?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&limit=25&offset=0&rating=Y&lang=en"
        )
        .catch((err) => {
          console.log("Err: ", err);
        });
        setLoading(false)
      dispatch(setGifs(response.data.data));
    };
    fetchGifs();
  }, [dispatch]);


  if(loading) {

    return <div className="loader flex justify-center mx-auto mt-6 ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>;
  }

    return (
    <>
      <Header />
      <div className="container mx-auto w-screen mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-8" data-testid="list">
          {gifs.map((i) => {
            return (
              <div key={i.id}>
                <div className="bg-white rounded-lg shadow-lg mb-20">
                  <img
                    src={i.images.fixed_height.url}
                    alt=""
                    className="rounded-t-lg w-screen h-64"
                  />
                  <div className="p-6">
                    <Link
                      to={`/gif/${i.id}`}
                      className="text-red-600 hover:text-purple-500 no-underline"
                    >
                      <h2 className="font-bold mb-2 text-2xl text-red-800 truncate capitalize">
                        {i.title ? i.title : "No title availbale"}
                      </h2>
                    </Link>
                    <p className="text-red-700 mb-2">
                      {i.username ? i.username : "No usename"}
                    </p>
                    {i.user ? (
                      <img
                        className=" inline object-cover w-16 h-16 mr-2 rounded-full"
                        src={i.user.avatar_url}
                        alt="user"
                      />
                    ) : (
                      <img
                        alt={"avatar"}
                        className="inline object-cover w-16 h-16 mr-2 rounded-full"
                        src="https://images.unsplash.com/photo-1622765109949-4e6bbce8a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GifsListing;
