import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  withCredentials: true,
});

export type Avatar = {
  id: number,
  albumId:number,
  title:string,
  url:string,
  thumbnailUrl:string
}

export type AvatarArrays = Array<Avatar>;

export type User = {
  id: number,
  name: string,
  username: string,
}

export const UsersAPI = {
  getUsers(id = ''):Promise<User> {
    return instance.get(
      `users/${id}`,
    ).then(
      (responce) => responce.data,
    );
  },
  getUsersAvatar():Promise<AvatarArrays> {
    return instance.get(
      'photos/',
    ).then(
      (responce) => responce.data,
    );
  },
};

export default UsersAPI;
