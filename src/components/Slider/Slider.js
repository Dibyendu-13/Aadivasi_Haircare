import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Import slick carousel CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick carousel theme CSS
import './Slider.css'; // Custom styles for the slider

// Import local images and video
import image1 from '../../assets/Hairoil-1.jpg'; // Adjust path as necessary
import image2 from '../../assets/Hairoil-2.jpg';
import image3 from '../../assets/Hairoil-3.jpg';
import video1 from '../../assets/MediaCoverage.mp4'; // Adjust path as necessary

// Import VideoPlayer component
import VideoPlayer from '../VideoPlayer/VideoPlayer';

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
    const [currentSlide, setCurrentSlide] = useState(0); // State to track the current slide

    // Slider settings with autoplay and custom arrows
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Interval between slides (in milliseconds)
        prevArrow: <PrevArrow />, // Use custom PrevArrow component
        nextArrow: <NextArrow />, // Use custom NextArrow component
        afterChange: (current) => {
            setCurrentSlide(current); // Update the current slide index
            // Pause video when changing slides
            videoRefs.current.forEach((video, index) => {
                if (video && index !== current) {
                    video.getInternalPlayer().pause();
                }
            });
        }
    };

    const handleMouseEnter = (index) => {
        const video = videoRefs.current[index];
        if (video) {
            video.getInternalPlayer().play();
            video.getInternalPlayer().muted = false; // Unmute on hover
        }
    };

    const handleMouseLeave = (index) => {
        const video = videoRefs.current[index];
        if (video) {
            video.getInternalPlayer().pause();
            video.getInternalPlayer().muted = true; // Mute when not hovered
        }
    };

    return (
        <div className="slider-container">
            <Slider {...settings} ref={sliderRef}>
                {media.map((item, index) => (
                    <div key={index}>
                        {item.type === 'image' ? (
                            <img src={item.src} alt={`Slide ${index + 1}`} />
                        ) : (
                            <VideoPlayer
                                src={item.src}
                                controls
                                width="100%"
                                height="auto"
                                ref={(el) => (videoRefs.current[index] = el)}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave(index)}
                            />
                        )}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SliderComponent;
