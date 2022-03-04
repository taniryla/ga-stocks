import React from 'react'
import PortfolioContainer from './PortfolioContainer';

export default function StockCard({ s, stocks, setStocks, portfolio, setPortfolio}) {

    function handleBuy(s){
      let newStocks = stocks.filter(item => (
        (item !== s)
      ));
      setStocks(newStocks)
      setPortfolio([...portfolio, s])
    }

    function handleSell(s){
      let newPortfolios = portfolio.filter(item => (
        (item !== s)
      ));
      setPortfolio(newPortfolios)
      setStocks([...stocks, s])
    }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{s.name}</h5>
        <p className="card-text">{s.price}</p>
        <p className="card-text">{s.ticker}</p>
        {stocks.includes(s) ? 
          <button onClick={() => handleBuy(s)}>BUY</button> 
          :
          <button onClick={() => handleSell(s)}>SELL</button>
        }
      </div>
    </div>
  );
}