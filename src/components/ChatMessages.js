
const ChatMessages = ({newChatMessages}) => {

  const chatMessageComponent = newChatMessages.map(chatMessage => {
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
