import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
            COMPANY NAME    
            </Link>

            <div>
                <ul className="nav navbar-nav navbar-center">   
                    <li className="nav-item1">
                        <Link
                            to="/signin"
                            className={
                                window.location.pathname === "/signin" || window.location.pathname === "/signin"
                                ? "nav-link active"
                                :"nav-link"
                            }
                            >
                            Signin   
                        </Link>  
                    </li>

                    <li className="nav-item2">
                        <Link
                        to = "/signup"
                        className={
                            window.location.pathname === "/" || window.location.pathname === "/signup"
                                ? "nav-link active"
                                :"nav-link"
                        }
                        >
                        Signup
                        </Link>
                    </li>

                 <li className="nav-item3">
                        <Link
                        to ="/login"
                        className={
                            window.location.pathname === "/" || window.location.pathname === "/login"
                                ? "nav-link active"
                                :"nav-link"
                        }
                        >
                        Login
                        </Link>
                 </li>

                 <li className="nav-item4">
                        <Link
                        to ="/logout"
                        className={
                            window.location.pathname === "/" || window.location.pathname === "/logout"
                                ? "nav-link active"
                                :"nav-link"
                        }
                        >
                        Logout
                        </Link>
                 </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;