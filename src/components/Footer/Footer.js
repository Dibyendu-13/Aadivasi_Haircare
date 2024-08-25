// Footer.js
import React from 'react';
import './Footer.css'; // Import your custom styles

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-info">
                    <p>&copy; {new Date().getFullYear()} Aadivasi Hair Oil. All rights reserved.</p>
                    <p>
                        <a href="/privacy-policy">Privacy Policy</a> | 
                        <a href="/terms-of-service"> Terms of Service</a>
                    </p>
                </div>
             
            </div>
        </footer>
    );
};

export default Footer;
