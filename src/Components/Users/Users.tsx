import React from 'react';
import { Avatar, User } from '../../api/api';
import UsersList from './UsersList/UsersList';
import UserSearch, { SearchValue } from './UsersSearch/UserSearch';
import css from './Users.module.css';
import preloader from '../../assets/preloader.svg';

type UsersProps = {
  users: Array<User>
  setSearchValue: CallableFunction,
  avatars: Array<Avatar>,
  searchValue: SearchValue,
}
const Users:React.FC<UsersProps> = ({
  users, setSearchValue, avatars, searchValue,
} :UsersProps) => {
  console.log(searchValue.value);

  return (
    <div className={css.userBody}>
      <UserSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      { ((users)
        ? (
          <UsersList
            users={users}
            setSearchValue={setSearchValue}
            avatars={avatars}
          />
        )
        : (
          <div className={css.preloaderWrapper}>
            <div className={css.preloader} style={{ backgroundImage: `url(${preloader})` }} />
          </div>
        ))}
    </div>

  );
};
export default Users;
