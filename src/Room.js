import React from 'react';
import PropTypes from 'prop-types';
import Users from './Users';
import styled from 'styled-components';

const RoomDiv = styled.div`
   display:flex;
   flex-direction:column;
   height:50px;
   background:#eee;
   padding:4px;
`;

const RoomNameDiv = styled.div`
   display:flex;
   font-size:1em;
   padding:4px;
`;

Room.propTypes = {
 room: PropTypes.string,
 users: PropTypes.array,
 cuser: PropTypes.object
};

function Room(props) {

 console.log('rendering room', props.room, props.users.length);

 return (
  <RoomDiv>
   <RoomNameDiv>{props.room}</RoomNameDiv>
   <Users users={props.users} cuser={props.cuser} />
  </RoomDiv>
 );
}

export default Room;