import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { theme } from '../assets/styles/theme';
import { WrapperDiv } from './Root.styles';
import 'assets/styles/fonts.css';
import { Routes, Route } from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import { UsersProvider } from '../providers/UsersProvider';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <UsersProvider>
          <WrapperDiv>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/add-user" element={<AddUser />} />
            </Routes>
          </WrapperDiv>
        </UsersProvider>
      </MainTemplate>
    </ThemeProvider>
  );
};

export default Root;
