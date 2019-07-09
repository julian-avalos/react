import React from 'react';
import './App.css';

function Header(){
    return(
        <div className="header">
            <div className="header__main">
                <h1>Julian Avalos</h1>
                <h2>Web Design and Development</h2>
                <h3>Ellensburg, WA</h3>
            </div>

            <div className="header__about">
                <h4>About Me</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolor ex sapiente odio officia eaque porro, aperiam earum itaque, delectus hic repellat. Corporis eum culpa quam quaerat, consequuntur rem necessitatibus.</p>
            </div>
        </div>

    );
}

export default Header;