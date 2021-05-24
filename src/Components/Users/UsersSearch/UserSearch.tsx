import React from 'react';
import search from '../../../assets/search.svg';
import css from './UserSearch.module.css';

export type SearchValue = {value:string}

type SearchProps = {
  setSearchValue: CallableFunction,
  searchValue: SearchValue,
}

const UserSearch:React.FC<SearchProps> = (
  {
    setSearchValue,
    searchValue,
  }:SearchProps,
) => {
  function changeInput(event:React.FormEvent<HTMLInputElement>) {
    setSearchValue(event.currentTarget.value);
  }
  return (
    <div className={css.searchWrapper}>
      <div className={css.searchIcon} style={{ backgroundImage: `url(${search})` }} />
      <input className={css.searchInput} placeholder="Search" value={searchValue.value} onChange={changeInput} />
    </div>
  );
};

export default UserSearch;
