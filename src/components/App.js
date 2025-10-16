
const App = () => {

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

  const [newMessage, setNewMessage] = React.useState(messages);

  return (
    <>
      <ChatInput
        newMessage={newMessage}
        setNewMessage={setNewMessage}
      />
      <ChatMessages 
        newMessage={newMessage}
      />
    </>
  );
}
