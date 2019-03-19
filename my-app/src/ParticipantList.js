import React from 'react'
import Participant from './Participant'


function ParticipantList(props){
  console.log(props.participantsData)
  const array1=props.participantsData.filter(participant=>participant.onStage)
  const array2=props.participantsData.filter(participant=>participant.inSession && !participant.onStage)
  const array3=props.participantsData.filter(participant=>!participant.onStage&&!participant.inSession)
  const participantData = array1.concat(array2).concat(array3)
  return(
  <div className = 'session-participant'>
    {participantData.map(participant =>
      <Participant key = {participant.id}
          name = {participant.name}
          avatar = {participant.avatar}
          inSession = {participant.inSession}
          onStage ={participant.onStage}/>)}
  </div>
)
}

export default ParticipantList



          