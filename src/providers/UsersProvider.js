import React, { useState } from 'react';
import { users as usersData } from '../data/users';

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
});

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(usersData);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleAddUser = (values) => {
    const newUser = {
      name: values.name,
      attendance: values.attendance,
      average: values.average,
    };
    setUsers((prevState) => {
      return [newUser, ...prevState];
    });
  };

  return (
    <UsersContext.Provider
      value={{
        users: users,
        handleAddUser: handleAddUser,
        deleteUser: deleteUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
