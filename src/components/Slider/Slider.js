import React, {useState} from 'react';
import './Slider.css'; // Optional: for custom styling

const Slider = () => {
    const [currentIndex,
        setCurrentIndex] = useState(0);

    // Define the video URL
    const videoUrl = 'https://res.cloudinary.com/dmmrbxddi/video/upload/v1725450072/Aadivasi_Community_Video_nlysob.mp4';

    // Define image URLs from AWS S3
    const imageUrls = [
        'https://aadivasicommunityimages.s3.ap-south-1.amazonaws.com/Hairoil-1.jpg',
        'https://aadivasicommunityimages.s3.ap-south-1.amazonaws.com/Hairoil-2.jpg',
        'https://aadivasicommunityimages.s3.ap-south-1.amazonaws.com/Hairoil-3.jpg',
        'https://aadivasicommunityimages.s3.ap-south-1.amazonaws.com/Hairoil-4.jpg',
        'https://aadivasicommunityimages.s3.ap-south-1.amazonaws.com/Hairoil-5.jpg',
        'https://aadivasicommunityimages.s3.ap-south-1.amazonaws.com/Hairoil-6.jpg',
        'https://aadivasicommunityimages.s3.ap-south-1.amazonaws.com/Hairoil-7.jpg',
        'https://aadivasicommunityimages.s3.ap-south-1.amazonaws.com/Hairoil-8.jpg'
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (imageUrls.length + 1));
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + imageUrls.length + 1) % (imageUrls.length + 1));
    };

    return (
        <div className="slider-container">
            <div className="slider-content">
                <div
                    style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <button className="slider-control prev"onClick={handlePrevious}>❮</button>

                    {currentIndex === 0
                        ? (
                            <div className="video-container">
                                <video src={videoUrl} width="225" // Set the desired width
                                    height="400" // Set the desired height
                                    controls autoPlay/>
                            </div>
                        )
                        : (<img src={imageUrls[currentIndex - 1]} alt="slider" className="slider-image"/>)}
                    <button className="slider-control next" onClick={handleNext}>❯</button>

                </div>

            </div>
        </div>
    );
};

export default Slider;
