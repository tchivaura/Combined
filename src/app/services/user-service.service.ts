import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

constructor() { }


addUser(user : User) {
  let users = [];

  const usersString = localStorage.getItem('Users');
  if (usersString) {
      try {
          users = JSON.parse(usersString);
          if (!Array.isArray(users)) {
              // If the stored value is not an array, initialize users as an empty array
              users = [];
          }
      } catch (error) {
          console.error('Error parsing users from localStorage:', error);
          // If parsing fails, initialize users as an empty array
          users = [];
      }
  }

  // Add the new user to the beginning of the array
  users = [user, ...users];

  // Save the updated users array back to localStorage
  localStorage.setItem('Users', JSON.stringify(users));
}
}
