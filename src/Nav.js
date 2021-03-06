import React from 'react';
import './App.css'
import {Link} from 'react-router-dom';

function Nav() {
    const style={
        color:"white"
    };
    return (
        <nav>
            <h1>Logo</h1>
            <ul className="nav-links">
                <Link to='/about' style={style}>
                    <li>About</li>
                </Link>
                <Link to='/shop' style={style}>
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;