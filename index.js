import { GoogleGenAI } from "@google/genai";
import readlineSync from "readline-sync";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyCpDoUuAG8y-fs1Y8l18bTYSbwdmJ_mEIc"
});

async function chatting(userInput) {

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        role: "user",
        parts: [{ text: userInput }]
      }
    ],
    config: {
      systemInstruction: `
     
     sigup/create account 


      if it is create acoount then ask
      what is your full name and fill in textfield that i give later
      then ask email id 
      what is college/university name
      then ask what is your role sutudent or admin
      then say create a password
      return check the password through re enter
    
      if that sigup 
      then ask for email id 
      then password
      
      `
    }
  });

  console.log("\nBot:", response.text);
}

async function main() {
  const userInput = readlineSync.question("You: ");
  await chatting(userInput);
  main();
}

main();
