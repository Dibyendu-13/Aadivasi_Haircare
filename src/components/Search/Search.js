import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Search.css';

const Search = ({ setSearchQuery }) => {
    const [expanded, setExpanded] = useState(false);
    const [query, setQuery] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleExpand = () => {
        setExpanded(true);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        setSearchQuery(query); // Update the search query in the parent component
        navigate('/catalog'); // Navigate to the catalog page
        setExpanded(false); // Close the search input box
  
    };

    const handleClickOutside = (event) => {
        if (!event.target.closest('.search-container') && !event.target.closest('.search-input-container')) {
            setExpanded(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="search-container">
            <button className="search-icon" onClick={handleExpand}>
                🔍
            </button>
            {expanded && (
                <>
                    <div className="search-backdrop" onClick={() => setExpanded(false)}></div>
                    <div className="search-input-container">
                        <form className="search-form" onSubmit={handleSearch}>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="search-input"
                                autoFocus
                            />
                        </form>
                    </div>
                </>
            )}
        </div>
    );
};

export default Search;
