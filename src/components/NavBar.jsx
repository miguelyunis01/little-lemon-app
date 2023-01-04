import React from 'react';
import '../style/NavBar.css'

const NavBar = () => {
    return (
        <nav className='navBar'>
            <ul className='navMenu'>
                <li className='liMenu' >Home</li>
                <li className='liMenu' >About</li>
                <li className='liMenu' >Menu</li>
                <li className='liMenu' >Reservation</li>
                <li className='liMenu' >Order Online</li>
                <li className='liMenu' >Login</li>
            </ul>
        </nav>
    );
};

export default NavBar;