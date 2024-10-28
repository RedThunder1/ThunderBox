import React from 'react';
import './Navbar.css';
// @ts-ignore
import Logo from '../../graphics/ThunderBox.png'

function Navbar() {
    return (
        <div className="navbar">
            <img src={Logo} alt="logo" />
            <ul className="nav_list">
                <li className="nav_item">
                    <button className="nav_link"><i className="icon-home"></i>   Home</button>
                </li>
                <li className="nav_item">
                    <button className="nav_link"><i className="icon-playlist"></i>   Library</button>
                </li>
            </ul>
            <div className="settings">
                <div className="account">
                    <button className="account_button"><i className="icon-user"></i></button>
                </div>
                <button className="settings_button"><i className="icon-settings"></i></button>
            </div>
        </div>
    );
}

export default Navbar;