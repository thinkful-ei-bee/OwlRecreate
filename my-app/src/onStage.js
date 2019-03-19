import React from 'react'


function OnStage(props){
  const participantOnStage=props.participantsData.filter(participant=>participant.onStage)
  console.log(participantOnStage,'test on stage')
  return(
    <div className="contact-on-stage-video-container contact-on-stage__no-video">
    <img src={participantOnStage[0].avatar} alt="" className="user-avatar contact-on-stage-video-avatar"></img>
    </div>
  )
}

export default OnStage