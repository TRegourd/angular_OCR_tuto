import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth = false;

  signIn() {
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        this.isAuth = true;
        resolve(true);
      }, 2000);
    });
  }

  signOut() {
    return (this.isAuth = false);
  }

  constructor() {}
}
