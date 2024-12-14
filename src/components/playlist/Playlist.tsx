import React, {useEffect} from 'react'
import './Playlist.css'
import ReactDOM from "react-dom/client";
import {playTrackInQueue, setQueue} from "../playbar/Playbar";

let active_playlist: any;
let track_list: any = []

function getPlaylist() {
    let playlist = JSON.parse(sessionStorage.getItem('active_playlist') as string)
    let playlist_data: any = JSON.parse(sessionStorage.getItem('playlists') as string)
    playlist_data.forEach((item: any) => {
        if (item.name === playlist) {
            active_playlist = item
        }
    })
    document.getElementById('title')!.innerText = active_playlist.name
    let root = ReactDOM.createRoot(document.getElementById('songs')!);
    let songs: any = [];
    //Using index in foreach loop doesn't work for some reason
    active_playlist.songs.forEach((song: any, index: number) => {
        track_list.push(song)
        songs.push(
            <div className="playlist_song" onClick={() => {
                loadPlaylist()
                playTrackInQueue(index)
            }}>
                <img className="song-image" src={song.image} alt="song image" />
                <div className="song-info">
                    <p className="song-name">{song.name}</p>
                    <p className="song-author">{song.artist}</p>
                </div>
                <div className="song-tools" id="song-tools">
                    <span className="icon-heart liked"/>
                    <span className="icon-options-vertical"/>
                </div>
            </div>
        )
    })
    root.render(songs)
}

function loadPlaylist() {
    setQueue(track_list)
}

function Playlist() {
    useEffect(() => {
        getPlaylist()
    }, []);
    return (
        <div className="playlist_screen" id="playlist_screen">
            <h1 id="title"></h1>
            <hr className="divider"/>
            <div className="toolbar">
                <span className="icon-control-play" onClick={loadPlaylist}/>
                <span className="icon-shuffle"/>
                <span className="icon-options-vertical"/>
            </div>
            <div id="songs">

            </div>
        </div>
    );
}
export default Playlist;