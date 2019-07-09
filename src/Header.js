import React from 'react';
import './App.css';

function Header(){
    return(
        <div className="header">
            <div className="header__main">
                <h1>Julian Avalos</h1>
                <p>Web Design and Development</p>
                <p>Ellensburg, WA</p>
            </div>

            <div className="header__about">
                <h2>About Me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolor ex sapiente odio officia eaque porro, aperiam earum itaque, delectus hic repellat. Corporis eum culpa quam quaerat, consequuntur rem necessitatibus.</p>
            </div>
        </div>

    );
}

export default Header;