import { createContext, useContext } from 'react';
import { useMessageGenerator } from '../hooks/useMessageGenerator';

/**
 * Application-wide context.
 * Provides the message generator state to all pages so state persists
 * during navigation between routes.
 */
const AppContext = createContext(null);

/** Context provider — wraps the app in main.jsx */
export function AppProvider({ children }) {
  const generator = useMessageGenerator();

  return (
    <AppContext.Provider value={{ generator }}>
      {children}
    </AppContext.Provider>
  );
}

/**
 * Hook to access the application context.
 * @returns {{ generator: ReturnType<typeof useMessageGenerator> }}
 */
export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
