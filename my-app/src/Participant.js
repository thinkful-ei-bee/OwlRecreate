import React from 'react'
import './Participant.css'

function Participant(props){
  const inSession = props.onStage?<div className='participant-status participant-status__green'>on stage </div>:props.inSession?
  <div className='participant-status participant-status__green'>in session</div>:<div className='participant-status participant-status__gray'>left session</div>
  return(
    <div className='session-participant'>
      
      
        <img className='user-avatar'src={props.avatar} alt={props.name+"avatar"}/>
      
      
      <div className='participant-info'>
      <h6 className='name'> {props.name} </h6>
      {inSession}
      </div>

    </div>
  )
}


export default Participant