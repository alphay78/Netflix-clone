import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../utils/axiosInstance";
import YouTube from "react-youtube";
import movieTralier from 'movie-trailer';

const Row = ({ title, fetchUrl, islargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState(""); // Add trailerUrl state

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(fetchUrl);
        console.log(request); // Check the response structure
        setMovies(request.data.results); // Set movies to the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the function
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl(""); // Clear trailer URL
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name) // Get trailer based on movie properties
        .then((url) => {
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search); // Extract URL params
          console.log(urlParams);
          console.log(urlParams.get("v")); // Log video ID
          setTrailerUrl(urlParams.get("v")); // Set trailer URL ID
        })
        .catch((error) => {
          console.error("Error fetching trailer:", error);
        });
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies?.map((movie, index) => (
          <img
            key={index}
            src={`${base_url}${
              islargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row__poster ${islargeRow && "row__posterlarge"}`}
            onClick={() => handleClick(movie)} // Added click event to trigger trailer
          />
        ))}
      </div>
      {trailerUrl && (
        <div style={{ padding: "40px" }}>
          <YouTube videoId={trailerUrl} opts={opts} />
        </div>
      )}
    </div>
  );
};

export default Row;
