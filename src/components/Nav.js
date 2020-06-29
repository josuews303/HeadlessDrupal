import React from 'react';
import '../App.css';

import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <h3>Drupal + React</h3>
            <ul className='nav-links'>
                <Link style={{color:'white'}} to='/'>
                    <li>Home</li>
                </Link>
                <Link style={{color:'white'}} to='/ads'>
                    <li>Community Ads</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
