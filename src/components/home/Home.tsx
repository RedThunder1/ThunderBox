import React, {useEffect} from 'react';
import './Home.css'
import {addTrack} from "../playbar/Playbar";
import {useNavigate} from "react-router-dom";
import playlist from "../playlist/Playlist";

function loadSongs() {
    const home_songs = document.getElementById('home_songs')!;
    try {
        let song_data = JSON.parse(sessionStorage.getItem('songs') as string)

        song_data.forEach((song: any) => {
            home_songs.innerHTML += '<li class="songs_item" style="background-image: url(' + song.image + ')" id="' + song.name + '"><div class="song"><p class="song_title">'
                + song.name + '</p><p class="song_author">' + song.artist + '</p></div></li>'
        })

        let songs = document.getElementsByClassName('songs_item');
        for (let i = 0; i < songs.length; i++) {
            songs[i].addEventListener('click', () => {
                addTrack(songs[i].id)
            })
        }
    } catch (e) {
        home_songs.innerHTML = '<h4 style="margin-left: 50px">Cannot find Songs! Please try reloading!</h4>'
        console.log('Failed to get song data.')
    }
}

function loadPlaylists() {
    const home_playlists = document.getElementById('home_playlists')!;
    try {
        let playlist_data: any = JSON.parse(sessionStorage.getItem('playlists') as string)
        playlist_data.forEach((playlist: any) => {
            let image = playlist.image
            if (image === null) {
                image = "../../graphics/Default playlist Photo.png";
            }
            home_playlists.innerHTML += '<li class="playlists_item" style="background-image: url(' + image + ')" id="' + playlist.name +
                '"><div class="playlist"><p class="playlist_name">' + playlist.name + '</p><p class="playlist_count">' + (playlist.songs.length) + '</p></div></li>';
        })

        let playlists = document.getElementsByClassName('playlists_item');
        for (let i = 0; i < playlists.length; i++) {
            playlists[i].addEventListener('click', () => {
                const navigate = useNavigate();
                navigate("ThunderBox/playlist", {state: {name: playlist.name}});
            })
        }
    } catch (e) {
        home_playlists.innerHTML = '<h4 style="margin-left: 50px">Cannot find Playlists! Please try reloading!</h4>'
        console.log('Failed to get playlist data.')
    }
}

function Home() {
    useEffect(() => {
        loadSongs();
        loadPlaylists()
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