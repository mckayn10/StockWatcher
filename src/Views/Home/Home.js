import React, { Component } from 'react';
import axios from 'axios';
import './Home.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import StockCard from '../../components/StockCard/StockCard';


class Home extends Component {

    state = {
        searchField: '',
        searchedStock: {},
        stocksArr: [],
        width: 800,
        height: 182,
    }


    // Calculate & Update state of new dimensions

    updateDimensions = () => {
        if (window.innerWidth < 500) {
            this.setState({ width: 450, height: 102 });
        } else {
            let update_width = window.innerWidth;
            let update_height = window.innerHeight;
            this.setState({ width: update_width, height: update_height });
        }
    }

    // Add Event Listener 

    componentDidMount = () => {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }


    // Remove event listener

    componentWillUnmount = () => {
        window.removeEventListener("resize", this.updateDimensions);
    }

    onSearchChange = (e) => {
        this.setState({
            searchField: e.target.value
        })
    }

    addStock = () => {

        axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.state.searchField}&apikey=HY0JP87WH3PG17X6`)
            .then(stockInfo => {
                axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.state.searchField}&apikey=HY0JP87WH3PG17X6`)
                    .then(nameInfo => {

                        const dailyStockValue = stockInfo.data['Time Series (Daily)']
                        const date = Object.keys(stockInfo.data['Time Series (Daily)'])[0]
                        const stock = dailyStockValue[`${date}`]

                        const newStock = {
                            symbol: nameInfo.data.bestMatches[0]["1. symbol"],
                            company: nameInfo.data.bestMatches[0]["2. name"],
                            open: stock["1. open"],
                            high: stock["2. high"],
                            low: stock["3. low"],
                            close: stock["4. close"]
                        }

                        this.setState({ searchedStock: newStock })
                        this.setState({ stocksArr: [...this.state.stocksArr, newStock], searchField: "" })

                    })
                    .catch((err) => {
                        alert('please enter a valid stock symbol')
                    })
            })
            .catch((err) => {
                console.log(err)
            })
    }


    render() {

        let myStocksArr = this.state.stocksArr.map((stock, i) => {
            return <StockCard key={i} newStock={stock} />
            
        })

        return (
            <div className="home-container">
                <h1>Stock Watcher</h1>
                <SearchBar
                    searchChange={this.onSearchChange}
                    addStock={this.addStock}
                    inputValue={this.state.searchField}
                    screenWidth={this.state.width}
                />
                <div className="list-container flex">
                    {myStocksArr}
                </div>
            </div>
        )
    }
}

export default Home;