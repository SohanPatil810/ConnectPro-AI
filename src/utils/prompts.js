/**
 * Prompt builders for each message type.
 * Each function takes form data and returns a complete prompt string
 * for the Groq API.
 */

/**
 * Build a LinkedIn connection request prompt.
 */
export function buildConnectionPrompt({ name, company, role, reason, tone, length }) {
  return `You are an expert LinkedIn networking coach.
Generate a professional LinkedIn connection request message.

Details:
- Recipient's Name: ${name}
- Company: ${company}
- Job Role: ${role}
- Reason for connecting: ${reason}
- Tone: ${tone}
- Message Length: ${length}

Rules:
- Be professional, friendly, and natural
- Make it personalized and genuine
- Maximum 180 words
- Return ONLY the message text, no explanations, no formatting, no quotes`;
}

/**
 * Build a referral request prompt.
 */
export function buildReferralPrompt({ company, role, experience, context, tone, length }) {
  return `You are an expert career networking advisor.
Generate a respectful referral request message for LinkedIn.

Details:
- Target Company: ${company}
- Target Role: ${role}
- My Experience: ${experience}
- Additional Context: ${context || 'None'}
- Tone: ${tone}
- Message Length: ${length}

Rules:
- Be professional and respectful
- Mention the user's experience naturally
- Don't sound desperate or pushy
- Natural and genuine tone
- Maximum 200 words
- Return ONLY the message text, no explanations, no formatting, no quotes`;
}

/**
 * Build a follow-up message prompt.
 */
export function buildFollowUpPrompt({ situation, tone, length }) {
  return `You are an expert professional communication coach.
Generate a professional follow-up message for LinkedIn.

Details:
- Situation: ${situation}
- Tone: ${tone}
- Message Length: ${length}

Rules:
- Be professional and appropriate for the situation
- Natural and genuine tone
- Don't sound desperate
- Maximum 200 words
- Return ONLY the message text, no explanations, no formatting, no quotes`;
}

/** Tone options for dropdowns */
export const TONE_OPTIONS = [
  'Professional',
  'Friendly',
  'Casual',
  'Formal',
  'Enthusiastic',
];

/** Length options for dropdowns */
export const LENGTH_OPTIONS = [
  'Short (50–80 words)',
  'Medium (80–150 words)',
  'Long (150–200 words)',
];

/** Follow-up situation options */
export const FOLLOWUP_SITUATIONS = [
  'After Connection Accepted',
  'After Interview',
  'After Career Fair',
  'No Reply',
  'Referral Reminder',
];
