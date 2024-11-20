import React, {useEffect} from 'react';
import classes from './Library.module.css'

function Library() {
    useEffect(() => {

    }, [])
    return (
        <div className={classes.library}>
            <input className={classes.searchbar} placeholder={"Search your library"} type={"search"}></input>
            <ul className={classes.playlists} id="library_playlists">
                <li className={classes.playlists_item}>
                    <div className={classes.playlist}>
                        <p className={classes.playlist_name}>Default Songs</p>
                        <p className={classes.playlist_count}>Song Count: 3</p>
                    </div>
                </li>
            </ul>

        </div>
    );
}

export default Library;