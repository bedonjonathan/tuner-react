import { Link } from 'react-router-dom';

export default function SongsListItem ({song}){
  
    return(
        <tr>
            <td>
               {song.is_favorite ? (<span>⭐️</span>) : <span>&nbsp; &nbsp; &nbsp;</span>} 
               {/* &nbsp; is the HTML entity for a blank space character */}
            </td>
            <td>
                <Link to={`/songs/${song.id}`} target="_blank" rel="noreferrer">{song.name}</Link>
            </td>
            <td>
                <Link to={`/songs/${song.id}`} target="_blank" rel="noreferrer">{song.artist}</Link>
            </td>
            <td>
                <Link to={`/songs/${song.id}`} target="_blank" rel="noreferrer">{song.time}</Link>
            </td>
        </tr>
    )
}
