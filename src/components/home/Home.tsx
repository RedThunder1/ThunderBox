import React, {useEffect} from 'react';
import './Home.css'
import {NavigateFunction, useNavigate} from 'react-router-dom';
import {setSongData, setTrack} from "../playbar/Playbar";
import ReactDOM from "react-dom/client";
import {Simulate} from "react-dom/test-utils";
import {InitTheme} from "../settings/Settings"

function loadSongs() {
    let root = ReactDOM.createRoot(document.getElementById('home_songs')!);
    try {
        let song_data = JSON.parse(sessionStorage.getItem('songs') as string)
        let song_array: any = [];
        song_data.forEach((song: any) => {
            const styling = {
                backgroundImage: `url(${song.image})`,
            };
            song_array.push(
                <li className={"songs_item"} id={song.name} style={styling} onClick={() => {setTrack(song.name)}}>
                    <div className="song">
                        <p className="song_title">{song.name}</p>
                        <p className="song_author">{song.artist}</p>
                    </div>
                </li>
            )
        })
        setSongData()
        root.render(song_array)
    } catch (e) {
        const styling = {
            marginLeft: '50px',
        }
        root.render(<h4 style={styling}>Cannot find Songs! Please try reloading!</h4>)
        console.log('Failed to get song data.')
    }
}

function loadPlaylists(nav: NavigateFunction) {
    let root = ReactDOM.createRoot(document.getElementById('home_playlists')!);
    try {
        let playlist_data: any = JSON.parse(sessionStorage.getItem('playlists') as string)
        let playlist_array: any = [];
        playlist_data.forEach((playlist: any) => {
            let image = playlist.image
            if (image === null) {
                image = "../../graphics/Default playlist Photo.png";
            }
            const styling = {
                backgroundImage: `url(${image})`,
            }
            playlist_array.push(
                <li className="playlists_item" style={styling} id={playlist.name} onClick={() => {
                    sessionStorage.setItem('active_playlist', JSON.stringify(playlist.name))
                    nav("/ThunderBox/playlist")
                }}>
                    <div className="playlist">
                        <p className="playlist_name">{playlist.name}</p>
                        <p className="playlist_count">{playlist.songs.length} Songs</p>
                    </div>
                </li>
            )
        })
        root.render(playlist_array)
    } catch (e) {
        const styling = {
            marginLeft: '50px',
        }
        root.render(<h4 style={styling}>Cannot find Playlists! Please try reloading!</h4>)
        console.log('Failed to get playlist data.')
    }
}

function keyPressEvent(e: any, nav: NavigateFunction) {
    if (e.key == 'Enter') {
        nav("/ThunderBox/search")
    }
}

function Home() {
    const navigate = useNavigate();
    InitTheme()
    useEffect(() => {
        //Stop this from running forever if it cant fetch data.
        let iterations = 0
        let checkData = setInterval(() => {
            if (sessionStorage.getItem('songs') !== null || iterations > 20) {
                loadSongs()
                loadPlaylists(navigate)
                clearInterval(checkData)
            }
            iterations++;
        }, 100)
    })

    return (
        <div className="home">
            <input type={"text"} placeholder={"Search Songs"} className="searchbar" onKeyDown={(event) => {keyPressEvent(event, navigate)}} />
            <h1>Playlists</h1>
            <ul className="playlists" id="home_playlists"></ul>
            <h1>Songs</h1>
            <ul className="songs_list" id="home_songs"></ul>
            <p>Music is provided by <a href="https://freemusicarchive.org" className="archive_link">FreeMusicArchive</a></p>
        </div>
    );
}

export default Home;