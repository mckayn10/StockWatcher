import React from 'react';
import './SearchBar.scss';

const SearchBar = ({
    searchChange,
    addStock,
    inputValue,
    screenWidth }) => {

    return (
        <div className="search-container">
            <input
                type="text"
                value={inputValue}
                placeholder="Enter stock symbol"
                id="input"
                onChange={searchChange}

            />
            {screenWidth > 640 
                ? <button onClick={addStock}> ADD STOCK </button>
                : <button onClick={addStock}> ADD </button>
            }

        </div>
    )
}

export default SearchBar;