import React, { useRef, useContext } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from "./UserContext"; // import context for user data
import '../stylesSheets/Contact.css';

const Contact = () => {
    const form = useRef();
    const { user } = useContext(UserContext); // access user information

    const sendEmail = (e) => {
        e.preventDefault();

        // Check if user is logged in
        if (!user) {
            toast.error("Please log in to send a message.");
            return;
        }

        // Prepare message including user's email if logged in
        const messageWithUserEmail = `${form.current.message.value}\n\nFrom: ${user.email}`;

        emailjs.sendForm(
            "service_l0a3aej", 
            "template_fzvnyuk", 
            form.current, // Pass the form reference directly
            "ZHeI6UE4DIAdLc_f0"
        )
        .then(
            (result) => {
                console.log("Email sent successfully:", result.text);
                toast.success("Email sent successfully!");
                form.current.reset();
            },
            (error) => {
                console.log("Email sending failed:", error.text);
                toast.error("Email sending failed. Please try again.");
            }
        );
    };

    return (
        <div className="contact-container1" id="Contact">
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

            <h2 className="contact-h2">Contact Us</h2>
            <div className="contact-content1">
                <div className="contact-form1">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="form-group1">
                            <label className="contact-lable1" htmlFor="message">Any Queries:</label>
                            <textarea
                                className="contact-textarea1"
                                id="message"
                                name="message"
                                rows="4"
                                required
                                placeholder="Type your query here..."
                            ></textarea>
                        </div>
                        <button className="contact-btn" type="submit">Send Message</button>
                    </form>
                    <div className="contact-details">
                        <h3 className="contact-details-h3">Contact Details</h3>
                        <p className="contact-details-p">Email: <a href="mailto:varshith1220@gmail.com">varshith1220@gmail.com</a></p>
                        <p className="contact-details-p">Mobile: <a href="tel:9347910680">9347910680</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;
