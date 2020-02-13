import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UserDiv = styled.div`
   display:flex;
   font-size:0.8em;
   padding:0px 2px;
`;

User.propTypes = {
 name: PropTypes.string,
};

function User(props) {
 
 console.log('rendering user', props.name);

 return (
  <UserDiv>
   {props.name}
  </UserDiv>
 );
}

export default User;