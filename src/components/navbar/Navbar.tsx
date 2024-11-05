import React from 'react';

import './Navbar.css';
import Logo from '../../graphics/ThunderBox.png'
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <img src={Logo} alt="logo" />
            <ul className="nav_list">
                <li className="nav_item">
                    <Link className="nav_link" to={"/"}><i className="icon-home"></i>   Home</Link>
                </li>
                <li className="nav_item">
                    <Link className="nav_link" to={"/library"}><i className="icon-playlist"></i>   Library</Link>
                </li>
            </ul>
            <div className="settings">
                <div className="account">
                    <Link className="account_button" to="/login"><i className="icon-user"></i></Link>
                </div>
                <button className="settings_button"><i className="icon-settings"></i></button>
            </div>
        </div>
    );
}

export default Navbar;