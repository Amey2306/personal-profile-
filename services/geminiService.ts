import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { RESUME_CONTEXT } from "../constants";

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("API_KEY not found in environment variables. Chat features will not work.");
      return null;
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

export const chatWithAmeyAI = async (userMessage: string): Promise<string> => {
  const client = getClient();
  if (!client) {
    return "I'm sorry, my AI brain isn't connected right now (API Key missing).";
  }

  try {
    const response: GenerateContentResponse = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts: [{ text: userMessage }]
        }
      ],
      config: {
        systemInstruction: `You are an AI Assistant representing Amey Shinde on his portfolio website. 
        Your goal is to answer questions about Amey's skills, experience, and contact info based strictly on the following context.
        
        Context:
        ${RESUME_CONTEXT}
        
        Tone: Professional, enthusiastic, and concise. 
        If the answer is not in the context, politely suggest contacting Amey directly via email.
        Keep answers under 3 sentences unless asked for details.`,
      }
    });

    return response.text || "I didn't catch that. Could you try asking again?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble thinking right now. Please try again later.";
  }
};
