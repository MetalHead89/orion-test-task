import bd from './bd';

const databaseFunctions = {
  login: (login: string, password: string) => {
    return bd.users.some(
      (user) => user.login === login && user.password === password
    );
  },
};

export default databaseFunctions;
