import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { StyledUl, WrapperDiv } from './UserList.styles';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    mockAPI()
      .then((data) => {
        setIsLoading(false);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <WrapperDiv>
      <h1>{isLoading ? 'Loading...' : 'Users List:'}</h1>
      <StyledUl>
        {users.map((userData) => {
          return <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />;
        })}
      </StyledUl>
    </WrapperDiv>
  );
};

export default UsersList;
