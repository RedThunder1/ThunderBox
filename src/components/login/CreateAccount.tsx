import React from 'react'

function handleSubmit() {

}

function CreateAccount() {
    return (
        <div className="CreateAccount">
            <form onSubmit={handleSubmit} className="login_form">
                <h1>Create Account</h1>
                <input type="text" className="login_field" placeholder="Username"/>
                <input type="email" className="login_field" placeholder="Email Address"/>
                <input type="password" className="login_field" placeholder="Password"/>
                <p>Confirm Password</p>
                <input type="password" className="login_field" placeholder="Confirm Password"/>
                <input className="submit_button" type="submit" value="Create Account"/>
            </form>
        </div>
    );
}

export default CreateAccount;