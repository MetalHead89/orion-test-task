import bd from './bd';

type Role = 'admin' | 'user';
type databaseServices = {
  login: (login: string, password: string) => UserData;
};

type UserData = {
  role: Role;
  login: string;
  name: string;
  surname: string;
} | null;

const databaseServices = {
  login: (login: string, password: string): UserData => {
    let userData: UserData = null;

    bd.users.forEach((user) => {
      if (user.login === login && user.password === password) {
        userData = {
          role: user.role,
          login: user.login,
          name: user.name,
          surname: user.surname,
        };
      }
    });

    return userData;
  },
};

export default databaseServices;
export type { UserData, databaseServices };
