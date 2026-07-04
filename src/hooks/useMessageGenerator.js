import { useState, useCallback } from 'react';
import { generateMessage } from '../services/groq';
import {
  buildConnectionPrompt,
  buildReferralPrompt,
  buildFollowUpPrompt,
} from '../utils/prompts';
import { useLocalStorage } from './useLocalStorage';
import toast from 'react-hot-toast';

/**
 * Custom hook for generating networking messages via the Groq API.
 * Manages message state, loading, history (localStorage), and retry.
 *
 * @returns {{
 *   message: string,
 *   isLoading: boolean,
 *   history: Array,
 *   generate: (type: string, params: object) => Promise<void>,
 *   regenerate: () => Promise<void>,
 *   clearHistory: () => void,
 *   clearMessage: () => void,
 * }}
 */
export function useMessageGenerator() {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useLocalStorage('connectpro-history', []);
  const [lastRequest, setLastRequest] = useState(null);

  /**
   * Generate a message for the given type and parameters.
   * @param {'connection'|'referral'|'followup'} type — message type
   * @param {object} params — form field values
   */
  const generate = useCallback(
    async (type, params) => {
      setIsLoading(true);
      setMessage('');
      setLastRequest({ type, params });

      try {
        // Build the prompt based on message type
        let prompt;
        switch (type) {
          case 'connection':
            prompt = buildConnectionPrompt(params);
            break;
          case 'referral':
            prompt = buildReferralPrompt(params);
            break;
          case 'followup':
            prompt = buildFollowUpPrompt(params);
            break;
          default:
            throw new Error(`Unknown message type: ${type}`);
        }

        const result = await generateMessage(prompt);
        setMessage(result);

        // Save to history (keep last 50 entries)
        const entry = {
          id: Date.now(),
          type,
          result,
          timestamp: new Date().toISOString(),
        };
        setHistory((prev) => [entry, ...prev].slice(0, 50));

        toast.success('Message generated successfully!');
      } catch (err) {
        const errorMsg =
          err.response?.data?.error?.message || err.message || 'Failed to generate message';
        toast.error(errorMsg);
        console.error('Generation error:', err);
      } finally {
        setIsLoading(false);
      }
    },
    [setHistory]
  );

  /** Regenerate the last message with the same parameters. */
  const regenerate = useCallback(async () => {
    if (!lastRequest) {
      toast.error('Nothing to regenerate');
      return;
    }
    await generate(lastRequest.type, lastRequest.params);
  }, [lastRequest, generate]);

  /** Clear all saved history from localStorage. */
  const clearHistory = useCallback(() => {
    setHistory([]);
    toast.success('History cleared');
  }, [setHistory]);

  /** Clear the current message. */
  const clearMessage = useCallback(() => {
    setMessage('');
  }, []);

  return {
    message,
    isLoading,
    history,
    generate,
    regenerate,
    clearHistory,
    clearMessage,
  };
}
