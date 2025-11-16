import express from 'express';
import elderSystemPrompt from '../prompts/elder-system-prompt.js';

const router = express.Router();

// Smart demo responses that feel real
const responses = [
  "That's a wonderful idea! Let me help you break that down into simple, manageable steps. First, we'll start by...",
  "I love your creativity! Building a website is like creating a digital home for your ideas. Here's how we can begin together...",
  "Great question! Let's explore that step by step. Think of it like organizing a photo album, but online...",
  "You're on the right track! Here's what I suggest we focus on first...",
  "That's an excellent goal! Let me show you how we can make that happen in a way that feels comfortable and achievable...",
];

router.post('/chat', async (req, res) => {
  console.log('📨 Chat request received');
  
  try {
    const { message, conversationHistory = [], userContext = {} } = req.body;
    console.log('✅ Parsed request body:', { message, userContext });

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Simulate thinking time (looks more real)
    await new Promise(resolve => setTimeout(resolve, 800));

    // Pick a response that relates to their message
    let aiMessage = responses[Math.floor(Math.random() * responses.length)];
    
    // Add context if provided
    if (userContext.goal) {
      aiMessage += ` Since your goal is "${userContext.goal}", let's focus on making that happen together.`;
    }
    
    // Echo back part of their question to seem conversational
    if (message.toLowerCase().includes('website')) {
      aiMessage += " Websites are a wonderful way to share your story with the world!";
    } else if (message.toLowerCase().includes('app')) {
      aiMessage += " Creating an app is an exciting journey!";
    }

    console.log('✅ Generated demo response');

    res.json({
      message: aiMessage,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({ 
      error: 'Failed to generate response',
      message: 'I apologize, but I encountered a technical difficulty. Please try again in a moment.'
    });
  }
});

export default router;