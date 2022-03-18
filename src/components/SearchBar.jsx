function SearchBar({ handleSearch }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Enter a search term here"
        onChange={(e) => handleSearch(e, e.target.value)}
      />

      <input type="submit" />
    </form>
  );
}

export default SearchBar;
