//--------------------------------------------------------
// We import
//--------------------------------------------------------
import React from 'react';
import '../assets/styles/components/Header.scss';



const Header = () => (
    <header className="header">
        <img className="header__img" src="../assets/logo-platzi-video-BW2.png" alt="Platzi Video" ></img>
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src="../assets/user-icon.png" alt=""></img>
                <p>Perfil</p>
            </div>
        </div>
        <ul>
            <li><a href="/">Cuenta</a></li>
            <li><a href="/">Cerrar Sesión</a></li>
        </ul>
    </header>

);

export default Header;