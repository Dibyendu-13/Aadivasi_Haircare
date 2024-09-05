import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import ProductInfoComponent from './components/ProductInfoComponent/ProductInfoComponent';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import CartComponent from './components/CartComponent/CartComponent';
import CheckoutComponent from './components/CheckoutComponent/CheckoutComponent';
import Search from './components/Search/Search';
import Cart from './components/Cart/Cart';
import PromoBanner from './components/PromoBanner/PromoBanner';
import ThankYouPage from './components/ThankYouPage/ThankYouPage';
import { ToastContainer } from 'react-toastify';
import image from "./assets/hairoil_icon.png"

function App() {
    const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query

    return (
        <Router>
            
            <PromoBanner/>
            <div className="wrapper">
                <header className="header">
                    <div className="header-content">
                        <div className="header-search">
                            <Search setSearchQuery={setSearchQuery} />
                        </div>
                        <h1 className="header-title">Adivasi Hair Oil 🧴
                        </h1>
                        
                        <image src={image}/>
                        <div className="header-cart">
                            <Cart />
                        </div>
                    </div>
                </header>
                <Navbar />
                <div className="main-content"> {/* Content area */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/catalog" element={<Catalog searchTerm={searchQuery} />} /> {/* Pass searchQuery to Catalog */}
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/cart" element={<CartComponent />} />
                        <Route path="/checkout" element={<CheckoutComponent />} />
                        <Route path="/product-info" element={<ProductInfoComponent />} />
                        <Route path="/thank-you" element={<ThankYouPage/>} />
                    </Routes>
                </div>
                <Footer />
            </div>
            <ToastContainer 
                position="top-center" // Adjust the position as needed
                autoClose={5000} // Duration of the toast
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Router>
    );
}

export default App;
