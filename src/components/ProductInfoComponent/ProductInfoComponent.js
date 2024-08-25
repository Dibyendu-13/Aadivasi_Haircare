import React from 'react';
import './ProductInfoComponent.css';
import ProductDetailComponent from '../ProductDetailComponent/ProductDetailComponent';

const ProductInfoComponent = () => {
    // Sample product data
    const product = {
        name: 'Natural Adivasi Hair Oil',
        oldPrice: ['2500','3500'],
        price: ['1500','2500'],
        variants: ['500ml', '1000ml'],
        quantity: 1,
        viewDetails:false
    };

    return (
        <div className="product-info-container">
            <ProductDetailComponent product={product} />
            <div className="product-description">
                <h2>Adivasi Hair Oil: A Timeless Tradition for Luxurious Hair</h2>
                <p><strong>Product Description:</strong></p>
                <p>Adivasi Hair Oil is a unique blend of natural herbs and oils, handcrafted to perfection using age-old recipes passed down by the Adivasi community since 1958. This authentic hair oil promises to nourish your hair from root to tip, providing the ultimate care and protection for all hair types.</p>
                
                <p><strong>Ingredients:</strong></p>
                <ul>
                    <li><strong>Bhringraj:</strong> Known for promoting hair growth and reducing hair fall.</li>
                    <li><strong>Amla:</strong> Rich in Vitamin C, it strengthens hair follicles and prevents premature greying.</li>
                    <li><strong>Brahmi:</strong> Improves hair health by repairing damaged hair and reducing split ends.</li>
                    <li><strong>Coconut Oil:</strong> Deeply moisturizes the scalp and adds shine to the hair.</li>
                    <li><strong>Neem:</strong> Has anti-fungal properties that keep the scalp healthy and dandruff-free.</li>
                    <li><strong>Henna:</strong> Conditions the hair naturally and adds a rich, natural color.</li>
                    <li><strong>Almond Oil:</strong> Rich in Vitamin E, it nourishes and softens the hair.</li>
                </ul>
                
                <p><strong>How to Use:</strong></p>
                <ol>
                    <li>Warm the Oil: Gently heat a small amount of Adivasi Hair Oil until it is lukewarm.</li>
                    <li>Apply: Using your fingertips, apply the oil to your scalp and hair, ensuring even coverage.</li>
                    <li>Massage: Massage the oil into your scalp for 5-10 minutes to enhance blood circulation.</li>
                    <li>Leave In: Leave the oil in for at least 2 hours or overnight for best results.</li>
                    <li>Wash: Rinse thoroughly with a mild shampoo.</li>
                </ol>
                
                <p><strong>Benefits:</strong></p>
                <ul>
                    <li>Promotes Hair Growth: The natural herbs in Adivasi Hair Oil stimulate hair follicles and promote hair growth.</li>
                    <li>Prevents Hair Fall: Strengthens the hair roots, reducing hair fall significantly.</li>
                    <li>Reduces Dandruff: Neem and other anti-fungal ingredients keep the scalp healthy and dandruff-free.</li>
                    <li>Adds Shine: Coconut and almond oils add a natural shine to your hair.</li>
                    <li>Conditions Naturally: Ingredients like henna and Brahmi provide natural conditioning, making your hair soft and manageable.</li>
                    <li>Prevents Premature Greying: Amla and other herbs prevent premature greying of hair.</li>
                </ul>

                <div className="customer-reviews">
                    <h3>Customer Reviews:</h3>
                    <ul>
                        <li>
                            <div className="reviewer-name">Radhika S.</div>
                            <div className="review-text">⭐⭐⭐⭐⭐ "I have been using Adivasi Hair Oil for the past six months, and the results are incredible. My hair fall has reduced drastically, and my hair feels much thicker and shinier. Highly recommend it!"</div>
                        </li>
                        <li>
                            <div className="reviewer-name">Vikram P.</div>
                            <div className="review-text">⭐⭐⭐⭐⭐ "This hair oil is magic! My dandruff problem is almost gone, and my scalp feels so much healthier. It's a must-try for anyone facing hair issues."</div>
                        </li>
                        <li>
                            <div className="reviewer-name">Neha M.</div>
                            <div className="review-text">⭐⭐⭐⭐⭐ "I've tried many hair oils, but nothing compares to Adivasi Hair Oil. The natural ingredients and the rich heritage behind it make it a standout product. My hair has never looked better!"</div>
                        </li>
                        <li>
                            <div className="reviewer-name">Arjun R.</div>
                            <div className="review-text">⭐⭐⭐⭐⭐ "I was skeptical at first, but after using Adivasi Hair Oil, I am a convert. My hair growth has improved, and it feels much more manageable. Worth every penny!"</div>
                        </li>
                    </ul>
                </div>

                <div className="product-heritage">
                    <h3>Heritage and Legacy:</h3>
                    <p>Since 1958, the Adivasi community has been crafting this exceptional hair oil using traditional methods passed down through generations. Each bottle of Adivasi Hair Oil embodies the rich cultural heritage and deep knowledge of natural ingredients that the Adivasi community is known for. By choosing Adivasi Hair Oil, you are not just opting for a hair care product but also supporting a community and its age-old traditions.</p>
                    <p>Discover the secret to beautiful, healthy hair with Adivasi Hair Oil – a legacy of nature, tradition, and care.</p>
                </div>
            </div>
        </div>
    );
};

export default ProductInfoComponent;
