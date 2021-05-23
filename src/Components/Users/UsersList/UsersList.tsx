import React from 'react';
import UserListElement from './UsersListElement/UserListElement';
import css from './UsersList.module.css';

import { Avatar, User } from '../../../api/api';

type UsersListPropsType = {
  users: Array<User>;
  setSearchValue: CallableFunction,
  avatars: Array<Avatar> | any,
}

const UsersList:React.FC<UsersListPropsType> = ({
  users,
  setSearchValue,
  avatars,
}:UsersListPropsType) => (
  <>
    <div className={css.usersList}>
      {users && users.map(
        (element) => (
          <UserListElement
            key={element.id}
            name={element.name}
            username={element.username}
            avatar={avatars ? (avatars.find((el:Avatar) => el.id === element.id)) : null}
            setSearchValue={setSearchValue}
          />
        ),
      )}
    </div>
  </>
);

export default UsersList;
