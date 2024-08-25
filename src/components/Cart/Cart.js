import React, { useContext } from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const { cartItems } = useContext(CartContext);
    const itemCount = cartItems.length;

    return (
        <div className="cart-container">
            <Link to='/cart' className='cart-icon'>
                🛒
                {itemCount > 0 && (
                    <span className="cart-count">{itemCount}</span>
                )}
            </Link>
        </div>
    );
};

export default Cart;
