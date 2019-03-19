import React from 'react'
import Chat from './Chat'


function ChatList(props){
  //console.log(props);
  return(
  <div className = 'chat-item'>
    {props.chatMessages.map(chat =>
      <Chat participantId = {chat.participantId}
          message = {chat.message}
          timestamp = {chat.timestamp}
          type = {chat.type}
          time ={chat.time}/>)}
  </div>
)
}

export default ChatList;

