import axios from 'axios';

/**
 * Groq API service.
 * Sends prompts to the Groq LLaMA 3.3 70B model and returns generated text.
 * All configuration is read from environment variables — never hardcoded.
 */

const API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const MODEL = import.meta.env.VITE_GROQ_MODEL || 'llama-3.3-70b-versatile';
const BASE_URL =
  import.meta.env.VITE_GROQ_BASE_URL ||
  'https://api.groq.com/openai/v1/chat/completions';

/**
 * Generate a message using the Groq API.
 *
 * @param {string} prompt — The full prompt to send
 * @returns {Promise<string>} The generated message text
 * @throws {Error} If API key is missing or request fails
 */
export async function generateMessage(prompt) {
  // Guard: ensure API key is configured
  if (!API_KEY || API_KEY === 'YOUR_GROQ_API_KEY') {
    throw new Error(
      'Groq API key is not configured. Add your key to the .env file as VITE_GROQ_API_KEY.'
    );
  }

  const response = await axios.post(
    BASE_URL,
    {
      model: MODEL,
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      max_tokens: 1024,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  return response.data.choices[0].message.content;
}
