import React, {useEffect} from 'react';
import classes from './Library.module.css'
import {NavigateFunction, useNavigate, useNavigation} from "react-router-dom";
import ReactDOM from "react-dom/client";

function loadPlaylists(nav: NavigateFunction) {
    let root = ReactDOM.createRoot(document.getElementById('library_playlists')!);
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
                <li className={classes.playlists_item} style={styling} id={playlist.name} onClick={() => {
                    sessionStorage.setItem('active_playlist', JSON.stringify(playlist.name))
                    nav("/ThunderBox/playlist")
                }}>
                    <div className={classes.playlist}>
                        <p className={classes.playlist_name}>{playlist.name}</p>
                        <p className={classes.playlist_count}>{playlist.length} Songs</p>
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

function Library() {
    const navigate = useNavigate();
    useEffect(() => {
        loadPlaylists(navigate)
    }, [])
    return (
        <div className={classes.library}>
            <input className={classes.searchbar} placeholder={"Search your library"} type={"search"}></input>
            <ul className={classes.playlists} id="library_playlists">

            </ul>

        </div>
    );
}

export default Library;