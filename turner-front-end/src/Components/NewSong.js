import React from "react";
import axios from "axios";
import { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL";

const API = apiURL();
const NewSong =()=> {
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const history = useHistory();

  const addSong = async (newSong) => {
    try {
      await axios.post(`${API}/songs`, newSong);
      console.log("success");
      debugger;
      history.push(`/songs`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(song);
    console.log(history);
  };
  const handleTextChange = (e) => {
    setSong({ ...song, [e.target.id]: e.target.value });
  };

  const handleCheckBox = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  return (
    <div>
      <h1>new</h1>
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

export default withRouter(NewSong);
