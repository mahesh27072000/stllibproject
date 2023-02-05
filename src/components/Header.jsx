import "../styles/Header.css";
import React, { useState } from "react";
import { Spiral as Hamburger } from "hamburger-react";

const Header = () => {
    // state for toggling hamburger
    const [isOpen, setOpen] = useState(false);
    return (
        <nav>
            {/* Container for destop and tablet screens */}
            <div className="nav_container">
                {/* Logo */}
                <div className="logo">WebLib</div>
                {/* Navigation Items */}
                <ul>
                    <li>Home</li>
                    <li className="middle">Search</li>
                    <li>Cart</li>
                </ul>
                {/* Buttons for Sign up and Log in */}
                <div className="buttons">
                    <button className="log_in">Log in</button>
                    <button className="sign_up">Sign Up</button>
                </div>
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
                            <li>Home</li>
                            <li className="middle">Search</li>
                            <li>Cart</li>
                        </ul>
                        {/* Buttons for Sign up and Log in */}
                        <div className="buttons">
                            <button className="log_in">Log in</button>
                            <button className="sign_up">Sign Up</button>
                        </div>
                    </div>
                </div>
                {/* React Hamburger  */}
                <Hamburger
                    toggled={isOpen}
                    toggle={setOpen}
                    color={
                        "linear-gradient(to right,hsl(136, 65%, 51%),hsl(192, 70%, 51%))"
                    }
                />
            </div>
        </nav>
    );
};

export default Header;
