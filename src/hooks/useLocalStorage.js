import { useState, useEffect } from 'react';

/**
 * Custom hook for persisting state in localStorage.
 *
 * @param {string} key — localStorage key
 * @param {*} initialValue — default value if nothing is stored
 * @returns {[*, Function]} — [storedValue, setValue]
 */
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch {
      /* Fail silently — localStorage may be full or disabled */
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
