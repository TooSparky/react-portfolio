import selfImage from '../assets/WIN_20230531_12_47_29_Pro.jpg';

function About() {
    return (
        <section id="about">
            <div className="column-1">
                <h1 className="about-heading">
                    Hi, I am Zach
                </h1>
                <p className="about-text">
                    I am 21 years old, and a full-stack developer.
                    I have been coding for about a year, and my favorite part is always the challenge. 
                    The more difficult a problem, the better it feels to conquer it.
                    Coincidently, it is also the worst part becuase the answer is never simple.
                </p>
            </div>
            <div className="column-2">
                <div className="about-image">
                    <img id="selfImage" src={selfImage} alt="image of me here" />
                </div>
            </div>
        </section>
    )
}

export default About;
