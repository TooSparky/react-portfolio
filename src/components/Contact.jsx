import { Link } from 'react-router-dom';
import { useState } from 'react';

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function encrypt(data) {
        return Object.keys(data).map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
    }

    function submitFormHandler(event) {
        event.preventDefault();
        fetch('/', {
            method: 'POST',
            headers: { 'Content-type': 'application/x-www-form-urlencoded' },
            body: encrypt({ 'form-name': 'contact', name, email, message }),
        }).then(() => alert('Message sent!')).catch((error) => alert(error));
    }

    return (
        <section id="contact" className="">
            <div className="whole-container">
                <div className="contact-container">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="contact-map"
                        style={{ filter: "opacity(0.7)" }}
                        src="https://www.google.com/maps/embed/v1/place?q=Lees+Summit,+MO,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                        />
                </div>            
                    <div className="my-info-container">
                        <div className="my-info">
                            <h2 className="email-heading">
                                My Email
                            </h2>
                            <Link href="" className="my-email">
                                16zacharybarnes@gmail.com
                            </Link>
                        </div>
                    </div>
                <form name="contact" onSubmit={submitFormHandler} className="contact-form">
                    <h2 className="contact-heading">
                        Something to Say?
                    </h2>
                    <p className="contact-text">
                        Contact me!
                    </p>
                    <div className="user-name">
                        <input placeholder='Name' type="text" id="name" name="name" className="contact-name" onChange={(event) => setName(event.target.value)} />
                    </div>
                    <div className="user-email">
                        <input placeholder='Email' type="email" id="email" name="email" className="contact-email" onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className="user-message">
                        <textarea placeholder='Message' name="message" id="message" className="contact-message" onChange={(event) => setMessage(event.target.value)} ></textarea>
                    </div>
                    <div className="user-submit">
                        <button type="submit" className="contact-submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;
