import React from "react";
import "./style.css";

function Signup(props) {
return (

    <div className="register styleRegisterWrap">
        <div className="resgister-container styleRegisterSubWrap">

        {props.status===1 ?
                    <div className="styleUserExists">
                        {props.message}
                    </div>
                    :
                    <div className="styleRegisterMsg">
                    {props.message}
                    </div>}

    <form className="register styleRegister">

            <div className="form-group">
                <label htmlFor="title"><h4>SIGNUP</h4></label>
                <input
                onChange={props.handleRegisterChange}
                name="regfirstname"
                type="text"
                placeholder="enter firstname"
                value={props.firstname}
                required
                />

                <input
                onChange={props.handleRegisterChange}
                name="reglastname"
                type="text"
                placeholder="enter lastname"
                value={props.lastname}
                required
                />

                <input
                onChange={props.handleRegisterChange}
                name="regusername"
                type="text"
                placeholder="choose a username"
                value={props.username}
                required
                />

                <input
                onChange={props.handleRegisterChange}
                name="respassword"
                type="password"
                placeholder="choose a password"
                value={props.password}
                requried
                />

                <button
                className="btn searchBtn"
                type="submit"
                onCLick={props.handleRegisterSubmit}>
                Submit
                </button>
            </div>
    </form>

        </div>
    </div>
)
}

export default Signup