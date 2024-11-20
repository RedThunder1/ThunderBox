import React from 'react';
import './Home.css'

function Home() {
    return (
        <div className="home">
            <h1>Playlists</h1>
            <ul className="playlists" id="home_playlists">
                <li className="playlists_item">
                    <div className="playlist">
                        <p className="playlist_name">Name</p>
                        <p className="playlist_count">Song Count</p>
                    </div>
                </li>
            </ul>
            <h1>Songs</h1>
            <ul className="songs_list" id="home_songs">
            </ul>
            <p>Music is provided by <a href="https://freemusicarchive.org" className="archive_link">FreeMusicArchive</a></p>
        </div>
    );
}

export default Home;