import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { withRouter, useHistory, useParams } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const EditSong =()=> {
    const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
});
const API = apiURL();

  const {id} = useParams();
  const history = useHistory();

  const updateSong = async (updatedSong) => {
    try {
      await axios.put(`${API}/songs/${id}`, updatedSong);
      console.log("success");
      history.push(`/songs/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSong(song);
  };
  const handleTextChange = (e) => {
    setSong({ ...song, [e.target.id]: e.target.value });
  };

  const handleCheckBox = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  useEffect(() => {
    axios.get(`${API}/songs/${id}`).then(
        (response) => setSong(response.data),
        (error) => history.push(`/not-found`)
      ); 
  }, [id, history, API])

  return (
    <div>
      <h1>All fields are required</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Song Name"
          required
        ></input>
        <label htmlFor="artist">Artist</label>
        <input
          id="artist"
          value={song.artist}
          type="text"
          onChange={handleTextChange}
          placeholder="Song artist"
          required
        ></input>
        <label htmlFor="album">Album</label>
        <input
          id="album"
          value={song.album}
          type="text"
          onChange={handleTextChange}
          placeholder="Song album"
          required
        ></input>
        <label htmlFor="time">Time</label>
        <input
          id="time"
          value={song.time}
          type="text"
          onChange={handleTextChange}
          placeholder="Song time"
          required
        ></input>
        <label htmlFor="is-favorite">Is Favorite</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckBox}
        ></input>
        <input type="submit" />
      </form>
    </div>
  );
}

export default withRouter(EditSong);