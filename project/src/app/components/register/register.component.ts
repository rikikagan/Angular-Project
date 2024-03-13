import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../user/user.service';
import { User } from '../user/userModel';
import { CommonModule } from '@angular/common';
import { passwordValidator } from './passwordValidation';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup

  constructor(private _userService: UserService, private router: Router) { }
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      "name": new FormControl(this._userService.userName, [Validators.required, Validators.minLength(3)]),
      "address": new FormControl("", [Validators.required]),
      "email": new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}')]),
      "password": new FormControl("",[Validators.required, passwordValidator]),

    })
  }

  
  register() {
    let name = this.registerForm.value.name
    let password = this.registerForm.value.password
    let address = this.registerForm.value.address
    let email = this.registerForm.value.email

    let newUser: User = {
      id:0,
      userName: name,
      address: address,
      email: email,
      password: password
    };

    this._userService.addUser(newUser).subscribe({
      next: (res) => {
        sessionStorage.setItem('username', name);
        sessionStorage.setItem('password', password);
        alert("registration completed")
        this.router.navigate(['/recipes'])
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}

