import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import styled from 'styled-components';

const UsersDiv = styled.div`
   display:flex;
   font-size:0.9em;
   padding:4px;
`;

Users.propTypes = {
 users: PropTypes.array,
 cuser: PropTypes.object
};

function Users(props) {
 const users = props.users.map(u=>{
  return (<User key={u.id} name={props.cuser.id === u.id ? 'You' : u.firstName} />);
 });

 return (
  <UsersDiv>
   {users}
  </UsersDiv>
 );
}

export default Users;