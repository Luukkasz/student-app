import React from 'react';
import { StyledLogoDiv, StyledLink, StyledNav } from 'components/organisms/Navigation/Navigation.styles';

const Navigation = () => {
  return (
    <StyledNav>
      <StyledLogoDiv>
        <h1>
          Student
          <br />
          App
        </h1>
      </StyledLogoDiv>
      <StyledLink to="/">Dashboard</StyledLink>
      <StyledLink to="/add-user">Add user</StyledLink>
      <StyledLink to="/null">Settings</StyledLink>
      <StyledLink to="/null2">Logout</StyledLink>
    </StyledNav>
  );
};

export default Navigation;
