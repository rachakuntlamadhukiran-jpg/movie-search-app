import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import "./App.css";

const API_KEY = import.meta.env.VITE_OMDB_KEY;

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query.trim()) {
      setMovies([]);
      setError("");
      return;
    }

    const controller = new AbortController();
    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`,
          { signal: controller.signal }
        );
        const data = await res.json();

        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setMovies([]);
          setError(data.Error || "No movies found");
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Something went wrong. Try again.");
        }
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  return (
    <div className="app">
      <h1>🎬 Movie Search</h1>
      <SearchBar query={query} setQuery={setQuery} />

      {loading && <p className="status">Loading...</p>}
      {error && !loading && <p className="status error">{error}</p>}
      {!loading && !error && <MovieList movies={movies} />}
    </div>
  );
}