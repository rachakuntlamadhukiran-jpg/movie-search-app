import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  if (movies.length === 0) return null;

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}