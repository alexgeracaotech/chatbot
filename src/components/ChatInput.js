
const ChatInput = ({ newMessage, setNewMessage }) => {

  const [inputValue, setInputValue] = React.useState('');

  function saveInputValue(event) {
    // console.log(event.target.value);
    setInputValue(event.target.value);
  }

  function sendMessage() {
    setNewMessage([
      ...newMessage, {
        message: inputValue,
        sender: 'user',
        id: crypto.randomUUID()
      }
    ]);
  }

  return (
    <div>
      <input
        placeholder='Send a message!'
        onChange={saveInputValue}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
