const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GENAI_API_KEY
});

async function invokeGeminiAi() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Hello gemini ! Explain what is Interview ?"
    })
    console.log(response.text)
  } catch (error) {
    console.error("Gemini AI invocation error:", error.message || error)
  }
}
module.exports = invokeGeminiAi