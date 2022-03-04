import React from 'react';
import StockCard from './StockCard';

export default function PortfolioContainer({ stocks, setStocks, portfolio, setPortfolio }) {
  
  const port = portfolio.map((s, idx) => (
    <StockCard s={s} key={idx} stocks={stocks} setStocks={setStocks} portfolio={portfolio} setPortfolio={setPortfolio} />
))

 
  return (
    <div>
      <h2>My Portfolio</h2>
      {port}
  </div>
  );
}