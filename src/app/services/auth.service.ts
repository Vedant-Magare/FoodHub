// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // Checks if token exists
  }

  login(username: string, password: string) {
    // Replace with real API validation later
    const token = 'mock-token';
    localStorage.setItem('token', token);
    return true;
  }

  logout() {
    localStorage.removeItem('token');
  }

  getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }


}
