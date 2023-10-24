import React from 'react';
import {NavLink} from 'react-router-dom';


function Navbar() {
    return (
            <nav className="navBar">
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/about/">About</NavLink></li>
                    <li><NavLink to="/calcultaxe">TaxeQC</NavLink></li>
                </ul>
            </nav>
    );
}

export default Navbar;