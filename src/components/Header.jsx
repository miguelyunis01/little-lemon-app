import React from 'react';
import NavBar from './NavBar'
import '../style/Header.css'
import navLogo from '../img/navLogo.png'

const Header = () => {
    return (
        <div className='headerContainer'>
            <img className='navBarLogo'  src={navLogo} alt="navigation logo" />
            <NavBar />
        </div>
    );
};

export default Header;