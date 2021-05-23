import { combineReducers, configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersReducer';
/* import usersReducer from './usersReducer_slice'; */

const rootReducer = combineReducers({
  users: usersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
