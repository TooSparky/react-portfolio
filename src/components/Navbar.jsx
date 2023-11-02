import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <header>
            <div className="dropdown" data-bs-theme="light">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonLight" data-bs-toggle="dropdown" aria-expanded="false">
                    Default dropdown
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonLight">
                    <li><Link className="dropdown-item" href="#about">About</Link></li>
                    <li><Link className="dropdown-item" href="#contact">Contact Me</Link></li>
                    <li><Link className="dropdown-item" href="#projects">Projects</Link></li>
                    <li><Link className="dropdown-item" href="#resume">Resume</Link></li>
                </ul>
            </div>

            <div className="dropdown" data-bs-theme="dark">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButtonDark" data-bs-toggle="dropdown" aria-expanded="false">
                    Dark dropdown
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonDark">
                    <li><Link className="dropdown-item" href="#about">About</Link></li>
                    <li><Link className="dropdown-item" href="#contact">Contact Me</Link></li>
                    <li><Link className="dropdown-item" href="#projects">Projects</Link></li>
                    <li><Link className="dropdown-item" href="#resume">Resume</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;
