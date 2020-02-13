import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const MessageAuthorDiv = styled.div`
   display:flex;
   align-self:flex-start;
   font-size:0.8em;
   font-weight:bold;
   color:purple;
`;

MessageAuthor.propTypes = {
 name: PropTypes.string
};

function MessageAuthor(props) {
 return (
  <MessageAuthorDiv>
   {props.name}
  </MessageAuthorDiv>
 );
}

export default MessageAuthor;