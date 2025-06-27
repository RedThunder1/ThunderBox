import React from 'react';
import './Search.css'

export default function Search() {
    return (
        <div className="search">
            <input type={"text"} placeholder={"Search Songs"} className="searchbar" />
            <div className="search_results">
                <div className="results">

                </div>
                <div className="filters">

                </div>
            </div>
        </div>
    )
}