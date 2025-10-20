
const App = () => {

  const chatMessages = [];

  const [newChatMessages, setNewChatMessages] = React.useState(chatMessages);

  return (
    <>
      <ChatInput
        newChatMessages={newChatMessages}
        setNewChatMessages={setNewChatMessages}
      />
      <ChatMessages
        newChatMessages={newChatMessages}
      />
    </>
  );
}
