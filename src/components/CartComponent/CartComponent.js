import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

import './CartComponent.css';
import { FaTrash } from 'react-icons/fa';

const CartComponent = () => {
    const { cartItems, updateQuantity, removeItem } = useContext(CartContext);
    const navigate = useNavigate();

    if (cartItems.length === 0) {
        return <p className="cart-component-empty">Your cart is empty.</p>;
    }

    const groupedItems = cartItems.reduce((acc, item) => {
        const key = `${item.id}-${item.selectedVariant}`;
        if (!acc[key]) {
            acc[key] = { ...item, quantity: 0 };
        }
        acc[key].quantity += item.quantity;
        return acc;
    }, {});

    const groupedItemsArray = Object.values(groupedItems);

    const calculateSubtotal = (item) => {
        const price = item.selectedVariant === '500ml' ? item.price[0] : item.price[1];
        return price * item.quantity;
    };

    const total = groupedItemsArray.reduce((total, item) => total + calculateSubtotal(item), 0);

    const handleIncrement = (id, selectedVariant, quantity) => updateQuantity(id, selectedVariant, quantity + 1);

    const handleDecrement = (id, selectedVariant, quantity) => {
        if (quantity > 1) updateQuantity(id, selectedVariant, quantity - 1);
    };

    const handleDelete = (id, selectedVariant) => removeItem(id, selectedVariant);

    const handleCheckout = () => {
        navigate('/checkout');
    };

const productImage1Url = "https://aadivasicommunityimages.s3.ap-south-1.amazonaws.com/Product-Image-1.jpg";


    return (
        <div className="cart-component">
            <h2>Your Cart</h2>
            {groupedItemsArray.length === 0 ? (
                <p className="cart-component-empty">Your cart is empty.</p>
            ) : (
                <table className="cart-component-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {groupedItemsArray.map((item) => (
                            <tr key={`${item.id}-${item.selectedVariant}`} className="cart-component-item">
                                <td className="cart-component-item-details">
                                    <img 
                                        src={productImage1Url} 
                                        alt={item.name || 'Product Image'} 
                                        className="cart-component-item-image" 
                                    />
                                    <div className="cart-component-item-info">
                                        <h3>{item.name}</h3>
                                        <p>Variant: {item.selectedVariant}</p>
                                        <p>Price: ₹{item.selectedVariant === '500ml' ? item.price[0] : item.price[1]}</p>
                                    </div>
                                    <FaTrash
                                        className="cart-component-delete-icon"
                                        onClick={() => handleDelete(item.id, item.selectedVariant)}
                                    />
                                </td>
                                <td className="cart-component-item-quantity">
                                    <div className="quantity-card">
                                        <button
                                            className="quantity-btn"
                                            aria-label="Decrease quantity"
                                            onClick={() => handleDecrement(item.id, item.selectedVariant, item.quantity)}
                                        >
                                            −
                                        </button>
                                        <span className="quantity-display">{item.quantity}</span>
                                        <button
                                            className="quantity-btn"
                                            aria-label="Increase quantity"
                                            onClick={() => handleIncrement(item.id, item.selectedVariant, item.quantity)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td className="cart-component-item-total">
                                    ₹{calculateSubtotal(item)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="2" className="cart-component-total-label">Total:</td>
                            <td className="cart-component-total-amount">₹{total}</td>
                        </tr>
                    </tfoot>
                </table>
            )}
            <div className="checkout-btn-container">
                <button
                    className="btn checkout-btn"
                    onClick={handleCheckout}
                >
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default CartComponent;
