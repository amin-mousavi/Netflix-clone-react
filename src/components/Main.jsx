import { useState, useEffect } from "react";
import requests from "../Request";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios
      .get(requests.requestPopular)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  //   console.log("movies: ", movies);

  const truncateString = (text, num) =>
    text?.length > num ? text.slice(0, num) + "..." : text;

  return (
    <div className="w-full h-[450px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[450px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl font-bold md:text-5xl">{movie?.title}</h1>
          <div className="my-4">
            <button className="border rounded bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border rounded text-white border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
