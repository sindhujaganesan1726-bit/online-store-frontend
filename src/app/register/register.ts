import { Component } from '@angular/core';
import {FormsModule}from '@angular/forms';
import { AuthService } from '../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  username = '';
  password = '';
  errorMessage = '';

  constructor (private authService:AuthService, private router:Router){}

  onRegister(){
    const user = {username:this.username, password:this.password};
    this.authService.register(user).subscribe({
      next:() =>{
        this.router.navigate(['/login']);
      },
      error:(err) => {
        this.errorMessage = 'Registration failed. Try a different username.';
      }
    });
  }
}
