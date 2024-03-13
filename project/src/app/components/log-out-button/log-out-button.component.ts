import { Component } from '@angular/core';

@Component({
  selector: 'app-log-out-button',
  standalone: true,
  imports: [],
  templateUrl: './log-out-button.component.html',
  styleUrl: './log-out-button.component.css'
})
export class LogOutButtonComponent {

  logOut()
  {
    sessionStorage.clear()
  }
}
