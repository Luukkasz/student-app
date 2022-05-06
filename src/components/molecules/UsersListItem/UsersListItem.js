import React, { useContext } from 'react';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton';
import { StyledAverageDiv, StyledInfoDiv, StyledLi } from './UserListItem.styles';
import { UsersContext } from 'providers/UsersProvider';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  const { deleteUser } = useContext(UsersContext);

  return (
    <StyledLi>
      <StyledAverageDiv value={average}>{average}</StyledAverageDiv>
      <StyledInfoDiv>
        <p className="user__name">
          {name}
          <DeleteButton onClick={() => deleteUser(name)} />
        </p>
        <p className="user__attendance">attendance: {attendance}</p>
      </StyledInfoDiv>
    </StyledLi>
  );
};

export default UsersListItem;
