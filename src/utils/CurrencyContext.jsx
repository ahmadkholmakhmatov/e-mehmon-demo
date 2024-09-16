// CurrencyContext.js
import { createContext, useState, useContext } from 'react';

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const localCurrency = localStorage.getItem('currency');
  const [currency, setCurrency] = useState(
    localCurrency ? localCurrency : 'USD'
  );

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
