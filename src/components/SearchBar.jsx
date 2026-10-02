export default function SearchBar({ query, setQuery }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search for a movie..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}