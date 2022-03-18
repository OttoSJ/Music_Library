import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function AlbumView(props) {
  const { id } = useParams;
  const [albumData, setAlbumData] = useState([]);

  return (
    <div className="container">
      <h2>The id passed was: {id} </h2>
      <p>Album Data Goes Here!</p>
    </div>
  );
}

export default AlbumView;
