// src/app/components/signup/signup.component.ts
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  // bound to your form inputs
  user = {
    name: '',
    email: '',
    phone: '',
    address: '',
    latitude: '',
    longitude: '',
  };

  // controls whether the success banner is shown
  showSuccessMessage = false;

  constructor(private http: HttpClient) {}

  /**
   * Grabs the browser's current position and
   * stores lat/long in both the model and localStorage
   */
  getLocation() {
    if (!navigator.geolocation) {
      return alert('Geolocation is not supported by this browser.');
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.user.latitude  = position.coords.latitude.toString();
        this.user.longitude = position.coords.longitude.toString();
        localStorage.setItem('latitude',  this.user.latitude);
        localStorage.setItem('longitude', this.user.longitude);
      },
      (error) => {
        alert('Location access denied or unavailable.');
        console.error(error);
      }
    );
  }

  /**
   * Called when the form is submitted.
   * Sends user data to your backend, then shows a banner on success.
   */
  onSubmit() {
    this.http
      .post('http://localhost:8091/api/customer/signup', this.user)
      .subscribe({
        next: (response) => {
          console.log('Signup response:', response);
          // show the banner
          this.showSuccessMessage = true;
          // reset model
          this.user = {
            name: '',
            email: '',
            phone: '',
            address: '',
            latitude: '',
            longitude: '',
          };
          // hide banner after 3s
          setTimeout(() => (this.showSuccessMessage = false), 3000);
        },
        error: (err) => {
          console.error('Error registering user:', err);
          alert('Error registering user. Please try again.');
        }
      });
  }
}
