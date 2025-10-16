
const ChatMessage = ({ message, sender }) => {
  
  const chatMessageImageStyle = {
    width: '50px'
  }

  const chatMessageUser = (
    sender === 'user' &&
    <img
      src="./src/assets/user.png"
      style={chatMessageImageStyle}
    />
  );

  const chatMessageRobot = (
    sender === 'robot' &&
    <img
      src="./src/assets/robot.png"
      style={chatMessageImageStyle}
    />
  );


  return (
    <div>
      { chatMessageRobot }
      { message }
      { chatMessageUser }
    </div>
  );
}
