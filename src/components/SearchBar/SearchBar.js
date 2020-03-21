import React from 'react';
import './SearchBar.scss';

const SearchBar = ({ searchChange, addStock, inputValue }) => {

    return (
        <div className="search-container">
            <input
                type="text"
                value={inputValue}
                placeholder="Enter stock symbol"
                id="input"
                onChange={searchChange}

            />
            <button
                onClick={addStock}
            > ADD STOCK
            </button>
        </div>
    )
}

export default SearchBar;