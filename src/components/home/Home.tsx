import React from 'react';
import './Home.css'
import classes from "../library/Library.module.css";

function Home() {
    return (
        <div className="home">
            <h1>Playlists</h1>
            <ul className="playlists">
                <li className="playlists_item">
                    <div className="playlist">
                        <p className="playlist_name">Name</p>
                        <p className="playlist_count">Song Count</p>
                    </div>
                </li>
                <li className="playlists_item">
                    <div className="playlist">
                        <p className="playlist_name">Name</p>
                        <p className="playlist_count">Song Count</p>
                    </div>
                </li>
                <li className="playlists_item">
                    <div className="playlist">
                        <p className="playlist_name">Name</p>
                        <p className="playlist_count">Song Count</p>
                    </div>
                </li>
                <li className="playlists_item">
                    <div className="playlist">
                        <p className="playlist_name">Name</p>
                        <p className="playlist_count">Song Count</p>
                    </div>
                </li>
                <li className="playlists_item">
                    <div className="playlist">
                        <p className="playlist_name">Name</p>
                        <p className="playlist_count">Song Count</p>
                    </div>
                </li>
                <li className="playlists_item">
                    <div className="playlist">
                        <p className="playlist_name">Name</p>
                        <p className="playlist_count">Song Count</p>
                    </div>
                </li>
            </ul>
            <h1>Songs</h1>
            <ul className="songs_list">
                <li className="songs_item">
                    <div className="song"></div>
                </li>
                <li className="songs_item">
                    <div className="song"></div>
                </li>
                <li className="songs_item">
                    <div className="song"></div>
                </li>
                <li className="songs_item">
                    <div className="song"></div>
                </li>
                <li className="songs_item">
                    <div className="song"></div>
                </li>
                <li className="songs_item">
                    <div className="song"></div>
                </li>

            </ul>
            <p>Music is provided by https://freemusicarchive.org/home</p>
        </div>
    );
}

export default Home;