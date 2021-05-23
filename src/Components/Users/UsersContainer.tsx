import React, { FunctionComponent, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Users from './Users';
import { getUsers, getAvatars, setSearchValue } from '../../redux/usersReducer';
import { searchValueType } from './UsersSearch/UserSearch';
import { AvatarType, UserType } from '../../api/api';

interface UsersPropsType {
  users: {
    users:{
      users: Array<UserType>
    },
    avatars: {avatars: Array<AvatarType>},
    searchValue: searchValueType,
  },
  getUsersFunc:CallableFunction,
  getAvatarsFunc:CallableFunction,
  setSearchValueFunc:CallableFunction,
}

const UsersContainter:FunctionComponent<UsersPropsType> = ({
  users,
  getUsersFunc,
  getAvatarsFunc,
  setSearchValueFunc,
}:UsersPropsType) => {
  const [usersIsLoad, setLoadUsers] = useState(false);
  const [avatarLoading, setLoadingAvatar] = useState(false);
  function setSearchVal(val:string) {
    setSearchValueFunc(val);
    getUsersFunc(val);
  }

  if (!usersIsLoad) {
    getUsersFunc();
    setLoadUsers(true);
  }

  if (!avatarLoading) {
    getAvatarsFunc();
    setLoadingAvatar(true);
  }
  return (
    <Users
      users={users.users.users}
      avatars={users.avatars.avatars}
      setSearchValue={setSearchVal}
      searchValue={users.searchValue}
    />

  );
};

type stateType = {
  users: {
    users:{
      users: Array<UserType>
    },
    avatars: {avatars: Array<AvatarType>},
    searchValue: searchValueType,
  }
}

const mapStateToProps = (state:stateType) => ({
  users: state.users,
  searchValue: state.users.searchValue,
});

export default compose(
  connect(
    mapStateToProps,
    {
      getUsersFunc: getUsers,
      getAvatarsFunc: getAvatars,
      setSearchValueFunc: setSearchValue,
    },
  ),
)(UsersContainter);
