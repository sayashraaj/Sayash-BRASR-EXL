import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import { connect } from 'react-redux';

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import './Chat.css';

// const ENDPOINT = 'http://project-chat-application.herokuapp.com/';
// const ENDPOINT = 'http://localhost:5000';
const ENDPOINT = 'https://gcchatreact.herokuapp.com/'

let socket;

const Chat = ({ name, room }) => {
  // const [name, setName] = useState('');
  // const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // const { name, room } = queryString.parse(location.search);
    // const room = 'tatti';

    socket = io(ENDPOINT);

    // setRoom(room);
    // setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, room]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }
  return (
    <div className="outerContainer" style={{backgroundImage: `url(./${room}.jpeg)`}}>
      <div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <TextContainer users={users}/>
    </div>
  );
}

export default Chat;

// function mapStateToProps({ auth }) {
//   return { auth };
// }

// export default connect(mapStateToProps)(Chat);