import { useEffect, useState, Suspense } from "react";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";
import { createResource as fetchData } from "./helper";

function App() {
  let [search, setSearch] = useState("");
  let [message, setMessage] = useState("Search for Music!");
  let [data, setData] = useState(null);
  console.log(search);

  useEffect(() => {
    if (search) {
      setData(fetchData(search));
    }
  }, [search]);

  const handleSearch = (e, searcTerm) => {
    e.preventDefault();
    setSearch(searcTerm);
  };

  const renderGallery = () => {
    if (data) {
      return (
        <Suspense fallback={<h1>Loading...</h1>}>
          <Gallery data={data} />
        </Suspense>
      );
    }
  };

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      {message}
      {renderGallery()}
    </div>
  );
}

export default App;

// let [search, setSearch] = useState("");
// let [message, setMessage] = useState("Search for Music!");
// let [data, setData] = useState([]);

// const API_URL = "https://itunes.apple.com/search?term=";

// useEffect(() => {
//   if (search) {
//     const fetchData = async () => {
//       document.title = `${search} Music`;
//       const response = await fetch(API_URL + search);
//       const resData = await response.json();
//       if (resData.results.length > 0) {
//         setData(resData.results);
//       } else {
//         setMessage("Not Found");
//       }
//       console.log(resData);
//     };
//     fetchData();
//   }
// }, [search]);
