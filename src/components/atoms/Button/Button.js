import React from 'react';
// Import ikony X jako ReactComponent aby mozna bylo latwiej stylowac
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { StyledButton } from './Button.styles';

const Button = (props) => (
  <StyledButton {...props}>
    <DeleteIcon />
  </StyledButton>
);

export default Button;
