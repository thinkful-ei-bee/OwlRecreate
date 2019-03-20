import React from 'react'
import ChatEvent from './ChatEvent';




function Chat(props){
  
  // restructuring 
  let {chatData,participantsData}=props
  
  
  return(
    <div>
        {
          chatData.map((event,index)=>
            
            {
              
              let participantName = participantsData.find(participant=>participant.id===event.participantId)
              
              
              // because it has more than two items, so return is necessary here. 
             return <ChatEvent eventData={event}
                    name = {participantName.name}
                    key = {'chat-'+index}
              />
            }
            )
            
       
        }
    </div>
  )
}

export default Chat