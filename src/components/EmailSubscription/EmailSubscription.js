import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import './EmailSubscription.css'; // Import your custom styles

const EmailSubscription = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false); // State to manage form submission

    const handleChange = (e) => setEmail(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Set submitting state to true

        // Use environment variables for EmailJS credentials
        const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateID = process.env.REACT_APP_EMAILJS_SUBSCRIPTION_ID;
        const userID = process.env.REACT_APP_EMAILJS_USER_ID;

        const templateParams = {
            to_email: email, // Pass the recipient email address here
            email: email
        };

        emailjs.send(serviceID, templateID, templateParams, userID)
            .then((response) => {
                toast.success('Subscription successful!');
                setEmail(''); // Clear the email input field
                setIsSubmitting(false); // Reset submitting state
            })
            .catch((error) => {
                console.error('EmailJS error:', error);
                toast.error('Subscription failed. Please try again.');
                setIsSubmitting(false); // Reset submitting state
            });
    };

    return (
        <div className="email-subscription">
            <h2>Subscribe to our emails</h2>
            <p>Be the first to know about new collections and exclusive offers.</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleChange}
                    required
                    className="email-input"
                />
                <button type="submit" className="subscribe-button" disabled={isSubmitting}>
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
            </form>
        </div>
    );
};

export default EmailSubscription;
