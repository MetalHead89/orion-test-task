import { Injectable } from '@angular/core';
import bd from './bd';

interface IDatabaseService {
  login: (login: string, password: string) => UserData;
}

type Role = 'admin' | 'user';
type UserData = {
  role: Role;
  login: string;
  name: string;
  surname: string;
} | null;

@Injectable({
  providedIn: 'root',
})
export class DatabaseService implements IDatabaseService {
  constructor() {}

  login(login: string, password: string): UserData {
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
  }

  show() {
    return 1
  }
}

export { IDatabaseService };
