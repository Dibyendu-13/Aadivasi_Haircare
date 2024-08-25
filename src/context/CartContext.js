import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems(prevItems => {
            // Check if item already exists in the cart
            const existingItemIndex = prevItems.findIndex(
                cartItem => cartItem.id === item.id && cartItem.selectedVariant === item.selectedVariant
            );

            if (existingItemIndex > -1) {
                // Update quantity if item already exists
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex].quantity += item.quantity;
                return updatedItems;
            } else {
                // Add new item if it doesn't exist
                return [...prevItems, item];
            }
        });
    };

    const updateQuantity = (itemId, selectedVariant, quantity) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId && item.selectedVariant === selectedVariant
                    ? { ...item, quantity }
                    : item
            )
        );
    };

    const removeItem = (id, selectedVariant) => {
        setCartItems(prevItems =>
            prevItems.filter(item => item.id !== id || item.selectedVariant !== selectedVariant)
        );
    };

    return (
        <CartContext.Provider value={{ addToCart, cartItems, updateQuantity, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};
