import myResume from '../assets/ZacharyBarnes-resume.pdf';
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <header id="navbar">
            <div className="nav-div">
                <ul className="nav-menu">
                    <li><a className="nav-item" href="#about">About</a></li>
                    <li><a className="nav-item" href="#projects">Projects</a></li>
                    <li><a className="nav-item" href="#contact">Contact Me</a></li>
                    <li><Link className="nav-item" rel='noreferrer' target='_blank' to={myResume}>Resume</Link></li>
                </ul>
                <ul className='social-menu'>
                    <li><Link target='_blank' to={'https://github.com/TooSparky'}><i className="fa-brands fa-github nav-item"></i></Link></li>
                    <li><Link target='_blank' to={'https://www.linkedin.com/feed/'}><i className="fa-brands fa-linkedin nav-item"></i></Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;
