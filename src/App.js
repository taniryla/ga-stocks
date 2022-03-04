import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import StockContainer from './components/StockContainer';
import PortfolioContainer from './components/PortfolioContainer';
import './index.css'

export default function App() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);

  useEffect(function() {
    async function getStocks() {
      const result = await fetch("http://localhost:3001/stocks");
      const stocks = await result.json();
      setStocks(stocks);
    }
    getStocks();
  }, []);

    

  return (
    <main>
      <Header />
      <div className="row">
        <div className="col-6">
          <StockContainer stocks={stocks} setStocks={setStocks} portfolio={portfolio} setPortfolio={setPortfolio} />
        </div>
        <div className="col-6">
          <PortfolioContainer stocks={stocks} setStocks={setStocks} portfolio={portfolio} setPortfolio={setPortfolio} />
        </div>
      </div>
    </main>
  );
  }