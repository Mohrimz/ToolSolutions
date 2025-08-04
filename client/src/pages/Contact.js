import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-info">
        <h1>Contact Us</h1>
        <p className="contact-subtext">We’d love to hear from you! Reach out for inquiries, support, or collaboration.</p>
        <div className="contact-details">
          <p><strong>Email:</strong> info@toolsolutions.lk</p>
          <p><strong>Phone:</strong> +94 11 123 4567</p>
          <p><strong>Address:</strong> 123 Tool Street, Colombo, Sri Lanka</p>
        </div>
      </div>

      <form className="contact-form">
        <h2>Send Us a Message</h2>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
