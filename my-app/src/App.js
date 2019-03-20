import React, { Component } from 'react';
import participants from './ParticipantsData';
import ParticipantList from './ParticipantList';
import OnStage from './onStage'
import Chat from './Chat'
import './App.css';
import chatEvents from './ChatData'

class App extends Component {
  
  
  render() {
    const participantOnStage= participants.filter(participant=>participant.onStage)
    const chat=true;
    return (
      <div className="App">
        <div className='side-bar'>
        {chat?<Chat participantsData = {participants} chatData={chatEvents}/>:
        <ParticipantList participantsData = {participants}/>
      }
          
          

        </div>
        <div className='onstage-container'>
           <OnStage participantsData = {participantOnStage}/>
        </div>
        
      </div>
    );
  }
}


export default App;
