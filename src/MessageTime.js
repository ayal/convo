import React from 'react';
import styled from 'styled-components';

const MessageTimeDiv = styled.div`
   display:flex;
   align-self:flex-end;
   font-size:0.7em;
   padding:4px;
`;

const format = (date) => {
  return new Date(date.getTime()).toTimeString().split(' ')[0].split(':').slice(0, 2).join(':');
};

function MessageTime(props) {
  return (
    <MessageTimeDiv className="MessageTime">
     {format(props.date)}
    </MessageTimeDiv>
  );
}

export default MessageTime;
