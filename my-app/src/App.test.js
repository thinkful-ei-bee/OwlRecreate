import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import participants from './ParticipantsData';
import ParticipantList from './ParticipantList';
import Participant from './Participant'
import renderer from 'react-test-renderer';
import Chat from './Chat';
import chatEvents from './ChatData'
import ChatEvent from './ChatEvent'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//chat
it('chat renders the UI as expected',()=>{
  const tree = renderer.create(<Chat participantsData = {participants} chatData={chatEvents}/>).toJSON();
  expect(tree).toMatchSnapshot();
});


//partList
it('participantList renders the UI as expected',()=>{
  const tree = renderer.create(<ParticipantList participantsData = {participants}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

//chatEvent
it('chatEvent renders the UI as expected',()=>{
  const tree = renderer.create(<ChatEvent eventData={{
    participantId: 4,
    type: 'thumbs-down',
    timestamp: 1548852484247
}} name = {'Frank Runciman'} avatar={'https://robohash.org/etexercitationemassumenda.jpg?size=200x200&set=set1'}/>)
.toJSON();
expect(tree).toMatchSnapshot();
})

//part
it('participant renders the UI as expected',()=>{
  const tree = renderer.create(
    <Participant key = {participants[0].id}
        name = {participants[0].name}
        avatar = {participants[0].avatar}
        inSession = {participants[0].inSession}
        onStage ={participants[0].onStage}
       />).toJSON();
    expect(tree).toMatchSnapshot();
})
