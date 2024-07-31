import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CurrencyProvider } from './utils/CurrencyContext.jsx';
import './index.css';
import './utils/i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CurrencyProvider>
    <App />
  </CurrencyProvider>
);
