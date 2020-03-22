import React from 'react';
import './StockCard.scss';

const StockCard = ({ newStock }) => {

    const { symbol, company, open, high, low, close } = newStock;

    const newOpen = parseFloat(open).toFixed(2);
    const newHigh = parseFloat(high).toFixed(2);
    const newLow = parseFloat(low).toFixed(2);
    const newClose = parseFloat(close).toFixed(2);

    const netVal = (parseFloat(close) - parseFloat(open)).toFixed(2);
    const percent = ((netVal / open) * 100).toFixed(2);




    return (
        <div className="card-container">
            <div className="stock-card flex">
                <div className={`scale-wrapper ${parseFloat(netVal) >= 0 ? 'green-gradient' : 'red-gradient'}`}>
                    <div className="scale-graph"></div>
                    <div className="scale-amounts">
                        <div> {newHigh} </div>
                        <div> {newLow} </div>
                    </div>
                </div>
                <div className="info-wrapper">
                    <div className="name-info">
                        <h2> {company} </h2>
                        <h4> {symbol} </h4>
                    </div>
                    <div className="current-info flex">
                        <div>
                            <h2> {newClose} </h2>
                        </div>
                        <div className="flex">
                            <h5 className={`net-amount ${parseFloat(netVal) >= 0 ? 'green' : 'red'}`}> {netVal} </h5>
                            <h5 className={parseFloat(percent) >= 0 ? 'green' : 'red'}> &#40;{percent}%&#41; </h5>
                        </div>
                    </div>
                    <div className="daily-info flex">
                        <h5> Open  <span className="blue-text">{newOpen}</span> </h5>
                        <h5 className="high-amount"> High  <span className="blue-text">{newHigh}</span> </h5>
                        <h5> Low  <span className="blue-text">{newLow}</span> </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StockCard;