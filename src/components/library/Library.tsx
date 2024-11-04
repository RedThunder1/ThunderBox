import React from 'react';
import classes from './Library.module.css'

function Library() {
    return (
        <div className={classes.library}>
            <input className={classes.searchbar} placeholder={"Search your library"} type={"search"}></input>
            <ul className={classes.playlists}>
                <li className={classes.playlists_item}>
                    <div className={classes.playlist}>
                        <p className={classes.playlist_name}>Name</p>
                        <p className={classes.playlist_count}>Song Count</p>
                    </div>
                </li>
                <li className={classes.playlists_item}>
                    <div className={classes.playlist}>
                        <p className={classes.playlist_name}>Name</p>
                        <p className={classes.playlist_count}>Song Count</p>
                    </div>
                </li>
                <li className={classes.playlists_item}>
                    <div className={classes.playlist}>
                        <p className={classes.playlist_name}>Name</p>
                        <p className={classes.playlist_count}>Song Count</p>
                    </div>
                </li>
                <li className={classes.playlists_item}>
                    <div className={classes.playlist}>
                        <p className={classes.playlist_name}>Name</p>
                        <p className={classes.playlist_count}>Song Count</p>
                    </div>
                </li>
                <li className={classes.playlists_item}>
                    <div className={classes.playlist}>
                        <p className={classes.playlist_name}>Name</p>
                        <p className={classes.playlist_count}>Song Count</p>
                    </div>
                </li>
                <li className={classes.playlists_item}>
                    <div className={classes.playlist}>
                        <p className={classes.playlist_name}>Name</p>
                        <p className={classes.playlist_count}>Song Count</p>
                    </div>
                </li>
                <li className={classes.playlists_item}>
                    <div className={classes.playlist}>
                        <p className={classes.playlist_name}>Name</p>
                        <p className={classes.playlist_count}>Song Count</p>
                    </div>
                </li>
                <li className={classes.playlists_item}>
                    <div className={classes.playlist}>
                        <p className={classes.playlist_name}>Name</p>
                        <p className={classes.playlist_count}>Song Count</p>
                    </div>
                </li>
                <li className={classes.playlists_item}>
                    <div className={classes.playlist}>
                        <p className={classes.playlist_name}>Name</p>
                        <p className={classes.playlist_count}>Song Count</p>
                    </div>
                </li>
                <li className={classes.playlists_item}>
                    <div className={classes.playlist}>
                        <p className={classes.playlist_name}>Name</p>
                        <p className={classes.playlist_count}>Song Count</p>
                    </div>
                </li>
                <li className={classes.playlists_item}>
                    <div className={classes.playlist}>
                        <p className={classes.playlist_name}>Name</p>
                        <p className={classes.playlist_count}>Song Count</p>
                    </div>
                </li>
                <li className={classes.playlists_item}>
                    <div className={classes.playlist}>
                        <p className={classes.playlist_name}>Name</p>
                        <p className={classes.playlist_count}>Song Count</p>
                    </div>
                </li>
                <li className={classes.playlists_item}>
                    <div className={classes.playlist}>
                        <p className={classes.playlist_name}>Name</p>
                        <p className={classes.playlist_count}>Song Count</p>
                    </div>
                </li>
                <li className={classes.playlists_item}>
                    <div className={classes.playlist}>
                        <p className={classes.playlist_name}>Name</p>
                        <p className={classes.playlist_count}>Song Count</p>
                    </div>
                </li>
            </ul>

        </div>
    );
}

export default Library;