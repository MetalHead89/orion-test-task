import bd from './bd';

type Role = 'admin' | 'user';

type UserData = {
  role: Role,
  login: string;
} | null;

const databaseFunctions = {
  login: (login: string, password: string): UserData => {
    let userData: UserData = null;

    bd.users.forEach((user) => {
      if (user.login === login && user.password === password) {
        userData = { role: user.role, login: user.login };
      }
    });

    return userData;
  },
};

export default databaseFunctions;
export type { UserData };
