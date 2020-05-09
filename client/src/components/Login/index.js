import React from 'react';
import './style.css';

function Login(props) {
    return(

    <div classname="login styleLoginWrap">
        <div className="login-container styleLoginSubWrap">

    
    <form className="login styleLogin" action="/login" method="post">

        <div className="form-group">
            <label htmlFor="title"><h4>LOGIN</h4></label>
            <input
                onChange={props.handleLoginChange}
                firstname="logfirstname"
                type="text"
                placeholder="First name"
                value={props.firstname}
                required
            />

            <input
                onChange={props.handleLoginChange}
                firstname="loglastname"
                type="text"
                placeholder="Last name"
                value={props.lastname}
                required
            />

            <input
                onChange={props.handleLoginChange}
                firstname="loglusername"
                type="text"
                placeholder="Username"
                value={props.username}
                required
            />

            <input
                onChange={props.handleLoginChange}
                firstname="logpassword"
                type="password"
                placeholder="Password"
                value={props.password}
                required
            />

            <button
            className="btn searchBtn"
            typw="submit"
            onClick={props.handleLoginSubmit}>
            Submit
            </button>
        </div>
    </form>
</div>
</div>
)
}
export default Login;