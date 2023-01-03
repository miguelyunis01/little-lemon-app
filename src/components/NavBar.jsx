import React from 'react';
import '../style/NavBar.css'

const NavBar = () => {
    return (
        <nav className='navBar'>
            <ul className='navMenu'>
                <li className='liMenu' ><a href=""></a>Home</li>
                <li className='liMenu' ><a href=""></a>About</li>
                <li className='liMenu' ><a href=""></a>Menu</li>
                <li className='liMenu' ><a href=""></a>Reservation</li>
                <li className='liMenu' ><a href=""></a>Order Online</li>
                <li className='liMenu' ><a href=""></a>Login</li>
            </ul>
        </nav>
    );
};

export default NavBar;