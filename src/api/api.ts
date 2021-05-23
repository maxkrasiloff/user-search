import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  withCredentials: true,
});

export type AvatarType = {
  id: number,
  albumId:number,
  title:string,
  url:string,
  thumbnailUrl:string
}

export type AvatarArraysType = Array<AvatarType>;

export type UserType = {
  id: number,
  name: string,
  username: string,
}

export const UsersAPI = {
  getUsers(id = ''):Promise<UserType> {
    return instance.get(
      `users/${id}`,
    ).then(
      (responce) => responce.data,
    );
  },
  getUsersAvatar():Promise<AvatarArraysType> {
    return instance.get(
      'photos/',
    ).then(
      (responce) => responce.data,
    );
  },
};

export default UsersAPI;
