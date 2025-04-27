import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  addUser(user: any): Observable<any> {
    const apiUrl = 'http://localhost:8091/api/user/save';
    return this.httpClient.post(apiUrl, user, { responseType: 'text' });
  }

  // API Call to Reset Password
  resetPassword(user: any): Observable<any> {
    const apiUrl = 'http://localhost:8091/api/user/reset-password';
    return this.httpClient.post(apiUrl, user, { responseType: 'text' });
  }

  registerUser(user: any): Observable<any> {
    const apiUrl = 'http://localhost:8091/api/users/register';
    return this.httpClient.post(apiUrl, user, { responseType: 'text' });
  }

  // sendMessage(contactData: any): Observable<any> {
  //   const apiUrl = 'http://localhost:8091/api/contact/send';
  //   return this.httpClient.post(apiUrl, contactData);
  // }

  sendContactForm(contact: any): Observable<any> {
    const apiUrl = 'http://localhost:8091/api/contact/send';
    return this.httpClient.post(apiUrl, contact, { responseType: 'text' });
  }
}
