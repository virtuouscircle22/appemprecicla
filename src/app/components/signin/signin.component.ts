import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router';

import { NgZone } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user ={
    email: "",
    password: ""
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private ngZone:NgZone,
  ) { }

  ngOnInit() {
  }

  signIn() {
    this.authService.signInUser(this.user)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('userEmail', this.user.email);
          this.ngZone.run(() => {
            this.router.navigate(['/inicio']);
          }
          )
          //this.router.navigate(['/inicio']);
        },
        err => {
          alert("Usuario no registado")
          console.log(err)
        }
      )
  }

}