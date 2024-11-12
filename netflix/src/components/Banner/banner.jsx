import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import requests from "../utils/requests";
import "./banner.css";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const request = await axiosInstance.get(requests.fetchNetflixOriginals);
        console.log("Fetched data:", request);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.error("Error fetching Netflix Originals:", error);
      }
    })();
  }, []);

  // Function to truncate text if it exceeds a certain length
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.original_name}
        </h1>

        <div className="banner__button">
          <button className="banner__buttons">Play</button>
          <button className="banner__buttons">My List</button>
        </div>

        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom"></div>
    </div>
  );
};

export default Banner;
