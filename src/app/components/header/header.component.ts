import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  menuOpen = false;

  constructor(private authService: AuthService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkLoginStatus();
      }
    });
  }

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  checkLoginStatus(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false; // update status after logout
    this.router.navigate(['/login']);
    this.isLoggedIn = false;
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    document
      .querySelector('.nav-links')
      ?.classList.toggle('active', this.menuOpen);
  }
}
