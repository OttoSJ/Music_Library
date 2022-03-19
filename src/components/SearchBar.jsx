import Button from "react-bootstrap/Button";

function SearchBar({ handleSearch }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Enter a search term here"
        onChange={(e) => handleSearch(e, e.target.value)}
      />
      <Button as="input" type="submit" value="Submit" className="m-2" />{" "}
      {/* <input type="submit" /> */}
    </form>
  );
}

export default SearchBar;
