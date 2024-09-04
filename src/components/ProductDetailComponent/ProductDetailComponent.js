import React, { useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './ProductDetailComponent.css';

const ProductDetailComponent = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || '');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % imageUrls.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    if (!product) {
        return <p>Product not found.</p>;
    }

    const imageUrls = [
        "https://aadivasicommunityimages.s3.ap-south-1.amazonaws.com/Product-Image-1.jpg",
        "https://aadivasicommunityimages.s3.ap-south-1.amazonaws.com/Product-Image-2.jpg",
    ];

    const variantIndex = product.variants.indexOf(selectedVariant);

    const incrementQuantity = () => setQuantity(prevQuantity => prevQuantity + 1);
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };
    const handleQuantityChange = (e) => setQuantity(Math.max(1, parseInt(e.target.value, 10)));
    const handleVariantChange = (e) => setSelectedVariant(e.target.value);

    const handleAddToCart = () => {
        addToCart({ ...product, quantity, selectedVariant });
        toast.success("Item Added To Cart Successfully");
    };

    const itemPrice = variantIndex !== -1 ? product.price[variantIndex] : 0;
    const itemOldPrice = variantIndex !== -1 ? product.oldPrice[variantIndex] : 0;

    return (
        <div className="product-detail">
            <div style={{display:'flex',flexDirection:'column'}}>
            <div className="product-image">
                <img
                    src={imageUrls[currentImageIndex]}
                    alt={product.name}
                />
               
            </div>
            <div>
                 <p className="image-description">
                  {product.description}
                </p>

            </div>
           

            </div>
            
            <div className="product-info">
                <h1 className="product-name"><b>{product.name}</b></h1>
                <p className="product-price">
                    {itemOldPrice && (
                        <span className="price-old">₹{itemOldPrice}</span>
                    )}
                    <span className="price-new">₹{itemPrice}</span>
                </p>
                <div className="product-variants">
                    <label htmlFor="variant">Select Variant:</label>
                    <select
                        id="variant"
                        name="variant"
                        value={selectedVariant}
                        onChange={handleVariantChange}
                    >
                        {product.variants.map((variant, index) => (
                            <option key={index} value={variant}>
                                {variant}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="product-quantity">
                    <label htmlFor="quantity">Quantity:</label>
                    <div className="quantity-input">
                        <button
                            type="button"
                            className="quantity-btn"
                            onClick={decrementQuantity}
                            aria-label="Decrease quantity"
                        >
                            -
                        </button>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            min="1"
                            value={quantity}
                            onChange={handleQuantityChange}
                        />
                        <button
                            type="button"
                            className="quantity-btn"
                            onClick={incrementQuantity}
                            aria-label="Increase quantity"
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className="product-actions" style={{margin:'10px'}}>
                    <Link
                        className="btn add-to-cart no-underline"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </Link>
                    <Link
                        to='/checkout'
                        className="btn buy-now no-underline"
                        onClick={handleAddToCart}
                    >
                        Buy Now
                    </Link>

                    <div style={{display:'flex',flexDirection:'row'}}>
                    <a
    href={`https://api.whatsapp.com/send?phone=917011028608&text=Hello%20Sir%20👋%2C%0A%0AI%27m%20interested%20in%20the%20Natural%20Adivasi%20Hair%20Oil.%20Could%20you%20please%20provide%20more%20details%20about%20this%20product%3F%20Specifically%2C%20I%27d%20like%20to%20know%20about%20its%20benefits%2C%20ingredients%2C%20and%20pricing.%0A%0AThanks%21`} 
    className="btn whatsapp-link no-underline"
    target="_blank"
    rel="noopener noreferrer"
>
                        <i className="fab fa-whatsapp"></i> WhatsApp Us
                    </a>
                    <div style={{display:'flex',alignItems:'center'}}>
                    {product.viewDetails && (
                        <Link
                            to={`/product-info/`} 
                            className="view-details-link"
                        >
                            View Full Details {'>'}{'>'}
                        </Link>
                    )}

                    </div>
                    

                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ProductDetailComponent;
