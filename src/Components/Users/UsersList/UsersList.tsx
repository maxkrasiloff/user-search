import React from 'react';
import UserListElement from './UsersListElement/UserListElement';
import css from './UsersList.module.css';

import { Avatar, User } from '../../../api/api';

type UsersListProps = {
  users: Array<User>;
  setSearchValue: CallableFunction,
  avatars: Array<Avatar> | any,
}

const UsersList:React.FC<UsersListProps> = ({
  users,
  setSearchValue,
  avatars,
}:UsersListProps) => (
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
