import React, {useEffect} from 'react';
import './Playbar.css';


let song_name: HTMLParagraphElement;
let song_author: HTMLParagraphElement;
let song_photo: HTMLImageElement;

let start_control: HTMLElement;
let play_control: HTMLElement;
let end_control: HTMLElement;

let playtime_slider: number = 0;
let volume_slider: number = 0;
let current_playtime: string;
let total_playtime: string;

let playing: boolean = false;
let updateTimer: NodeJS.Timer;
let songIndex: number = 0;
let current_track = document.createElement("audio")

let track_list = [
    {
        name: "Night Owl",
        artist: "Broke For Free",
        image: "https://images.pexels.com/photos/2264753/pexels-photo-2264753.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3"
    },
    {
        name: "Enthusiast",
        artist: "Tours",
        image: "https://images.pexels.com/photos/3100835/pexels-photo-3100835.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3"
    },
    {
        name: "Shipping Lanes",
        artist: "Chad Crouch",
        image: "https://images.pexels.com/photos/1717969/pexels-photo-1717969.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3",
    },
];

function loadTrack(track_index: number) {
    clearInterval(updateTimer);
    resetValues();
    current_track.src = track_list[track_index].path;
    current_track.load();

    //song_photo.src = track_list[track_index].image
    //song_name.textContent = track_list[track_index].name;
    //song_author.textContent = track_list[track_index].artist;

    updateTimer = setInterval(seekUpdate, 1000);
    current_track.addEventListener("ended", nextTrack);
}

function resetValues() {
    try {
        current_playtime = "00:00";
        total_playtime = "00:00";
        playtime_slider = 0;
    } catch (e) {
        console.error(e);
    }
}

function playpauseTrack() {
    if (!playing) playTrack();
    else pauseTrack();
}

function playTrack() {
    current_track.play();
    playing = true;
}

function pauseTrack () {
    current_track.pause();
    playing = false;
}

function nextTrack() {
    if (songIndex < track_list.length - 1)
        songIndex += 1;
    else songIndex = 0;
    loadTrack(songIndex);
    playTrack();
}

function prevTrack() {
    if (songIndex > 0)
        songIndex -= 1;
    else songIndex = track_list.length - 1;
    loadTrack(songIndex);
    playTrack();
}

function seekTo() {
    current_track.currentTime = current_track.duration * (playtime_slider / 100);
}

function setVolume() {
    current_track.volume = volume_slider / 100;
}

function seekUpdate() {
    let seekPosition = 0;

    if (!isNaN(current_track.duration)) {
        seekPosition = current_track.currentTime * (100 / current_track.duration);

        playtime_slider = seekPosition;

        let currentMinutes = Math.floor(current_track.currentTime / 60);
        let currentSeconds = Math.floor(current_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(current_track.duration / 60);
        let durationSeconds = Math.floor(current_track.duration - durationMinutes * 60);

        if (currentSeconds < 10) { currentSeconds = +"0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = +"0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = +"0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = +"0" + durationMinutes; }

        current_track.textContent = currentMinutes + ":" + currentSeconds;
        total_playtime = durationMinutes + ":" + durationSeconds;
    }
}

loadTrack(songIndex);

function Playbar() {
    useEffect(() => {
        song_name = document.getElementById('song_name') as HTMLParagraphElement;
        song_author = document.getElementById("song_author") as HTMLParagraphElement;
        song_photo = document.getElementById("song_photo") as HTMLImageElement;

        start_control = document.getElementById("start_control")!;
        play_control = document.getElementById("play_control")!;
        end_control = document.getElementById("end_control")!;
    }, [])

    return (
        <div className="playbar">
            <ul className="song_controls">
                <li className="song_control">
                    <button className="control" onClick={prevTrack} id="start_control"><i
                        className="icon-control-start"></i></button>
                </li>
                <li className="song_control">
                    <button className="control" onClick={playpauseTrack} id="play_control"><i
                        className="icon-control-play"></i></button>
                </li>
                <li className="song_control">
                    <button className="control" onClick={nextTrack} id="end_control"><i
                        className="icon-control-end"></i></button>
                </li>
            </ul>
            <div className="playtime_slider">
                <input type="range" min="1" max="100" value={playtime_slider} className="slider" id="slider"/>
            </div>
            <div className="playtime">
                <div className="current_playtime" id="current_playtime">{current_playtime}</div>
                <p>/</p>
                <div className="total_playtime" id="total_playtime">{total_playtime}</div>
            </div>

            <div className="song_info">
                <div className="song_photo" id="song_photo"></div>
                <p className="song_name" id="song_name">Name</p>
                <p className="song_author" id="song_author">Author</p>
            </div>
            <div className="volume_controls">
                <input type="range" min="1" max="100" className="volume" id="volume" onChange={setVolume}/>
                <i className="icon-volume-1"></i>
            </div>
        </div>
    );
}

export default Playbar;