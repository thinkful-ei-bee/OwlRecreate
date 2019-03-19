import React, { Component } from 'react';
import participants from './ParticipantsData';
import ParticipantList from './ParticipantList';
import OnStage from './onStage'
import './App.css';

class App extends Component {
  
  
  render() {
     
    return (
      <div className="App">
        
          <ParticipantList participantsData = {participants}/>

           <OnStage participantsData = {participants}/>
   
        
      </div>
    );
  }
}


export default App;
