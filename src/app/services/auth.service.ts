import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth: boolean = false;

  constructor(private httpClient: HttpClient) {}

  signIn() {
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        this.isAuth = true;
        resolve(true);
      }, 500);
    });
  }

  signOut() {
    return (this.isAuth = false);
  }
}
