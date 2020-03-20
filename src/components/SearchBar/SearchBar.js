import React, { Component } from 'react';
import './SearchBar.scss';

class SearchBar extends Component {
    render() {
        return (
            <div className="search-container">
                <input
                    placeholder="Enter stock symbol"
                />
                <button >ADD STOCK</button>
            </div>
        )
    }
}

export default SearchBar;