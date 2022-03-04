import React from 'react';
import StockCard from './StockCard';

export default function StockContainer({ stocks, setStocks, portfolio, setPortfolio }) {
    const stock = stocks.map((s, idx) => (
        <StockCard s={s} key={idx} stocks={stocks} setStocks={setStocks} portfolio={portfolio} setPortfolio={setPortfolio}  />
    ))

  return (
    <div>
       <h1>My Stocks</h1>
       {stock}
    </div>
  );
}