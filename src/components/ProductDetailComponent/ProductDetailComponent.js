import React, { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './ProductDetailComponent.css';
import productImage from '../../assets/Product-Image-1.jpg';

const ProductDetailComponent = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [selectedVariant, setSelectedVariant] = useState(product.variants[0] || '');
    const { addToCart } = useContext(CartContext);

    if (!product) {
        return <p>Product not found.</p>;
    }

    // Determine index based on selectedVariant
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

        toast.success("Item Added To Cart Successfully"); // Use toast directly
 
    };

    // Ensure variantIndex is within bounds of the arrays
    const itemPrice = variantIndex !== -1 ? product.price[variantIndex] : 0;
    const itemOldPrice = variantIndex !== -1 ? product.oldPrice[variantIndex] : 0;
  

    return (
        <div className="product-detail">
            <div className="product-image">
                <img src={product.image || productImage} alt={product.name} />
            </div>
            <div className="product-info">
                <h1 className="product-name"><b>{product.name}</b></h1>
                <p className="product-price">
                    {itemOldPrice && (
                        <span className="price-old">₹{product.oldPrice[variantIndex]}</span>
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
                <div className="product-actions">
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

                    {product.viewDetails && ( <Link
                        to={`/product-info/`} // Adjust this path as needed
                       style={{textDecoration:'none',color:'black'}}
                    >
                       View Full Details  {'>'}{'>'}
                    </Link>)}
                   
                </div>
            </div>
        </div>
    );
};

export default ProductDetailComponent;
