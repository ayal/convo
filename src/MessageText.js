import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MessageTextDiv = styled.div`
   display:flex;
   padding:5px;
`;

MessageText.propTypes = {
 text: PropTypes.string
};

function MessageText(props) {
 return (
  <MessageTextDiv>
   {props.text}
  </MessageTextDiv>
 );
}

export default MessageText;