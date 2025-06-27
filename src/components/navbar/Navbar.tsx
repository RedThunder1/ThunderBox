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
                    <Link className="nav_link" to={"/ThunderBox"}><i className="icon-home"></i>   Home</Link>
                </li>
                <li className="nav_item">
                    <Link className="nav_link" to={"ThunderBox/library"}><i className="icon-playlist"></i>   Library</Link>
                </li>
            </ul>
            <div className="settings">
                <div className="account">
                    <Link className="account_button" to="ThunderBox/login"><i className="icon-user"></i></Link>
                </div>
                <div className="settings_menu">
                    <Link className="settings_button" to="ThunderBox/settings"><i className="icon-settings"></i></Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;