
const ChatMessages = ({ newMessage }) => {
  const messages = [{
    message: 'Hello!',
    sender: 'user',
    id: crypto.randomUUID()
  }, {
    message: 'Hello! How can I help you?',
    sender: 'robot',
    id: crypto.randomUUID()
  }, {
    message: 'Flip a coin.',
    sender: 'user',
    id: crypto.randomUUID()
  }, {
    message: 'Sure! You got tails!',
    sender: 'robot',
    id: crypto.randomUUID()
  }];

  const chatMessageComponent = newMessage.map((chatMessage) => {
    return (
      <ChatMessage
        message={chatMessage.message}
        sender={chatMessage.sender}
        key={chatMessage.id}
      />
    );
  });

  return (
    <>
      {chatMessageComponent}
    </>
  );
}
