import React from 'react';
import { users } from 'data/users';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { StyledUl, WrapperDiv } from './UserList.styles';

const UsersList = () => (
  <WrapperDiv>
    <StyledUl>
      {users.map((userData, idx) => {
        return <UsersListItem key={userData.name} index={idx} userData={userData} />;
      })}
    </StyledUl>
  </WrapperDiv>
);

export default UsersList;
