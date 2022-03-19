import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function AlbumView(props) {
  const { id } = useParams();
  const [albumData, setAlbumData] = useState([]);
  const navigate = useNavigate();

  const navButtons = () => {
    return (
      <div>
        <button onClick={() => navigate(-1)}>Back</button>
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    );
  };

  useEffect(() => {
    const API_URL = `http://localhost:4000/song/${id}`;
    const fetchData = async () => {
      const response = await fetch(API_URL);
      const resData = await response.json();
      setAlbumData(resData.results);
    };
    fetchData();
  }, [id]);

  const justSongs = albumData.filter((entry) => entry.wrapperType === "track");
  const renderSongs = justSongs.map((song, i) => {
    return (
      <div key={i}>
        <p> {song.trackName} </p>
      </div>
    );
  });

  return (
    <div className="container">
      {albumData.length > 0 ? (
        <h2>{albumData[0].collectionName}</h2>
      ) : (
        <h2>Loading...</h2>
      )}
      {navButtons()}
      {renderSongs}
    </div>
  );
}

export default AlbumView;
