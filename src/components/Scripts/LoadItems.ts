import axios from "axios";

export function fetchSongs() {
    try {
        axios.get("https://thunderbox-backend.onrender.com/api/songs")
            .then(function(res) {
                sessionStorage.setItem("songs", JSON.stringify(res.data));
            })
    } catch (e) {
        console.log('Failed to load songs');
    }
}

export function fetchPlaylists() {
    try {
        axios.get("https://thunderbox-backend.onrender.com/api/playlists")
            .then(function(res) {
                sessionStorage.setItem("playlists", JSON.stringify(res.data));
            })
    } catch (e) {
        console.log('Failed to load playlists');
    }
}