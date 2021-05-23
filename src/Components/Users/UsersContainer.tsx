import React, { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Users from './Users';
import { getUsers, getAvatars, setSearchValue } from '../../redux/usersReducer';
import { SearchValue } from './UsersSearch/UserSearch';
import { Avatar, User } from '../../api/api';

type UsersProps = {
  users: {
    users:{
      users: Array<User>
    },
    avatars: {avatars: Array<Avatar>},
    searchValue: SearchValue,
  },
  getUsersFunc:CallableFunction,
  getAvatarsFunc:CallableFunction,
  setSearchValueFunc:CallableFunction,
}

const UsersContainter:FunctionComponent<UsersProps> = ({
  users,
  getUsersFunc,
  getAvatarsFunc,
  setSearchValueFunc,
}:UsersProps) => {
  function setSearchVal(val:string) {
    setSearchValueFunc(val);
    console.log(val);
    getUsersFunc(val);
  }
  useEffect(() => {
    getUsersFunc();
    getAvatarsFunc();
  }, []);

  return (
    <Users
      users={users.users.users}
      avatars={users.avatars.avatars}
      setSearchValue={setSearchVal}
      searchValue={users.searchValue}
    />

  );
};

type State = {
  users: {
    users:{
      users: Array<User>
    },
    avatars: {avatars: Array<Avatar>},
    searchValue: SearchValue,
  }
}

const mapStateToProps = (state:State) => ({
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
