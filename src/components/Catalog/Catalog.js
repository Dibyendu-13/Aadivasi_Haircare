import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Catalog.css'; // Import your custom styles
import productImage from '../../assets/Product-Image-2.jpg';

const Catalog = ({ searchTerm = '' }) => {
    const [availability, setAvailability] = useState('');
    const [priceRange, setPriceRange] = useState({ from: '', to: '' });
    const [sortOption, setSortOption] = useState('');
    const [products] = useState([
        {
            id: 1,
            name: 'Natural Adivasi Hair Oil',
            oldPrice: '2500',
            price: '1500',
            image: productImage, // Use imported image
            variants: ['500ml', '1000ml'],
            availability: true // Indicates the product is in stock
        },
        // Add more product objects here
    ]);

    // Filter products based on the search term, price range, and availability
    const filteredProducts = products.filter(product => {
        const productPrice = parseInt(product.price, 10);
        const priceFrom = priceRange.from ? parseInt(priceRange.from, 10) : 0;
        const priceTo = priceRange.to ? parseInt(priceRange.to, 10) : Infinity;

        // Check if the product matches the search term
        const matchesSearchTerm = product.name.toLowerCase().includes((searchTerm || '').toLowerCase());

        // Check if the product's price falls within the selected price range
        const matchesPriceRange = productPrice >= priceFrom && productPrice <= priceTo;

        // Check if the product matches the selected availability
        const matchesAvailability =
            availability === '' || (availability === 'inStock' && product.availability) || (availability === 'outOfStock' && !product.availability);

        // Return true if all conditions are met
        return matchesSearchTerm && matchesPriceRange && matchesAvailability;
    });

    const handleAvailabilityChange = (e) => setAvailability(e.target.value);
    const handlePriceRangeChange = (e) => setPriceRange({ ...priceRange, [e.target.name]: e.target.value });
    const handleSortOptionChange = (e) => setSortOption(e.target.value);

    return (
        <div className="product-catalog-container">
            <h1>Products</h1>
            <div className="product-catalog-filters">
                <div className="product-catalog-filter-section">
                    <label htmlFor="availability">Availability:</label>
                    <select id="availability" value={availability} onChange={handleAvailabilityChange}>
                        <option value="">Select Stock Status</option>
                        <option value="inStock">In Stock</option>
                        <option value="outOfStock">Out of Stock</option>
                    </select>
                </div>

                <div className="product-catalog-filter-section">
                    <label htmlFor="price-range">Price Range:</label>
                    <div className="product-catalog-price-range">
                        <input
                            type="number"
                            id="price-from"
                            name="from"
                            placeholder="From (₹)"
                            value={priceRange.from}
                            onChange={handlePriceRangeChange}
                        />
                        <input
                            type="number"
                            id="price-to"
                            name="to"
                            placeholder="To (₹)"
                            value={priceRange.to}
                            onChange={handlePriceRangeChange}
                        />
                    </div>
                </div>

                <div className="product-catalog-filter-section">
                    <label htmlFor="sort-option">Sort By:</label>
                    <select id="sort-option" value={sortOption} onChange={handleSortOptionChange}>
                        <option value="">Select Sorting Option</option>
                        <option value="featured">Featured</option>
                        <option value="bestSelling">Best Selling</option>
                        <option value="aToZ">Alphabetically A to Z</option>
                        <option value="zToA">Alphabetically Z to A</option>
                        <option value="priceHighToLow">Price High to Low</option>
                        <option value="priceLowToHigh">Price Low to High</option>
                        <option value="dateOldToNew">Date Old to New</option>
                        <option value="dateNewToOld">Date New to Old</option>
                    </select>
                </div>
            </div>

            <div className="product-catalog-products">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id} className="product-catalog-card">
                            <Link to='/product-info' style={{ textDecoration: 'none' }}>
                                <img src={product.image} alt={product.name} className="product-catalog-image" />
                                <div className="product-catalog-info">
                                    <h3 className="product-catalog-name"><b>{product.name}</b></h3>
                                    <h5 className="product-catalog-price">₹{product.price}</h5>
                                </div>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>
        </div>
    );
};

export default Catalog;
