import { createAction, createReducer, PayloadAction } from '@reduxjs/toolkit';
import { UsersAPI, Avatar, User } from '../api/api';
import { AppDispatch } from './store';

type initialStateType = {
  users: Array<User>,
  searchValue: string,
  avatars: Array<Avatar>
}

const initialState:initialStateType = {
  users: [],
  searchValue: '',
  avatars: [],
};

const setUsers = createAction('SET_USERS', (users:Array<User> | null) => ({
  payload: {
    users,
  },
}));

const setAvatars = createAction('SET_AVATAR', (avatars:Array<Avatar> | null) => ({
  payload: {
    avatars,
  },
}));

export const setSearchValue = createAction('SET_SEARCH_VALUE', (value:string) => ({
  payload: {
    value,
  },
}));

export const getAvatars:CallableFunction = () => (dispatch:AppDispatch) => {
  UsersAPI.getUsersAvatar().then(
    (avatars:any) => {
      dispatch(setAvatars(avatars));
    },
  );
};

export const getUsers:CallableFunction = (query = '') => (dispatch:AppDispatch) => {
  setUsers(null);
  UsersAPI.getUsers().then(
    (users:any) => {
      dispatch(setUsers(users.filter(
        (el:User) => (
          el.name.toLowerCase().includes(query.toLowerCase())
        ),
      )));
    },
  );
};

export default createReducer(initialState, {
  [setUsers.type]: (state, action: PayloadAction<[]>) => {
    // eslint-disable-next-line no-param-reassign
    state.users = action.payload;
  },
  [setSearchValue.type]: (state, action: PayloadAction<string>) => {
    // eslint-disable-next-line no-param-reassign
    state.searchValue = action.payload;
  },
  [setAvatars.type]: (state, action: PayloadAction<[]>) => {
    // eslint-disable-next-line no-param-reassign
    state.avatars = action.payload;
  },
});
