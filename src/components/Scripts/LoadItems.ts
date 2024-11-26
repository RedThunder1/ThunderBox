import axios from "axios";

export function loadSongs() {
    try {
        axios.get("http://localhost:8000/api/songs")
            .then(function(res) {
                sessionStorage.setItem("songs", JSON.stringify(res.data));
            })
    } catch (e) {
        console.log('Failed to load songs');
    }
}

export function loadPlaylists() {
    try {
        axios.get("http://localhost:8000/api/playlists")
            .then(function(res) {
                sessionStorage.setItem("playlists", JSON.stringify(res.data));
            })
    } catch (e) {
        console.log('Failed to load playlists');
    }
}