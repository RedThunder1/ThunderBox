import React from 'react';
import './Home.css'

function Home() {
    return (
        <div className="home">
            <h1>Playlists</h1>
            <ul className="playlists">
                <li className="playlist_item">
                    <button className="playlist"></button>
                </li>
                <li className="playlist_item">
                    <div className="playlist"></div>
                </li>
                <li className="playlist_item">
                    <div className="playlist"></div>
                </li>
                <li className="playlist_item">
                    <div className="playlist"></div>
                </li>
                <li className="playlist_item">
                    <div className="playlist"></div>
                </li>
                <li className="playlist_item">
                    <div className="playlist"></div>
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
        </div>
    );
}

export default Home;