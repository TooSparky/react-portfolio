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
            <div className="">
                <div className="">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className=""
                        style={{ filter: "opacity(0.7)" }}
                        src="https://www.google.com/maps/embed/v1/place?q=Lees+Summit,+MO,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                        />
                    <div className="">
                        <div className="">
                            <h2 className="">
                                Address
                            </h2>
                            <p className="">
                                more address
                            </p>
                        </div>
                        <div className="">
                            <h2 className="">
                                Email
                            </h2>
                            <Link href="" className="">
                                actual email here
                            </Link>
                            <h2 className="">
                                Phone
                            </h2>
                            <p className="">phone number here</p>
                        </div>
                    </div>
                </div>
                <form name="contact" onSubmit={submitFormHandler} className="">
                    <h2 className="">
                        Hire Me
                    </h2>
                    <p className="">

                    </p>
                    <div className="">
                        <label htmlFor="name" className="">
                            Name
                        </label>
                        <input type="text" id="name" name="name" className="" onChange={(event) => setName(event.target.value)} />
                    </div>
                    <div className="">
                        <label htmlFor="email" className="">
                            Email
                        </label>
                        <input type="email" id="email" name="email" className="" onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className="">
                        <label htmlFor="message" className="">
                            Message
                        </label>
                        <textarea name="message" id="message" className="" onChange={(event) => setMessage(event.target.value)} ></textarea>
                    </div>
                    <button type="submit" className="">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
