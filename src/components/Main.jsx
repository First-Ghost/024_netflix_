import axios from "axios";
import { useEffect, useState } from "react";
import req from "../Requests";

export const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(req.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  console.log(movie);
  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
      </div>
    </div>
  );
};
