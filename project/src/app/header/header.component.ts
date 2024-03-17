import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogOutButtonComponent } from '../components/log-out-button/log-out-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogOutButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) { }

  redirectToPageLogin() {
    this.router.navigate(['/login']); // נניח שכתובת הדף השני היא '/other-page'
  }
  redirectToPageRegister() {
    this.router.navigate(['/register']); // נניח שכתובת הדף השני היא '/other-page'
  }
}
