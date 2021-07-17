import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import SongListItem from "./SongListItem";

const API = apiURL();

export default function SongsList() {
  const [songs, setSongs] = useState([]);

  const fetchSongs = async () => {
    try {
      const res = await axios.get(`${API}/songs`);
      // debugger
      //   setSongs(res.data.payload);
      setSongs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div>
      <section>
        <table>
          <thead>
            <tr>
              <th>Is Favorite</th>
              <th>Song</th>
              <th>Artist</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => {
              // debugger
              return <SongListItem key={song.id} song={song} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
