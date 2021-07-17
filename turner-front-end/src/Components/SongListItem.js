import { Link } from 'react-router-dom';

export default function SongsListItem ({song}){
    return(
        <tr>
            <td>
               {song.is_favorite ? (<span>⭐️</span>) : <span>&nbsp; &nbsp; &nbsp;</span>} 
               {/* &nbsp; is the HTML entity for a blank space character */}
            </td>
            <td>
                <a href={song.id} target="_blank" rel="noreferrer">{song.name}</a>
            </td>
            <td>
                <a href={song.id} target="_blank" rel="noreferrer">{song.artist}</a>
            </td>
            <td>
                <a href={song.id} target="_blank" rel="noreferrer">{song.time}</a>
            </td>
            <td>
                <Link to={`/songs/${song.id}`}></Link>
            </td>
        </tr>
    )
}