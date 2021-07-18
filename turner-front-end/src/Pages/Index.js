import SongsList from "../Components/SongsList";
import NewSong from "../Components/NewSong";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div>
      <h2>Index</h2>
      {/* <Route component={NewSong} path='newSong' /> */}
      <Link to="/songs/new"> 
        <button>New Song</button>
      </Link>
      <SongsList />
    </div>
  );
}
