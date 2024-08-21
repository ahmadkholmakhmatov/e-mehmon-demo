import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CurrencyProvider } from './utils/CurrencyContext.jsx';
import './index.css';
import './utils/i18n';
import { AuthProvider } from './utils/AuthContext.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <CurrencyProvider>
        <App />
      </CurrencyProvider>
    </QueryClientProvider>
  </AuthProvider>
);
