import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import { useHistory, useParams, withRouter, Link } from "react-router-dom";

const API = apiURL();

const SongDetails = () => {
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });
  const history = useHistory();
  const { id } = useParams();

  const fetchSongDetail = async () => {
    try {
      const res = await axios.get(`${API}/songs/${id}`);
      setSong(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${API}/songs/${id}`);
      history.push("/songs");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSongDetail();
  }, [id]);

  const editSongUrl = `/songs/${id}/edit`;
  return (
    <div>
      <section>
        <p>{song.name}</p>
        <p>{song.artist}</p>
        <p>{song.album}</p>
        <p>{song.time}</p>
        <p>{song.is_favorite}</p>
      </section>
      <button onClick={handleDelete}>Delete</button>
      <Link to={editSongUrl}>
        <button>Edit</button>
      </Link>
      <Link to="/songs">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default withRouter(SongDetails);
