import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navBar">
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/about/">About</NavLink></li>
                <li><NavLink to="/contact/">Contact</NavLink></li>
            </ul>
        </nav>
    )
};
export default Navbar;