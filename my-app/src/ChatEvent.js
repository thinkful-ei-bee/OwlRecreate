import React from 'react'

function ChatEvent(props){
  console.log(props.eventData.type,'test chatevent')
  return(
    <div className='chat-event'>
    {
      props.eventData.type==='message'?
      <div className='message-event'>
      <img alt = {props.name}src={props.avatar}></img>
      {props.name} {props.eventData.type}</div>:
      props.eventData.type==='thumb-up'?
      <div className='thumb-up'>{props.name} {props.eventData.type}</div>:
      props.eventData.type==='thumb-down'?
      <div className='thumb-down'>{props.name} {props.eventData.type}</div>:  
      props.eventData.type==='clap'?
      <div className='clap'>{props.name} {props.eventData.type}</div>:
      props.eventData.type==='leave'?
      <div className='leave'>{props.name} {props.eventData.type}</div>:
      props.eventData.type==='join'?
      <div className='join'>{props.name} {props.eventData.type}</div>:
      props.eventData.type==='join-stage'?
      <div className='join-stage'>{props.name} {props.eventData.type}</div>:
      <div className='leave-stage'>{props.name} {props.eventData.type}</div>
  }

    </div>

  )

}

export default ChatEvent