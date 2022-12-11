import React from "react";

const Navbar = () => {

    return(
        <nav className="top__navbar container">
            <div className="row">
                <div className="left">
                    <ul>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Help</li>
                        <li>FAQs</li>
                    </ul>
                </div>
                <div className="right">
                    <ul>
                        <li>
                            <select>
                                <option value="My Account">My Account</option>
                                <option value="My Account">sign in</option>
                                <option value="My Account">sign up</option>
                            </select>
                        </li>
                        <li>
                            <select>
                                <option value="My Account">USD</option>
                                <option value="My Account">EUR</option>
                                <option value="My Account">GBP</option>
                                <option value="My Account">CAD</option>
                            </select>
                        </li>
                        <li>
                            <select>
                                <option value="My Account">EN</option>
                                <option value="My Account">FR</option>
                                <option value="My Account">AR</option>
                                <option value="My Account">RU</option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;