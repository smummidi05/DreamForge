import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import geminiController from './api/gemini-controller.js';

dotenv.config();

// TEMPORARY TEST - ADD THESE LINES
console.log('Testing .env loading...');
console.log('OPENAI_API_KEY exists?', !!process.env.OPENAI_API_KEY);
console.log('OPENAI_API_KEY value:', process.env.OPENAI_API_KEY?.substring(0, 30) + '...');
console.log('All env vars:', Object.keys(process.env).filter(k => k.includes('OPENAI')));
// END TEMPORARY TEST

const app = express();
const PORT = process.env.PORT || 3001;

// Debug: Print API key to verify .env is loaded
console.log('🔑 OpenAI API Key loaded:', process.env.OPENAI_API_KEY?.substring(0, 20) + '...');
console.log('🔑 Full key length:', process.env.OPENAI_API_KEY?.length);

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3001'],
  credentials: true
}));
app.use(express.json());
app.use(express.static('.'));
app.use('/api', geminiController);

app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'DreamForge API is running' });
});

app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Something went wrong', message: err.message });
});

app.listen(PORT, () => {
  console.log(`🚀 DreamForge backend running on http://localhost:${PORT}`);
});
