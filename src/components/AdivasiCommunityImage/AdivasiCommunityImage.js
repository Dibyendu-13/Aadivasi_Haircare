import React from 'react';
import { Link } from 'react-router-dom';
import './AdivasiCommunityImage.css';

const AdivasiCommunityImage = () => {
    // Define S3 URLs for images
    const imageTopRight = 'https://aadivasicommunityimages.s3.ap-south-1.amazonaws.com/AdivasiCommunity-2.jpg';
    const imageBottomLeft = 'https://aadivasicommunityimages.s3.ap-south-1.amazonaws.com/AdivasiCommunity-1.jpg';

    return (
        <div className="adivasi-community-container">
            <div className="adivasi-community-text top-left">
                <h1>Healthy Beautiful Hair Since 1958.</h1>
                <h1>Try Adivasi Hair Oil Today!</h1>
            </div>
            <div className="adivasi-community-text bottom-right">
                <h2>Original Adivasi Community</h2>
                <Link to="/catalog" className="bottom-right-button">Order Cash On Delivery</Link>
            </div>
            <div className="adivasi-community-images">
                <img src={imageTopRight} alt="Adivasi Community Top Right" className="image-top-right" />
                <img src={imageBottomLeft} alt="Adivasi Community Bottom Left" className="image-bottom-left" />
            </div>
        </div>
    );
};

export default AdivasiCommunityImage;
