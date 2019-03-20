import React from 'react'
import OnStageContact from './OnStageContact'
import './onStage.css'

function OnStage(props){
  
  
  return(
    <div className="contact-on-stage-video-container">
      {props.participantsData.map(
        participant => <OnStageContact
        avatar = {participant.avatar}
        name = {participant.name}
        key ={participant.id}
        currentUser={participant.currentUser}
        />
      )

      }
    
    </div>
  )
}

export default OnStage