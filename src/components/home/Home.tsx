import React, {useEffect} from 'react';
import './Home.css'
import {useNavigate} from 'react-router-dom';
import {addTrack} from "../playbar/Playbar";
import {setPlaylist} from "../playlist/Playlist";
import ReactDOM from "react-dom/client";

async function loadSongs() {
    let root = ReactDOM.createRoot(document.getElementById('home_songs')!);
    try {
        let song_data = JSON.parse(sessionStorage.getItem('songs') as string)
        let song_array: any = [];
        song_data.forEach((song: any) => {
            const styling = {
                backgroundImage: `url(${song.image})`,
            };
            song_array.push(

                <li className={"songs_item"} id={song.name} style={styling}>
                    <div className="song">
                        <p className="song_title">{song.name}</p>
                        <p className="song_author">{song.artist}</p>
                    </div>
                </li>
            )
        })
        root.render(song_array)
    } catch (e) {
        const styling = {
            marginLeft: '50px',
        }
        root.render(<h4 style={styling}>Cannot find Songs! Please try reloading!</h4>)
        console.log('Failed to get song data.')
    }
}

async function loadPlaylists() {
    console.log("loaded playlists")
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
                <li className="playlists_item" style={styling} id={playlist.name}>
                    <div className="playlist">
                        <p className="playlist_name">{playlist.name}</p>
                        <p className="playlist_count">{playlist.songs.length}</p>
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

function Home() {
    const navigate = useNavigate();
    useEffect(() => {
        loadSongs().then(() => {
            let songs = document.getElementsByClassName('songs_item');
            for (let i = 0; i < songs.length; i++) {
                console.log(songs[i]);
                songs[i].addEventListener('click', () => {
                    console.log('clicked');
                    addTrack(songs[i].id)
                })
            }
        });

        loadPlaylists().then(() => {
            let playlists = document.getElementsByClassName('playlists_item');
            for (let i = 0; i < playlists.length; i++) {
                console.log(playlists[i]);
                playlists[i].addEventListener('click', () => {
                    setPlaylist(playlists[i].id)
                    navigate("/ThunderBox/playlist")
                })
            }
        });
    })

    return (
        <div className="home">
            <input type={"text"} placeholder={"Search Songs"} className="searchbar" />
            <h1>Playlists</h1>
            <ul className="playlists" id="home_playlists"></ul>
            <h1>Songs</h1>
            <ul className="songs_list" id="home_songs"></ul>
            <p>Music is provided by <a href="https://freemusicarchive.org" className="archive_link">FreeMusicArchive</a></p>
        </div>
    );
}

export default Home;