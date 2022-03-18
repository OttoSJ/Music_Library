import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ArtistView(props) {
  const { id } = useParams();
  const [artistData, setArtistData] = useState([]);

  return (
    <div className="container">
      <h2> </h2>
      <p>Artist Data Goes Here!</p>
    </div>
  );
}

export default ArtistView;
