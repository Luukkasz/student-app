import React from 'react';
import UsersList from '../components/organisms/UsersList/UsersList';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { theme } from '../assets/styles/theme';
import { WrapperDiv } from './Root.styles';
import 'assets/styles/fonts.css';

const Root = () => (
  // ThemeProvider - dostarcza zmienne globalne do aplikacji
  <ThemeProvider theme={theme}>
    {/*Aplikuje style globalne z assets/styles/GlobalStyle */}
    <GlobalStyle />
    <WrapperDiv>
      <UsersList />
    </WrapperDiv>
  </ThemeProvider>
);

export default Root;
