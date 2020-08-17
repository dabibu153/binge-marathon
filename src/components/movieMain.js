import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "../fonts/good_times_rg.ttf";

export default function MovieMain() {
  const [popularMovies, setPopularMovies] = useState([]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };

  let getdata = async () => {
    let data = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=d71d0e07b331eee4e7d25ff43da8695c&language=en-US&page=1"
    );
    setPopularMovies(data.data.results);
  };

  useEffect(() => {
    getdata();
  }, []);
  useEffect(() => {
    console.log("popuplar moveis changed", popularMovies);
  }, [popularMovies]);

  return (
    <div>
      <div className="sliderBoi">
        <Carousel responsive={responsive}>
          {popularMovies.map((movies) => (
            <div key={movies.id} className="movie-top-art">
              <img
                className="movie-poster-top"
                src={`http://image.tmdb.org/t/p/original/${movies.backdrop_path}`}
                alt="movie-poster"
              ></img>
              <h1 className="heading">{movies.title.toUpperCase()}</h1>
              <p className="about">{movies.overview}</p>

              <p className="release_date">released on {movies.release_date}</p>
              <p className="score">TMDB SCORE {movies.vote_average}/10</p>
            </div>
          ))}
        </Carousel>
        <div className="subNav"></div>
      </div>
    </div>
  );
}
