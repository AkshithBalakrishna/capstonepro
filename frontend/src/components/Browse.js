import { useEffect, useState } from "react";
import axios from "axios";
import "./Browse.css";
import { Link } from "react-router-dom";

function Browse() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=34b48b52b540b388c905dafb7991ea03"
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    setMovies(filteredMovies);
  };

  return (
    <header id="browseMainContainer">
      <form id="searchContainer" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search"
          id="searchForm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" id="searchBtn">
          Search
        </button>
      </form>
      <section id="browseContainers">
        {movies.map((movie) => (
          <Link to={`/movies/${movie.id}`} key={movie.id} id="browseContainer">
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                id="browseImg"
              />
              <h3 id="browseTitle">{movie.title}</h3>
            </div>
          </Link>
        ))}
      </section>
    </header>
  );
}

export default Browse;
