import axios from "axios";

export function loadSongs() {
    axios.get("http://localhost:8000/api/songs")
        .then(function(res) {
            sessionStorage.setItem("songs", JSON.stringify(res.data));
        })
}

export function loadPlaylists() {
    axios.get("http://localhost:8000/api/playlists")
        .then(function(res) {
            sessionStorage.setItem("playlists", JSON.stringify(res.data));
        })
}