import React, { useRef } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l0a3aej", // Replace with your EmailJS service ID
        "template_fzvnyuk", // Replace with your EmailJS template ID
        form.current,
        "ZHeI6UE4DIAdLc_f0"      // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log("Email sending failed:", error.text);
          alert("Email sending failed. Please try again.");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name:</label>
      <input type="text" name="user_name" required />

      <label>Email:</label>
      <input type="email" name="user_email" required />

      <label>Message:</label>
      <textarea name="message" required />

      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
