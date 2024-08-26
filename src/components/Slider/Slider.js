import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Import slick carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick carousel theme CSS
import './Slider.css'; // Custom styles for the slider

// Import local images and video
import image1 from '../../assets/Hairoil-1.jpg';
import image2 from '../../assets/Hairoil-2.jpg';
import image3 from '../../assets/Hairoil-3.jpg';
import video1 from '../../assets/Aadivasi_Community_Latest_Video.mp4';

// Array of images and video, with video first
const media = [
    { type: 'video', src: video1 },
    { type: 'image', src: image1 },
    { type: 'image', src: image2 },
    { type: 'image', src: image3 }
];

// Custom arrow components
const PrevArrow = (props) => (
    <button className="slick-arrow slick-prev" {...props}>
        &#10094; {/* Left arrow symbol */}
    </button>
);

const NextArrow = (props) => (
    <button className="slick-arrow slick-next" {...props}>
        &#10095; {/* Right arrow symbol */}
    </button>
);

const SliderComponent = () => {
    const sliderRef = useRef(null); // Reference to the Slider component
    const videoRefs = useRef([]); // Array to hold references to video elements
    const [loadingIndex, setLoadingIndex] = useState(null); // State to track loading video

    // Slider settings with autoplay and custom arrows
    const settings = {
        dots: false, // Disable dots
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Interval between slides (in milliseconds)
        prevArrow: <PrevArrow />, // Use custom PrevArrow component
        nextArrow: <NextArrow />, // Use custom NextArrow component
        afterChange: (current) => {
            // Pause video when changing slides
            videoRefs.current.forEach((video, index) => {
                if (video && index !== current) {
                    video.pause();
                }
            });
        }
    };

    const handleCanPlay = (index) => {
        setLoadingIndex(null); // Video is ready to play, hide loading screen
    };

    const handleMouseEnter = (index) => {
        // No action needed here, playback handled by play button click
    };

    const handleMouseLeave = (index) => {
        const video = videoRefs.current[index];
        if (video) {
            video.pause();
            video.muted = true; // Mute when not hovered
        }
    };

    return (
        <div className="slider-container">
            <Slider {...settings} ref={sliderRef}>
                {media.map((item, index) => (
                    <div key={index}>
                        {item.type === 'image' ? (
                            <img src={item.src} alt={`Slide ${index + 1}`} className="slider-media" />
                        ) : (
                            <div className="video-container">
                                <video
                                    src={item.src}
                                    controls
                                    width="100%"
                                    height="auto"
                                    ref={(el) => (videoRefs.current[index] = el)}
                                    onCanPlay={() => handleCanPlay(index)}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={() => handleMouseLeave(index)}
                                />
                                {loadingIndex === index && (
                                    <div className="loading-overlay">
                                        <div className="loading-spinner"></div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SliderComponent;
