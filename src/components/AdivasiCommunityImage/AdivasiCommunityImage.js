// AdivasiCommunityImage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AdivasiCommunityImage.css';
import communityImageBottomLeft from '../../assets/AdivasiCommunity-1.jpg'; // First image
import communityImageTopRight from '../../assets/AdivasiCommunity-2.jpg'; // Second image

const AdivasiCommunityImage = () => {
    return (
        <div className="adivasi-community-container">
            <div className="adivasi-community-text top-left">
                <h1>Healthy Beautiful Hair Since 1958. </h1>
                <h1>Try Adivasi Hair Oil Today!</h1>
            </div>
            <div className="adivasi-community-text bottom-right">
                <h2>Original Adivasi Community</h2>
                <Link to="/catalog" className="bottom-right-button">Order Cash On Delivery</Link>
            </div>
            <div className="adivasi-community-images">
                <img src={communityImageTopRight} alt="Adivasi Community Top Right" className="image-top-right" />
                <img src={communityImageBottomLeft} alt="Adivasi Community Bottom Left" className="image-bottom-left" />
            </div>
        </div>
    );
};

export default AdivasiCommunityImage;
