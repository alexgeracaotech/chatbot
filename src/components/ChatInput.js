
const ChatInput = ({newChatMessages, setNewChatMessages}) => {

  const [inputText, setInputText] = React.useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {

    if(inputText === ''){
      alert('Enter a message!');
      return;
    }

    setNewChatMessages([
      ...newChatMessages, {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }, {
        message: Chatbot.getResponse(inputText),
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);

    setInputText('');
  }

  return (
    <div>
      <input
        onChange={saveInputText}
        value={inputText}
        placeholder='Send a message!'
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
