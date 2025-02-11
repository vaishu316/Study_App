class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    greet() {
      const message = this.createChatBotMessage("Hello! How can I assist you today?");
      this.addMessageToState(message);
    }
  
    handleCreateGroup() {
      const message = this.createChatBotMessage("To create a group, click on 'Create Group' on the homepage.");
      this.addMessageToState(message);
    }
  
    handleJoinGroup() {
      const message = this.createChatBotMessage("To join a group, click on 'Join Group' and paste the invite link.");
      this.addMessageToState(message);
    }
  
    handleDashboard() {
      const message = this.createChatBotMessage("To access your dashboard, click 'Go to Dashboard'.");
      this.addMessageToState(message);
    }
  
    handleUnknown() {
      const message = this.createChatBotMessage("I'm not sure how to respond to that. Try asking about SkillSync features.");
      this.addMessageToState(message);
    }
  
    addMessageToState(message) {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    }
  }
  
  export default ActionProvider;
  