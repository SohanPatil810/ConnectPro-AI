# ✨ ConnectPro AI

A premium AI-powered web application that helps students and professionals generate professional networking messages using the **Groq API** (LLaMA 3.3 70B).

![React](https://img.shields.io/badge/React-19-blue) ![Vite](https://img.shields.io/badge/Vite-7-purple) ![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-cyan) ![License](https://img.shields.io/badge/License-MIT-yellow)

---

## ✨ Features

- 🤖 **AI-Powered Messages** — Generate professional networking messages with Groq's ultra-fast LLaMA 3.3 70B
- 🔗 **Connection Request Generator** — Craft personalized LinkedIn connection messages that get accepted
- 🏆 **Referral Request Generator** — Write respectful referral requests that actually get responses
- 💬 **Follow-up Generator** — Never miss an opportunity with professional follow-up messages
- 🎯 **AI Tone Selection** — Choose from Professional, Friendly, Casual, Formal, or Enthusiastic tones
- 📋 **Copy & Download** — Instantly copy or download messages as TXT files
- 🔄 **Regenerate** — Not satisfied? Regenerate with one click
- 📊 **Character Counter** — Track message length in real-time
- 📜 **Message History** — All generated messages saved in localStorage
- 🎨 **Premium UI** — Glassmorphism, aurora background, smooth animations
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- 🌙 **Dark Mode** — Beautiful dark theme with vibrant accents

---

## 📸 Screenshots

> _Run the app locally to see the full premium UI!_

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI framework |
| **Vite 7** | Build tool & dev server |
| **Tailwind CSS v4** | Utility-first styling |
| **Axios** | HTTP client for API calls |
| **Framer Motion** | Animations & transitions |
| **Lucide React** | Icon library |
| **React Hot Toast** | Toast notifications |
| **React Markdown** | Markdown rendering |
| **React Router DOM** | Client-side routing |
| **Groq API** | AI inference (LLaMA 3.3 70B) |

---

## 📦 Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/) (v9+)
- A [Groq API key](#-how-to-get-a-groq-api-key)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/your-username/connectpro-ai.git
cd connectpro-ai

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env

# 4. Add your Groq API key to .env
# Edit .env and replace YOUR_GROQ_API_KEY with your actual key
```

---

## 🔐 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_GROQ_API_KEY` | Your Groq API key | `YOUR_GROQ_API_KEY` |
| `VITE_GROQ_MODEL` | AI model to use | `llama-3.3-70b-versatile` |
| `VITE_GROQ_BASE_URL` | Groq API endpoint | `https://api.groq.com/openai/v1/chat/completions` |

---

## 🔑 How to Get a Groq API Key

1. Visit [console.groq.com](https://console.groq.com/)
2. Sign up for a free account (or log in)
3. Navigate to **API Keys** in the sidebar
4. Click **Create API Key**
5. Copy the key and paste it into your `.env` file

---

## 🚀 Running Locally

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 🏗️ Building for Production

```bash
npm run build
npm run preview
```

---

## 📁 Folder Structure

```
connectpro-ai/
├── public/                     # Static assets
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Navbar.jsx      # Navigation bar
│   │   │   └── Footer.jsx      # Footer
│   │   ├── ui/
│   │   │   ├── Button.jsx      # Reusable button
│   │   │   ├── GlassCard.jsx   # Glassmorphism card
│   │   │   ├── Input.jsx       # Form input
│   │   │   ├── Select.jsx      # Dropdown select
│   │   │   ├── Textarea.jsx    # Text area
│   │   │   ├── TabGroup.jsx    # Tab navigation
│   │   │   └── LoadingSkeleton.jsx
│   │   ├── AuroraBackground.jsx
│   │   ├── FeatureCard.jsx
│   │   ├── MessageOutput.jsx
│   │   └── MessageHistory.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Generator.jsx
│   │   └── About.jsx
│   ├── hooks/
│   │   ├── useLocalStorage.js
│   │   └── useMessageGenerator.js
│   ├── services/
│   │   └── groq.js             # Groq API client
│   ├── utils/
│   │   └── prompts.js          # Prompt builders
│   ├── context/
│   │   └── AppContext.jsx      # Global state
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               # Tailwind + design tokens
├── .env                        # Environment variables
├── .env.example                # Template
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## 🔮 Future Improvements

- [ ] Streaming AI responses
- [ ] Multiple language support
- [ ] Email message templates
- [ ] User authentication
- [ ] Cloud message history sync
- [ ] Message templates marketplace
- [ ] Chrome extension
- [ ] API usage dashboard

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

<p align="center">
  Built with ❤️ using React, Tailwind CSS, and Groq AI
</p>
