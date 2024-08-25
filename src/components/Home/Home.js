// Home.js
import React from 'react';
import SliderComponent from '../Slider/Slider'; // Import the slider component
import ProductDetailComponent from '../ProductDetailComponent/ProductDetailComponent'; // Import the product detail component
import AdivasiCommunityImage from '../AdivasiCommunityImage/AdivasiCommunityImage'; // Import the new component
import EmailSubscription from '../EmailSubscription/EmailSubscription'; // Import the email subscription component
import './Home.css'; // Import your custom styles

const Home = () => {
    // Sample product data
    const product = {
        name: 'Natural Adivasi Hair Oil',
        oldPrice: ['2500','3500'],
        price: ['1500','2500'],
        variants: ['500ml', '1000ml'],
        quantity: 1,
        viewDetails:true
    };

    return (
        <div className="home">
            <h1 className="home-heading">
                100% Natural Adivasi Hair Oil Made With 108 Kinds of Natural Herbs
            </h1>
            <div className="home-content">
                <SliderComponent />
                <ProductDetailComponent product={product} />
            </div>
            {/* Include the new AdivasiCommunityImage component */}
            <AdivasiCommunityImage />
            {/* Include the EmailSubscription component */}
            <EmailSubscription />
        </div>
    );
};

export default Home;
