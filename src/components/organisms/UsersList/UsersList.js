import React from 'react';
import { users } from 'data/users';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { StyledListUl, WrapperDiv } from './UserList.styles';

const UsersList = () => (
  <WrapperDiv>
    <StyledListUl>
      {users.map((userData) => {
        return <UsersListItem key={userData.name} userData={userData} />;
      })}
    </StyledListUl>
  </WrapperDiv>
);

export default UsersList;
