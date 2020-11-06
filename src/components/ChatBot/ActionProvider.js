class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  };

  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.")
    this.updateChatbotState(greetingMessage)
  };
  
  handleMeditationList = () => {
    const message = this.createChatBotMessage(
      "Wonderful, I have the following meditations you can try:",
      {
        widget: "meditationLinks",
      }
    );
    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    this.setState(prevState => ({
      ...prevState, messages: [...prevState.messages, message]
    }));
  };
}

export default ActionProvider;
