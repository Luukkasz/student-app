import React from 'react';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { StyledUl } from './UserList.styles';
import { Title } from '../../atoms/Title/Title';

const UsersList = ({ users }) => {
  return (
    <>
      <Title>Students List</Title>
      <StyledUl>
        {users.map((userData) => {
          return <UsersListItem key={userData.name} userData={userData} />;
        })}
      </StyledUl>
    </>
  );
};

export default UsersList;
