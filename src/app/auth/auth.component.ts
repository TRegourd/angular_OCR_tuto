import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  authStatus!: boolean;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authStatus = false;
  }

  onSignIn() {
    this.authService.signIn().then(() => {
      this.router.navigate(['/appareils']);
      this.authStatus = this.authService.isAuth;
    });
  }

  onSignOut() {
    this.authService.signOut();
    console.log('déconnexion reuissie');
    this.authStatus = this.authService.isAuth;
  }
}
