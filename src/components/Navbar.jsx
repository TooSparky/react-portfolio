import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static">
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav custom-margin">
                        <li className="nav-item">
                            <Link className="nav-link" href="#work">My Projects <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link class="nav-link" href="#about-me">About Me</Link>
                        </li>
                        <li className="nav-item logo-home">
                            <Link class="nav-link" href="#main"></Link>
                        </li>
                        <li className="nav-item">
                            <Link class="nav-link custom-nav" href="#contact">Get in Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
