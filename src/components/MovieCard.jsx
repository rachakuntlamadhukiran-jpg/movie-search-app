export default function MovieCard({ movie }) {
  const { Title, Year, Poster } = movie;

  return (
    <div className="movie-card">
      <img
        src={
          Poster !== "N/A"
            ? Poster
            : "https://placehold.co/300x450/1e293b/94a3b8?text=No+Poster"
        }
        alt={Title}
      />
      <div className="movie-info">
        <h3>{Title}</h3>
        <p className="year">📅 {Year}</p>
      </div>
    </div>
  );
}