function Homepage() {

    return (
        <main id="homepage">
            <section id="main">
                <div className="column">
                    <h1 className="brief-header"><span id="main-span">Zach Barnes Full Stack Developer</span></h1>
                </div>
            </section>

            <section id="about-me">
                <h2 className="about-me-heading">About Me</h2>
                <p className="about-me-text">My name is Zach Barnes, and I am a full-stack developer. After an assossiates degree, I decided to pursue coding. I began self-study,
                    when I then found a KU Coding Bootcamp, where I recieved my certificate and trainning. I love the challenges that coding possesses,
                    because it feels amazing when I solve the problem. 
                </p>
            </section>

            <section id="work">
                <h2 className="work-heading">Work</h2>
                <p className="work-text">*show some work here</p>
            </section>

            <section id="contact">
                <h2 className="contact-heading">Contact Me</h2>
                <p className="email"></p>
                <p className="phone"></p>
                <p className="github"></p>
                <p className="linkedin"></p>
            </section>
        </main>
    );
}

export default Homepage;
