import React from 'react';
import css from './UsersListElement.module.css';
import { AvatarType } from '../../../../api/api';

type UserListElementType = {
  name:string,
  username: string,
  avatar: AvatarType,
  setSearchValue: CallableFunction,
}

const UserListElement:React.FC<UserListElementType> = (
  {
    name,
    username,
    avatar,
    setSearchValue,
  }:UserListElementType,
) => {
  let avatarUrl = '';
  if (avatar) {
    avatarUrl = avatar.thumbnailUrl;
  }
  function clickUser(val:string) {
    setSearchValue(val);
  }
  return (
    <div className={css.userBlock} onClick={() => { clickUser(name); }} aria-hidden="true">
      <div
        className={css.userAvatar}
        style={{ backgroundImage: `url(${avatarUrl})` }}
      />
      <div>
        <div className={css.name}>{name}</div>
        <div className={css.username}>
          @
          {username}
        </div>
      </div>
    </div>
  );
};

export default UserListElement;
