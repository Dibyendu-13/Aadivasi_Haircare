import React from 'react';
import './Contact.css'; // Import your custom styles
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Show success toast notification
        toast.success('We Will Contact You Soon!');
    };

    return (
        <div className="contact-container">
            <div className="contact-form">
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment">Comment:</label>
                        <textarea id="comment" name="comment" placeholder="Enter your comment" rows="6" required></textarea>
                    </div>
                    <button type="submit" className="send-button">Send</button>
                </form>
            </div>
            
        </div>
    );
};

export default Contact;
