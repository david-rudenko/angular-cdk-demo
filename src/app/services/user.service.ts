import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: UserModel[] = [
    {
      name: 'John Doe',
      position: 'Developer',
      department: 'IT',
    },
    {
      name: 'Megan Hanks',
      position: 'Accountant',
      department: 'Financial',
    },
    {
      name: 'Alice Liddell',
      position: 'HR Manager',
      department: 'HR',
    },
  ];

  constructor() {}

  getUsers(): Observable<UserModel[]> {
    return of(this.users);
  }
}
