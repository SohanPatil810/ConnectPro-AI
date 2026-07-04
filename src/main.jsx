import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppProvider } from './context/AppContext';
import App from './App';
import './index.css';

/**
 * Application entry point.
 * Wraps the app in BrowserRouter, AppContext, and global toast notifications.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#1F2937',
              color: '#F8FAFC',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              fontSize: '14px',
            },
            success: {
              iconTheme: { primary: '#6366F1', secondary: '#F8FAFC' },
            },
            error: {
              iconTheme: { primary: '#EF4444', secondary: '#F8FAFC' },
            },
          }}
        />
      </AppProvider>
    </BrowserRouter>
  </StrictMode>
);
