import { Link } from 'react-router-dom';

function Footer() {
    return (
        <section id="footer">
            <div className="scroll-top">
                <a href="#main" className="back-to-top">ZB</a>
            </div>
            <div className="footer">
                <h3 className="footer-text">Made by Zachary Barnes 2023.</h3>
                <Link target='_blank' to={'https://github.com/TooSparky'}><i className="fa-brands fa-github github-footer github-spacing"></i></Link>
                <Link target='_blank' to={'https://www.linkedin.com/feed/'}><i className="fa-brands fa-linkedin github-footer"></i></Link>
            </div>
        </section>
    );
}

export default Footer;
