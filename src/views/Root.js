import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { theme } from '../assets/styles/theme';
import { WrapperDiv } from './Root.styles';
import 'assets/styles/fonts.css';
import { Routes, Route, Link } from 'react-router-dom';
import { users as usersData } from '../data/users';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import AddUser from './AddUser';
import Dashboard from './Dashboard';

const Root = () => {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState({
    name: '',
    attendance: '',
    average: '',
  });

  //Usuwanie danego studenta
  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  //Zmiana stanu formValues na podstawie name
  const handleInputChange = (e) => {
    setFormValues((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  //Dodawanie nowego studenta do listy
  const handleAddUser = (e) => {
    e.preventDefault();
    setUsers((prevState) => {
      return [...prevState, formValues];
    });

    setFormValues({
      name: '',
      attendance: '',
      average: '',
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <WrapperDiv>
          <Routes>
            <Route path="/" element={<Dashboard deleteUser={deleteUser} users={users} />} />
            <Route
              path="/add-user"
              element={<AddUser formValues={formValues} handleAddUser={handleAddUser} handleInputChange={handleInputChange} />}
            />
          </Routes>
        </WrapperDiv>
      </MainTemplate>
    </ThemeProvider>
  );
};

export default Root;
