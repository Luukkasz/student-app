import React from 'react';
import { users } from 'data/users';
import UsersListItem from '../UsersListItem/UsersListItem';

function UsersList() {
  return (
    <div>
      <ul>
        {users.map((userData) => {
          return <UsersListItem key={userData.name} userData={userData} />;
        })}
      </ul>
    </div>
  );
}

export default UsersList;
