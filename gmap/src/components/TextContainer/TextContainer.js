import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h3>Gc<span role="img" aria-label="emoji">🦣</span>Chat</h3>
    </div>
    {
      users
        ? (
          <div>
            <h5>People chatting:</h5>
            <ScrollToBottom  className="activeContainer">
              <h4>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h4>
            </ScrollToBottom >
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;