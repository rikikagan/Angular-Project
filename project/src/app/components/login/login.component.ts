import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../user/userModel';
import { UserService } from '../user/user.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(private _userService: UserService, private router: Router) { }

  public addForm!: FormGroup;
  public usersList: User[] = []

  ngOnInit(): void {
    this.addForm = new FormGroup({
      "name": new FormControl("",[Validators.required, Validators.minLength(9)]),
      "password": new FormControl("",[Validators.required, Validators.minLength(9)]),
    })

  }

  submit() {
    let name = this.addForm.value.name
    let pass = this.addForm.value.password
    this._userService.getUsersList().subscribe({
      next: (res) => {
        this.usersList = res
        this._userService.userName =name
        if (this.usersList.some(x => x.userName == name && x.password == pass)) {
          sessionStorage.setItem('username', name);
          sessionStorage.setItem('password', pass);
          this.router.navigate(['/recipes'])
        }
        else if(this.usersList.some(x=>x.userName==name))
        {
           alert("your password is wrong")
        }
        else {
            this.router.navigate(['/register'])
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}


