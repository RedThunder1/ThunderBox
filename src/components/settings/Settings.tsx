import React, {useEffect} from 'react'
import './Settings.css'
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;

let active_theme = 'dark';

function SetLight() { //Light mode is terrible don't use it (I'm not good at design)
    document.documentElement.style.setProperty("--primary-color", "#ffffff");
    document.documentElement.style.setProperty("--secondary-color", "#273267");
    document.documentElement.style.setProperty("--tertiary-color", "#0f1a4c");
    document.documentElement.style.setProperty("--quaternary-color", "#2471e3");
    document.documentElement.style.setProperty("--accent-color", "#1a5bd5");
    document.documentElement.style.setProperty("--text-color", "#ffffff");
}

function SetDark() {
    document.documentElement.style.setProperty("--primary-color", "#11131e");
    document.documentElement.style.setProperty("--secondary-color", "#0a0d13");
    document.documentElement.style.setProperty("--tertiary-color", "#0a0d13");
    document.documentElement.style.setProperty("--quaternary-color", "#222935");
    document.documentElement.style.setProperty("--accent-color", "#1987ff");
    document.documentElement.style.setProperty("--text-color", "#f4f4f4");
}



//Once I set up accounts I'll save settings and load used themes and set them here
export function InitTheme() {
    if (active_theme === 'light') {
        SetLight();
    } else {
        active_theme = 'dark';
        SetDark();
    }
}

function ChangeTheme() {
    if (active_theme === 'light') {
        active_theme = 'dark';
        SetDark();
    } else if (active_theme === 'dark') {
        active_theme = 'light';
        SetDark();
    } else {
        active_theme = 'dark';
        SetDark();
    }
    console.log(active_theme);
}

export default function Settings() {
    useEffect(() => {
        InitTheme();
    }, [])
    return (
        <div className="settings">
            <label className="theme_switch">
                <input type="checkbox" onClick={ChangeTheme} />
                <span className="theme_slider"></span>
            </label>
        </div>
    )
}