import React, { useEffect } from 'react';
import './ThankYouPage.css'; // Create this CSS file for styling

const ThankYouPage = () => {
  
    return (
        <div className="thank-you-container">
            <h1>Thank You for Your Purchase!</h1>
            <p>Your order has been successfully placed. We will send you a confirmation email shortly.</p>
            <p>If you have any questions, feel free to <a href="mailto:support@example.com">contact our support team</a>.</p>
        </div>
    );
};

export default ThankYouPage;
