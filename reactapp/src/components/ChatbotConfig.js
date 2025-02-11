import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "SkillSync Assistant",
  initialMessages: [createChatBotMessage("Hello! How can I assist you today?")],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#6a0572",
    },
    chatButton: {
      backgroundColor: "#ffafcc",
    },
  },
  customComponents: {}, // Ensures default input field is enabled
};

export default config;
