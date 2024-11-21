import React from 'react'
import {Link} from "react-router-dom";

function handleSubmit() {

}

function ForgotPassword() {
    return (
        <div className="forgot_password">
            <form className="login_form" onSubmit={handleSubmit}>
                <h1>Forgot Password</h1>
                <input type="Email" className="login_field" placeholder="Enter email to account"/>
                <input type="submit" className="submit_button" value="Send Request"/>
                <Link to="/ThunderBox/login" className="account_links">Back to Login</Link>
            </form>

        </div>
    );
}
export default ForgotPassword