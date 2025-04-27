// src/app/components/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private userService: UsersService,
    private router: Router,
    private authService: AuthService
  ) {}

  user = { email: '', password: '' };
  errorMessage = '';
  emailError = '';
  passwordError = '';

  validateEmail(): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!this.user.email) {
      this.emailError = 'Email is required';
      return false;
    } else if (!emailPattern.test(this.user.email)) {
      this.emailError = 'Enter a valid @gmail.com email';
      return false;
    }

    this.emailError = '';
    return true;
  }

  validatePassword(): boolean {
    const passwordPattern = /^(?=(.*[A-Za-z]){6,8})(?=.*[0-9]{4,})(?=.*[@])[A-Za-z0-9@]+$/;

    if (!this.user.password) {
      this.passwordError = 'Password is required';
      return false;
    } else if (!passwordPattern.test(this.user.password)) {
      this.passwordError = 'Password must be 6–8 letters, include @, and have 4+ digits';
      return false;
    }

    this.passwordError = '';
    return true;
  }

  addUser(): void {
    if (!this.validateEmail() || !this.validatePassword()) return;

    const isSuccess = this.authService.login(this.user.email, this.user.password);
    if (isSuccess) {
      this.userService.addUser(this.user).subscribe(
        () => {
          alert('Login successful!');
          this.router.navigate(['/cart']);
        },
        (error) => {
          this.errorMessage = 'Invalid email or password';
          console.error(error);
        }
      );
    }
  }

  goToForgotPassword(): void {
    if (!this.user.email) {
      alert('Please enter your email first!');
      return;
    }

    localStorage.setItem('email', this.user.email);
    this.router.navigate(['/forgot-password'], {
      queryParams: { email: this.user.email },
    });
  }
}
