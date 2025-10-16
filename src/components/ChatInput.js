
const ChatInput = () => {

  const [inputValue, setInputValue] = React.useState('');

  function saveInputValue(event) {
    // console.log(event.target.value);
    setInputValue(event.target.value);
  }

  function sendMessage() {
    console.log(inputValue);
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
