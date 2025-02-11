class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
        this.actionProvider.greet();
      } else if (lowerCaseMessage.includes("create group")) {
        this.actionProvider.handleCreateGroup();
      } else if (lowerCaseMessage.includes("join group")) {
        this.actionProvider.handleJoinGroup();
      } else if (lowerCaseMessage.includes("dashboard")) {
        this.actionProvider.handleDashboard();
      } else {
        this.actionProvider.handleUnknown();
      }
    }
  }
  
  export default MessageParser;
  
  