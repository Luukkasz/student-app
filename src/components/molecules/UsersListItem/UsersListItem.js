import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button/Button';
import { StyledAverageDiv, StyledInfoDiv, StyledLi } from './UserListItem.styles';

const UsersListItem = ({ deleteUser, userData: { average, name, attendance = '0%' } }) => (
  <StyledLi>
    <StyledAverageDiv value={average}>{average}</StyledAverageDiv>
    <StyledInfoDiv>
      <p className="user__name">
        {name}
        <Button onClick={() => deleteUser(name)} />
      </p>
      <p className="user__attendance">attendance: {attendance}</p>
    </StyledInfoDiv>
  </StyledLi>
);

// Sprawdzenie poprawności propsow
UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
