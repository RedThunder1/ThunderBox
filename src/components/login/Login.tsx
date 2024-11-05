import React from 'react'
import './Login.css'
import {Link} from "react-router-dom";

function handleSubmit() {

}

function Login() {
    return (
        <div className="login">
            <form onSubmit={handleSubmit} className="login_form">
                <h1>Login</h1>
                <input type="email" className="login_field" placeholder="Email Address"/>
                <input type="password" className="login_field" placeholder="Password"/>
                <label className="checkbox_label"><input type="checkbox" className="checkbox"/> Stay logged in</label>
                <input className="submit_button" type="submit"/>
                <Link to="/ThunderBox/createaccount" className="account_links">Create Account</Link>
                <Link to="/ThunderBox/forgotpassword" className="account_links">Forgot Password</Link>
            </form>

        </div>
    );
}

export default Login;