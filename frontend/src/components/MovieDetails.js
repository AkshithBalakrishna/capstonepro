import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import "./MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");

  const [userName, setUserName] = useState("");
  const [movieFeedback, setMovieFeedback] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=34b48b52b540b388c905dafb7991ea03`
      )
      .then((res) => {
        setMovie(res.data);
      });
  }, [id]);

  return (
    <section id="movieDetails">
      <Navbar />
      <div id="movieDetailsContainers">
        <div id="movieDetailsContainer">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            id="movieDetailsImg"
          />
        </div>
        <section id="imgDownContent">
          <div id="movieDetailsDivTwo">
            <h1>{movie.title}</h1>
            <p id="movieOverview">{movie.overview}</p>
            <p>Rating: {movie.vote_average}</p>
          </div>
          <div id="formDetails">
            <form
              method="POST"
              onSubmit={(e) => {
                e.preventDefault();
                axios.post(
                  `https://capstone-project-ezs6.onrender.com/movieFeedback/${id}`,
                  {
                    userName,
                    movieFeedback,
                    movieTitle: movie.title,
                    movieImage: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                  }
                );
                setUserName("");
                setMovieFeedback("");
              }}
            >
              <input
                type="text"
                id="userName"
                value={userName}
                placeholder="Name"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <br />
              <textarea
                placeholder="comment"
                id="movieFeedback"
                value={movieFeedback}
                onChange={(e) => {
                  setMovieFeedback(e.target.value);
                }}
              ></textarea>
              <br />
              <input type="submit" value="Submit" id="submitBtn" />
            </form>
          </div>
        </section>
      </div>
    </section>
  );
}

export default MovieDetails;
