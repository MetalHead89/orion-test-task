import { Injectable } from '@angular/core';
import { User } from 'src/database/users-bd';
import userBD from '../database/users-bd';

type AuthData = {
  login: string,
  password: string
}

type UserData = {
  role: 'admin' | 'user';
  login: string;
  name: string;
  surname: string;
} | null;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('userData') !== null;
  }

  signIn({ login, password }: AuthData): UserData {
    let userData: UserData = null;

    userBD.forEach((user: User) => {
      if (user.login === login && user.password === password) {
        userData = {
          role: user.role,
          login: user.login,
          name: user.name,
          surname: user.surname,
        };

        return;
      }
    });

    if (userData) {
      sessionStorage['userData'] = JSON.stringify(userData);
    }

    return userData;
  }

  signOut(): void {
    delete sessionStorage['userData'];
  }

  getUserData(): UserData {
    const userData = sessionStorage['userData'];

    return userData ? JSON.parse(sessionStorage['userData']) : null;
  }
}
