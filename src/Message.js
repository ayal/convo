import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MessageAuthor from './MessageAuthor';
import MessageText from './MessageText';
import MessageTime from './MessageTime';

const MessageDiv = styled.div`
   padding:6px;
   margin:4px 10px;
   display:flex;
   align-items: center;
   background:${props => {return props.type === 'own' ? '#dcf8c6' : 'whiteSmoke' }};
   border-radius: 5px;
   align-self: ${props => {return props.type === 'own' ? 'flex-end' : 'flex-start'; }};
   flex-direction:column;
`;

Message.propTypes = {
 type: PropTypes.string,
 text: PropTypes.string,
 author: PropTypes.string,
 date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])
};

function Message(props) {
 return (
  <MessageDiv {...props}>
   <MessageAuthor name={props.author} />
   <MessageText text={props.text} />
   <MessageTime date={new Date(props.date)} />
  </MessageDiv>
 );
}

export default Message;