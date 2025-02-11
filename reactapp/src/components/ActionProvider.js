import axios from "axios";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleUserMessage = async (message) => {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",  // Use latest model
          messages: [{ role: "user", content: message }],
        },
        {
          headers: {
            Authorization: `Bearer YOUR_OPENAI_API_KEY`,
            "Content-Type": "application/json",
          },
        }
      );

      const botMessage = this.createChatBotMessage(response.data.choices[0].message.content);
      this.updateChatbotState(botMessage);
    } catch (error) {
      console.error("Error fetching OpenAI response:", error);
      const botMessage = this.createChatBotMessage("Oops! Something went wrong. 😕");
      this.updateChatbotState(botMessage);
    }
  };

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
