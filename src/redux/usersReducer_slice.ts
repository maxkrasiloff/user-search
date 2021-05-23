import {
  createSlice,
} from '@reduxjs/toolkit';
import { UsersAPI, AvatarType, UserType } from '../api/api';
import { AppDispatch } from './store';

type initialStateType = {
  users: Array<UserType>,
  searchValue: string,
  avatars: Array<AvatarType>
}

const initialState:initialStateType = {
  users: [],
  searchValue: '',
  avatars: [],
};

const usersSlice = createSlice({
  name: 'UserSlice',
  initialState,
  reducers: {
    setUsers(state:any, action:any) {
      // eslint-disable-next-line no-param-reassign
      state.users = action.payload;
    },
    setAvatars(state:any, action:any) {
      // eslint-disable-next-line no-param-reassign
      state.avatars = action.payload;
    },
    setSearchValue(state:any, action:any) {
      // eslint-disable-next-line no-param-reassign
      state.searchValue = action.payload;
    },
  },
});

export default usersSlice.reducer;

export const { setUsers, setAvatars, setSearchValue } = usersSlice.actions;

/* const setUsers = createAction('SET_USERS', (users:Array<UserType> | null) => ({
  payload: {
    users,
  },
}));

const setAvatars = createAction('SET_AVATAR', (avatars:Array<AvatarType> | null) => ({
  payload: {
    avatars,
  },
}));

export const setSearchValue = createAction('SET_SEARCH_VALUE', (value:string) => ({
  payload: {
    value,
  },
})); */

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
        (el:UserType) => (
          el.name.toLowerCase().includes(query.toLowerCase())
        ),
      )));
    },
  );
};

/* export default createReducer(initialState, {
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
}); */
