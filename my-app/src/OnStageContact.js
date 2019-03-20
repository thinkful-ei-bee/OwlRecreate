import React from 'react'
import './onStage.css'


function onStageContact(props){
  if(props.currentUser){
    return(
    
      <div className='on-stage-contact current-user'>
        <div className='contact-on-stage-details-current'>
        {props.name} 
        <img className='on-stage-contact-avatar-current' src={props.avatar} alt = {props.name+'-avatar'}></img>  
        </div>
        
      </div>
    )
  }else{
    return(
    
      <div className='on-stage-contact other-user'>
        <div className='contact-on-stage-details-other'>
        {props.name}
        </div>
        <div className='on-stage-contact-avatar-box'>
        <img className='on-stage-contact-avatar' src={props.avatar} alt = {props.name+'-avatar'}></img>
        </div>
      </div>
    )
  }
  
}


export default onStageContact