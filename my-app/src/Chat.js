import React from 'react'
import './Chat.css'
import Participant from './ParticipantsData';


function Chat(props){
    const person = Participant.filter(member=>member.id===props.participantId);
    const date= Date(props.time);
    return(
        <div className='chat-item'>

            <img className='user-avatar'src={person[0].avatar} alt={person[0].name+"avatar"}/>
            <div className='chat-info'>
                <h3 className='name'> {person[0].name} </h3>
                <h4 className='time'> {props.time!==undefined && date}</h4>
                <h3 className='message'>{props.message}</h3> 
                <h3 className='type'>{props.type!=='message'&& props.type}</h3>
            </div>
        </div>
    )
}

export default Chat;