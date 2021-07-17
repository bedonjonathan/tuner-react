import SongsList from "../Components/SongsList";
import { useHistory } from 'react-router-dom';

export default function Index() {
  let history = useHistory();

  const historyFunction = () => {
    history.push(`/songs/newSong`)
  }
  
  return (
    <div>
      <h2>Index</h2>
      <button onClick={historyFunction()}>New Song</button>
      <SongsList/>
    </div>
  );
}
