import dotenv from 'dotenv'
dotenv.config()
import Anthropic from "@anthropic-ai/sdk"

export default async function generateResponse(userMessage) {
  try {
    if (!userMessage) {
      return "Sorry, I'm having trouble generating a response. Please try again later. Error: No user message provided"
    }
    const anthropic = new Anthropic();
    const response = await anthropic.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 1000,
      messages: [
        {
          role: "user",
          content: userMessage
        }
      ]
    });
    return response.content[0].text || `Sorry, I'm having trouble generating a response. Please try again later. Error: ${response}`
  } catch (error) {
    console.error(error)
    return `Sorry, I'm having trouble generating a response. Please try again later. Error: ${error}`
  }
}
