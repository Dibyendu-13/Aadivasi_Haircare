import React, { useState, useContext, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './CheckoutComponent.css';
import { CartContext } from '../../context/CartContext';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckoutComponent = () => {
    const [formData, setFormData] = useState({
        email: '',
        address: '',
        city: '',
        pinCode: '',
        phone: '',
        sameAddress: true,
        firstName: '',
        lastName: '',
        billingAddress: '',
        billingCity: '',
        billingPinCode: '',
        billingPhone: ''
    });
    const navigate = useNavigate();
    const { cartItems } = useContext(CartContext);

    useEffect(() => {
        // Reset form data when cartItems change
        setFormData(prevState => ({
            ...prevState,
            sameAddress: true,
            billingAddress: '',
            billingCity: '',
            billingPinCode: '',
            billingPhone: ''
        }));
    }, [cartItems]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const groupCartItems = useCallback((items) => {
        return items.reduce((acc, item) => {
            const key = `${item.id}-${item.selectedVariant || ''}`;
            if (!acc[key]) {
                acc[key] = { 
                    ...item, 
                    quantity: 0,
                    price: getPriceForVariant(item)
                };
            }
            acc[key].quantity += item.quantity;
            return acc;
        }, {});
    }, []);

    const getPriceForVariant = (item) => {
        const variantIndex = item.variants.indexOf(item.selectedVariant);
        return variantIndex !== -1 ? parseFloat(item.price[variantIndex]) : parseFloat(item.price[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const groupedItems = groupCartItems(cartItems);
        const total = Object.values(groupedItems).reduce((total, item) => total + item.price * item.quantity, 0);
    
        if (total === 0) {
            toast.error('Cannot place an order with a total of ₹0.');
            return;
        }
    
        const orderDetails = {
            order_id: Math.floor(Math.random() * 1000000),
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            address: formData.sameAddress ? formData.address : formData.billingAddress,
            city: formData.sameAddress ? formData.city : formData.billingCity,
            pinCode: formData.sameAddress ? formData.pinCode : formData.billingPinCode,
            phone: formData.sameAddress ? formData.phone : formData.billingPhone,
            items: Object.values(groupedItems),
            total: total.toFixed(2),
        };
    
        try {
            await sendOrderEmail(orderDetails);
            toast.success('Order confirmed! A confirmation email has been sent.');
            navigate('/thank-you');
        } catch (error) {
            toast.error('Failed to send order confirmation email.');
        }
    };

    const sendOrderEmail = (orderDetails) => {
        const itemsFormatted = orderDetails.items
            .map((item, index) => ` ${index + 1}. ${item.name} x ${item.quantity} (${item.selectedVariant}) - ₹${(item.price * item.quantity).toFixed(2)}`)
            .join('\n');

        const templateParams = {
            order_id: orderDetails.order_id,
            firstName: orderDetails.firstName,
            lastName: orderDetails.lastName,
            email: orderDetails.email,
            address: orderDetails.address,
            city: orderDetails.city,
            pinCode: orderDetails.pinCode,
            phone: orderDetails.phone,
            items: itemsFormatted,
            total: `₹${orderDetails.total}`,
            businessName: 'Aadivasi Hair Oil',
            businessContact: '7496815675'
        };

        return emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_CHECKOUT_ID,
            templateParams,
            process.env.REACT_APP_EMAILJS_USER_ID
        );
    };

    return (
        <div className="checkout-container">
            <div className="checkout-component">
                <h2>Checkout</h2>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Contact Information</legend>
                        <label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <div className="checkbox-group">
                            <label>
                                <input
                                    type="checkbox"
                                    name="emailOffers"
                                    checked={formData.emailOffers || false}
                                    onChange={handleChange}
                                />
                                <span className="checkbox-description">Email me with news and offers</span>
                            </label>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Delivery Information</legend>
                        <label>
                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                value={formData.city}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            <input
                                type="text"
                                name="pinCode"
                                placeholder="PIN code"
                                value={formData.pinCode}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <div className="checkbox-group">
                            <label>
                                <input
                                    type="checkbox"
                                    name="sameAddress"
                                    checked={formData.sameAddress}
                                    onChange={handleChange}
                                />
                                <span className="checkbox-description">Same as shipping address</span>
                            </label>
                        </div>
                    </fieldset>

                    {!formData.sameAddress && (
                        <fieldset>
                            <legend>Billing Information</legend>
                            <label>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                <input
                                    type="text"
                                    name="billingAddress"
                                    placeholder="Billing Address"
                                    value={formData.billingAddress}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                <input
                                    type="text"
                                    name="billingCity"
                                    placeholder="City"
                                    value={formData.billingCity}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                <input
                                    type="text"
                                    name="billingPinCode"
                                    placeholder="PIN code"
                                    value={formData.billingPinCode}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                <input
                                    type="text"
                                    name="billingPhone"
                                    placeholder="Phone (optional)"
                                    value={formData.billingPhone}
                                    onChange={handleChange}
                                />
                            </label>
                        </fieldset>
                    )}

                    <button type="submit" className="btn">Complete Purchase</button>
                </form>
            </div>

            <div className="cart-summary">
                <h3>Order Summary</h3>
                <ul>
                    {Object.values(groupCartItems(cartItems)).map((item) => (
                        <li key={`${item.id}-${item.selectedVariant}`} className="cart-summary-item">
                            <span>{item.name} x {item.quantity} ({item.selectedVariant})</span>
                            <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
                <div className="cart-summary-total">
                    Total: ₹{Object.values(groupCartItems(cartItems)).reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                </div>
            </div>
        </div>
    );
};

export default CheckoutComponent;
