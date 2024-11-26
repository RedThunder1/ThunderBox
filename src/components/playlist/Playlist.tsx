import React, {useEffect} from 'react'
import './Playlist.css'

let playlist: string;

export function setPlaylist(name: string) {
    playlist = name;
}

function Playlist() {
    useEffect(() => {
        let container = document.getElementById('playlist_screen')!;
        container.innerHTML = playlist;
    }, []);
    return (
        <div className="playlist_screen" id="playlist_screen">

        </div>
    );
}
export default Playlist;