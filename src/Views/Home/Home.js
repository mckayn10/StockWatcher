import React, { Component } from 'react';
import './Home.scss';
import SearchBar from '../../components/SearchBar/SearchBar';


class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <h1>Stock Watcher</h1>
                <SearchBar />
            </div>
        )
    }
}

export default Home;