import myResume from '../assets/ZacharyBarnes-resume.pdf';

function Navbar() {

    return (
        <header id="navbar">
            <div className="nav-div">
                <ul className="nav-menu">
                    <li><a className="nav-item" href="#about">About</a></li>
                    <li><a className="nav-item" href="#projects">Projects</a></li>
                    <li><a className="nav-item" href="#contact">Contact Me</a></li>
                    <li><a className="nav-item" rel='noreferrer' target='_blank' href={myResume}>Resume</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;
