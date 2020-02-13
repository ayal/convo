import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Message from './Message';
import Room from './Room';
import Sender from './Sender';

const ConvoDiv = styled.div`
   max-width:320px;
   min-width:320px;
   display:flex;
   flex-direction: column;
   flex:1;
   min-height: 0px;
`;

const MessagesDiv = styled.div`
   background:#ccc;
   display:flex;
   flex-direction: column;
   flex:1;
   overflow:auto;
`;


Convo.propTypes = {
   data: PropTypes.object,
};

function Convo(props) {
   const messages = props.data.messages.map((messageData) => {
      return (<Message key={messageData.id} {...messageData} />)
   })
   
   console.log('rendering convo', messages.length);

   return (
      <ConvoDiv>
         <Room room={props.data.room} users={props.data.users} cuser={props.data.cuser} />
         <MessagesDiv>{messages}</MessagesDiv>
         <Sender onSend={(data) => {
            window.postMessage({ type: 'single', message: data, cuser: props.data.cuser }, '*');
         }} />
      </ConvoDiv>
   );
}

export default Convo;