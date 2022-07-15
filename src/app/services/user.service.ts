import { Subject } from 'rxjs';
import { User } from './../models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      drinkpreference: 'Coca',
      hobbies: ['coder', 'hacker'],
    },
  ];
  userSubject = new Subject<User[]>();

  emitUser() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUser();
  }

  constructor() {}
}
