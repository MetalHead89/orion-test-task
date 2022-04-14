import bd from './bd';

const databaseFunctions = {
  login: (login: string, password: string) => {
    let userData = null;

    bd.users.forEach((user) => {
      if (user.login === login && user.password === password) {
        userData = user;
      }
    });

    return userData;
  },
};

export default databaseFunctions;
