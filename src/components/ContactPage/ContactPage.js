import React from 'react';
import './ContactPage.css'; // Import the CSS file

const ContactPage = () => {
  const whatsappLink = 'https://api.whatsapp.com/send?phone=917011028608&text=Hello%20Sir%20👋%2C%0A%0AI%27m%20interested%20in%20the%20Natural%20Adivasi%20Hair%20Oil.%20Could%20you%20please%20provide%20more%20details%20about%20this%20product%3F%20Specifically%2C%20I%27d%20like%20to%20know%20about%20its%20benefits%2C%20ingredients%2C%20and%20pricing.%0A%0AThanks%21';

  return (
    <div className="container">
      <h2 className="heading">Contact Us</h2>
      <p className="text">Feel free to reach us on WhatsApp!</p>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-link"
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp" 
          className="whatsapp-icon"
        />
        WhatsApp Us
      </a>
    </div>
  );
};

export default ContactPage;
