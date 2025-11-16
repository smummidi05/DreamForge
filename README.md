
# 🌟 DreamForge

**Empowering elders to bring new ideas to life.**

DreamForge is an AI-powered creation platform designed specifically for adults ages 55+ who want to share their stories, recipes, and wisdom with the world—without tech intimidation.

## 🎯 Mission

Technology often leaves older adults behind. But they have stories, wisdom, and creativity worth sharing. DreamForge gives them the tools, confidence, and platform to bring their ideas to life.

## ✨ Features

- **Elder-First Design**: Large text, high contrast, voice-enabled
- **AI-Powered Guidance**: Patient, respectful AI assistance that explains without jargon
- **Simple Templates**: Family recipes, photo albums, hobby blogs
- **Step-by-Step Creation**: Guided workflows that never overwhelm
- **Voice Support**: Type or speak—whatever's comfortable

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Gemini API key ([Get one here](https://makersuite.google.com/app/apikey))

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/dreamforge.git
cd dreamforge

# Setup environment variables
cp .env.example .env
# Add your GEMINI_API_KEY to .env

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### Running Locally

**Terminal 1 - Frontend:**
```bash
cd frontend
npm run dev
# Opens at http://localhost:5173
```

**Terminal 2 - Backend:**
```bash
cd backend
npm run dev
# Runs at http://localhost:3001
```

## 🏗️ Project Structure

```
dreamforge/
├── frontend/           # React + Vite + Tailwind
│   ├── src/
│   │   ├── components/
│   │   │   ├── shared/      # Reusable UI components
│   │   │   ├── elder/       # Elder-specific features
│   │   │   └── ai-chat/     # AI interaction interface
│   │   ├── pages/           # Main app pages
│   │   ├── utils/           # Helper functions
│   │   └── config/          # Design tokens & settings
│   └── public/
├── backend/            # Express + Gemini API
│   ├── api/            # Route handlers
│   └── prompts/        # AI prompt templates
├── demo/               # Demo materials
└── docs/               # Documentation
```

## 🎨 Design Philosophy

**"Technology made welcoming. Clarity made beautiful."**

- **High Contrast**: WCAG AAA compliant
- **Large Text**: 18px base, scalable up to 32px+
- **Voice-First**: Optional speech input/output
- **Gentle Colors**: Lavender, coral, and gold
- **No Jargon**: Plain language everywhere

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, shadcn/ui
- **Backend**: Node.js, Express
- **AI**: Google Gemini API
- **Hosting**: Vercel (frontend), Railway/Render (backend)

## 📖 Documentation

- [Project Plan](./PLAN.md) - Full hackathon strategy
- [Setup Guide](./SETUP.md) - Detailed installation
- [Demo Script](./DEMO_SCRIPT.md) - Presentation guide

## 🤝 Contributing

This project was built during a 24-hour hackathon. We welcome contributions that maintain our elder-first focus!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

MIT License - see [LICENSE](LICENSE) file for details

## Team

Sri Mummidi - Developer

Fatima Mbodji - Developer


## 🙏 Acknowledgments

- Built with ❤️  for the underserved elder community
- Powered by Google Gemini AI
- Inspired by real stories from grandparents everywhere

## 📞 Contact

- **Project Link**: [https://github.com/smummidi05/dreamforge](https://github.com/smummidi05/dreamforge)
- **Demo**: [Coming Soon]

---

**Made with 💜 at Technica 2025**