import React, {useEffect} from 'react';
import './Playbar.css';

let song_name: HTMLParagraphElement;
let song_author: HTMLParagraphElement;
let song_photo: HTMLImageElement;
let playtime_slider: HTMLInputElement;
let volume_slider: HTMLInputElement;
let current_playtime: HTMLDivElement;
let total_playtime: HTMLDivElement;

let playing: boolean = false;
let updateTimer: NodeJS.Timer;
let songIndex: number = 0;

let song_data: any

let current_track = document.createElement("audio")
let tools: HTMLElement

let queue: Array<{ name: string; artist: string; image: string; path: string}> = [];

export function setSongData() {
    song_data = JSON.parse(sessionStorage.getItem('songs') as string)
}

export function setTrack(name: string) {
    let song: Array<{ name: string; artist: string; image: string; path: string}>;
    song_data.forEach((item: any) => {
        if (item.name === name) {
            // @ts-ignore
            song = {name: item.name, artist: item.artist, image: item.image, path: item.path}
        }
    })
    //IDK why these are errors given it works, I'll figure it out later ¯\_(ツ)_/¯
    // @ts-ignore
    queue[0] = song
    nextTrack()
}

export function addTrack(name: string) {
    let song: Array<{ name: string; artist: string; image: string; path: string}>;
    song_data.forEach((item: any) => {
        if (item.name === name) {
            // @ts-ignore
            song = {name: item.name, artist: item.artist, image: item.image, path: item.path}
        }
    })
    //IDK why these are errors given it works, I'll figure it out later ¯\_(ツ)_/¯
    // @ts-ignore
    queue.push(song)
}

export function setQueue(songs: Array<{ name: string; artist: string; image: string; path: string }>) {
    queue = songs;
    loadTrack(songIndex)
    playTrack()
    if (tools.classList.contains('closed')) {
        tools.classList.toggle('closed');
    }
}

export function clearQueue() {
    queue = []
    if (!tools.classList.contains('closed')) {
        tools.classList.toggle('closed');
    }
}

function loadTrack(track_index: number) {
    clearInterval(updateTimer);
    resetValues();
    current_track.src = queue[track_index].path;
    current_track.load()

    try {
        song_photo.src = queue[track_index].image
        song_name.textContent = queue[track_index].name;
        song_author.textContent = queue[track_index].artist;
    } catch (e) { console.log(e) }


    updateTimer = setInterval(seekUpdate, 1000);
    current_track.addEventListener("ended", nextTrack);
}

function resetValues() {
    try {
        current_playtime.innerText = "00:00";
        total_playtime.innerText = "00:00";
        playtime_slider.valueAsNumber = 0;
    } catch (e) {
        console.error(e);
    }
}

function playpauseTrack() {
    if (queue.length < 1) {
        return
    }
    if (!playing) playTrack();
    else pauseTrack();
}

function playTrack() {
    current_track.play()
        .catch((e) => {
            console.log('Error while playing track!', e);
        });
    let button = document.getElementById("play_pause_button")!;
    if (!button.classList.contains('icon-control-play')) {
        button.classList.remove('icon-control-pause');
        button.classList.add('icon-control-play');
    }
    playing = true;
}

export function playTrackInQueue(i: number) {
    if (queue.length > 0) {
        songIndex = i
        loadTrack(songIndex)
        playTrack()
    }
}

function pauseTrack () {
    current_track.pause();
    let button = document.getElementById("play_pause_button")!;
    if (!button.classList.contains('icon-control-pause')) {
        button.classList.remove('icon-control-play');
        button.classList.add('icon-control-pause');
    }
    playing = false;
}

function nextTrack() {
    if (queue.length < 1) {
        return
    }
    if (songIndex < queue.length - 1)
        songIndex += 1;
    else songIndex = 0;
    loadTrack(songIndex);
    playTrack();
}

function prevTrack() {
    if (queue.length < 1) {
        return
    }
    if (current_track.currentTime > 5) {
        current_track.currentTime = 0;
        resetValues()
        return;
    }
    if (songIndex > 0)
        songIndex -= 1;
    else songIndex = queue.length - 1;
    loadTrack(songIndex);
    playTrack();
}

function seekTo() {
    current_track.currentTime = playtime_slider.valueAsNumber;
}

function setVolume() {
    current_track.volume = volume_slider.valueAsNumber / 100;
    let volume_icon = document.getElementById("volume_icon")!;
    volume_icon.classList.forEach((item) => {
        volume_icon.classList.remove(item);
    })
    if (volume_slider.valueAsNumber === 0) {
        volume_icon.classList.add('icon-volume-off');
    } else if (volume_slider.valueAsNumber > 0 && volume_slider.valueAsNumber < 50) {
        volume_icon.classList.add('icon-volume-1');
    } else {
        volume_icon.classList.add('icon-volume-2');
    }
}

function seekUpdate() {
    if (playtime_slider.max !== current_track.duration.toString()) {
        playtime_slider.max = current_track.duration.toString();
    }

    let seekPosition = 0;

    if (!isNaN(current_track.duration)) {
        seekPosition = current_track.currentTime;

        playtime_slider.valueAsNumber = seekPosition;

        let currentMinutes: any = Math.floor(current_track.currentTime / 60);
        let currentSeconds: any = Math.floor(current_track.currentTime - currentMinutes * 60);
        let durationMinutes: any = Math.floor(current_track.duration / 60);
        let durationSeconds: any = Math.floor(current_track.duration - durationMinutes * 60);
        let currentTime = [currentMinutes.toString(), currentSeconds.toString()]
        let durationTime = [durationMinutes.toString(), durationSeconds.toString()];

        if (currentSeconds < 10) { currentTime[1] = "0" + currentTime[1]}
        if (durationSeconds < 10) { durationTime[1] = "0" + durationTime[1]}

        current_playtime.innerText = currentTime[0] + ":" + currentTime[1];
        total_playtime.innerText = durationTime[0] + ":" + durationTime[1];
    }
}

function Playbar() {
    useEffect(() => {
        song_name = document.getElementById('song_name') as HTMLParagraphElement;
        song_author = document.getElementById("song_author") as HTMLParagraphElement;
        song_photo = document.getElementById("song_photo") as HTMLImageElement;
        current_playtime = document.getElementById("current_playtime") as HTMLDivElement;
        total_playtime = document.getElementById("total_playtime") as HTMLDivElement;

        volume_slider = document.getElementById("volume")! as HTMLInputElement;
        playtime_slider = document.getElementById("slider")! as HTMLInputElement;
        tools = document.getElementById("tools")!;
        resetValues();
    }, []);
    return (
        <div className="playbar">
            <ul className="song_controls">
                <li className="song_control">
                    <button className="control" onClick={prevTrack} id="start_control"><i
                        className="icon-control-start"></i></button>
                </li>
                <li className="song_control">
                    <button className="control" onClick={playpauseTrack} id="play_control"><i
                        className="icon-control-play" id="play_pause_button"></i></button>
                </li>
                <li className="song_control">
                    <button className="control" onClick={nextTrack} id="end_control"><i
                        className="icon-control-end"></i></button>
                </li>
            </ul>
            <div className="playtime_slider">
                <input type="range" min="1" max="100" className="slider" id="slider" onChange={seekTo}/>
            </div>
            <div className="playtime">
                <div className="current_playtime" id="current_playtime">00:00</div>
                <p> / </p>
                <div className="total_playtime" id="total_playtime">00:00</div>
            </div>

            <div className="song_info">
                <img className="song_photo" id="song_photo" alt="song_photo"></img>
                <p className="song_name" id="song_name"></p>
                <p className="song_author" id="song_author"></p>
            </div>
            <div className="tools closed" id="tools">
                <span className="icon-heart"/>
                <span className="icon-options-vertical"/>
            </div>
            <div className="volume_controls">
                <input type="range" min="0" max="100" className="volume" id="volume" onChange={setVolume}/>
                <i className="icon-volume-2" id="volume_icon"></i>
            </div>
        </div>
    );
}

export default Playbar;