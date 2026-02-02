"use client";

import React, { useEffect, useRef, memo } from 'react';

declare global {
  interface Window {
    TradingView: any;
  }
}

const TradingViewTicker = memo(() => {
  const container = useRef<HTMLDivElement>(null);
  const scriptAdded = useRef(false);

  useEffect(() => {
    if (!container.current || scriptAdded.current) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbols": [
        {
          "proName": "FOREXCOM:SPXUSD",
          "title": "S&P 500"
        },
        {
          "proName": "FOREXCOM:NSXUSD",
          "title": "US 100"
        },
        {
          "proName": "FX_IDC:EURUSD",
          "title": "EUR/USD"
        },
        {
          "proName": "BITSTAMP:BTCUSD",
          "title": "Bitcoin"
        },
        {
          "proName": "BITSTAMP:ETHUSD",
          "title": "Ethereum"
        },
        {
          "description": "Gold",
          "proName": "OANDA:XAUUSD"
        },
        {
          "description": "Crude Oil",
          "proName": "TVC:USOIL"
        },
        {
          "description": "Tesla",
          "proName": "NASDAQ:TSLA"
        },
        {
          "description": "Apple",
          "proName": "NASDAQ:AAPL"
        },
        {
          "description": "Nvidia",
          "proName": "NASDAQ:NVDA"
        }
      ],
      "showSymbolLogo": true,
      "isTransparent": false,
      "displayMode": "adaptive",
      "colorTheme": "light",
      "locale": "en"
    });

    container.current.appendChild(script);
    scriptAdded.current = true;

    return () => {
      if (container.current) {
        container.current.innerHTML = '';
      }
      scriptAdded.current = false;
    };
  }, []);

  return (
    <div className="tradingview-widget-container w-full" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
});

TradingViewTicker.displayName = 'TradingViewTicker';

export default TradingViewTicker;