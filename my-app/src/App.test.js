import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import participants from './ParticipantsData';
import ParticipantList from './ParticipantList';
import renderer from 'react-test-renderer';
import Chat from './Chat';
import chatEvents from './ChatData'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

let chat = false;
/*
it('renders the UI as expected',()=>{
  const tree = renderer.create(chat?<Chat participantsData = {participants} chatData={chatEvents}/>:
    <ParticipantList participantsData = {participants}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
*/
//chat=false;

it('renders the UI as expected',()=>{
  const tree = renderer.create(chat?<Chat participantsData = {participants} chatData={chatEvents}/>:
    <ParticipantList participantsData = {participants}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

/*if(chat===true){
  it('renders the UI as expected',()=>{
    const tree = renderer.create(<ChatEvent eventData={event}
      name = {participantName.name}
      key = {'chat-'+index}
      avatar={participantName.avatar}
/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
}
if(chat===false){
  it('renders the UI as expected',()=>{
    const tree = renderer.create(<Participant key = {participant.id}
      name = {participant.name}
      avatar = {participant.avatar}
      inSession = {participant.inSession}
      onStage ={participant.onStage}
     /> ).toJSON();
    expect(tree).toMatchSnapshot();
  });
}*/

