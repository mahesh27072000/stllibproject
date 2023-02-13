import "../styles/Header.css";
import React, { useState } from "react";
import { Spiral as Hamburger } from "hamburger-react";
import appLocalStorage from "./localStorage";
import { useNavigate } from "react-router-dom";

const { getItem } = appLocalStorage;

const Header = () => {
    // state for toggling hamburger
    const [isOpen, setOpen] = useState(false);
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.clear();
        navigate("/");
        setOpen(!isOpen);
    };

    return (
        <nav>
            {/* Container for destop and tablet screens */}
            <div className="nav_container">
                {/* Logo */}
                <div className="logo">WebLib</div>
                {/* Navigation Items */}
                <ul>
                    <li>
                        <a href="/"> Home</a>
                    </li>
                    <li className="middle">
                        <a href="/search">Search</a>
                    </li>
                    {getItem("user") !== null ? (
                        <li>
                            <a href="/dashboard">Dashboard</a>
                        </li>
                    ) : (
                        ""
                    )}
                </ul>
                {/* Buttons for Sign up and Log in */}
                {getItem("user") === null ? (
                    <div className="buttons">
                        <a href="/login" className="log_in button">
                            Log in
                        </a>
                        <a href="/signup" className="sign_up button">
                            Sign Up
                        </a>
                    </div>
                ) : (
                    <button onClick={() => logOut()} className="sign_up button">
                        Log out
                    </button>
                )}
            </div>

            {/* Container for mobile screens */}
            <div className="nav_container_mobile nav_container">
                {/* Logo */}
                <div className="logo">WebLib</div>

                {/* For transperent background when menu show on mobile devices */}
                <div
                    className={`menu_transperent_background ${
                        isOpen ? "" : "display_none"
                    } `}
                >
                    <div className="menu">
                        {/* Navigation Items */}
                        <ul>
                            <li>
                                <a href="/"> Home</a>
                            </li>
                            <li className="middle">
                                <a href="/search">Search</a>
                            </li>
                            {getItem("user") !== null ? (
                                <li>
                                    <a href="/dashboard">Dashboard</a>
                                </li>
                            ) : (
                                ""
                            )}
                        </ul>
                        {/* Buttons for Sign up and Log in */}
                        {getItem("user") === null ? (
                            <div className="buttons">
                                <a href="/login" className="log_in button">
                                    Log in
                                </a>
                                <a href="/signup" className="sign_up button">
                                    Sign Up
                                </a>
                            </div>
                        ) : (
                            <button
                                onClick={() => logOut()}
                                className="sign_up button"
                            >
                                Log out
                            </button>
                        )}
                    </div>
                </div>
                {/* React Hamburger  */}
                <Hamburger toggled={isOpen} toggle={setOpen} duration={0} />
            </div>
        </nav>
    );
};

export default Header;
