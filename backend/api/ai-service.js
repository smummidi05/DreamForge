
import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { SYSTEM_PROMPT, generateElderPrompt, ENCOURAGEMENT_PHRASES } from '../prompts/elder-prompts.js';

const router = express.Router();

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Chat endpoint
router.post('/chat', async (req, res) => {
  try {
    const { 
      message, 
      projectType,
      conversationHistory = [], 
      userContext = {} 
    } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Get the model
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    // Build context using our elder-specific prompt
    let contextPrompt = SYSTEM_PROMPT;
    
    // Add user-specific context
    if (projectType) {
      contextPrompt += `\n\n**User is creating:** ${projectType === 'recipe' ? 'A family recipe book' : projectType === 'album' ? 'A memory photo album' : 'A hobby blog'}`;
    }
    
    if (userContext.goal) {
      contextPrompt += `\n**User's Goal:** ${userContext.goal}`;
    }
    
    if (userContext.interests) {
      contextPrompt += `\n**User's Interests:** ${userContext.interests}`;
    }

    // Build conversation context
    const conversationContext = conversationHistory
      .map(msg => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`)
      .join('\n');

    // Create the full prompt
    const fullPrompt = `${contextPrompt}

${conversationContext ? `**Previous Conversation:**\n${conversationContext}\n` : ''}

**User's Current Message:** ${message}

**Your Response (remember: warm, clear, patient, encouraging):**`;

    // Generate response
    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    let aiMessage = response.text();

    // Add occasional encouragement (30% chance)
    if (Math.random() < 0.3 && conversationHistory.length > 1) {
      const encouragement = ENCOURAGEMENT_PHRASES[
        Math.floor(Math.random() * ENCOURAGEMENT_PHRASES.length)
      ];
      aiMessage = `${encouragement} ${aiMessage}`;
    }

    res.json({
      response: aiMessage,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Gemini API Error:', error);
    
    // Friendly error response for elders
    res.status(500).json({ 
      error: 'Failed to generate response',
      response: "I'm having a little trouble right now, but I'm still here to help! Could you try asking that again?",
      timestamp: new Date().toISOString()
    });
  }
});

export default router;
