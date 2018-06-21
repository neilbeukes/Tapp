import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';
import { AuthResponseObject } from './AuthResponseObject';
import { HttpClient } from '@angular/common/http';
import { DataService } from './../datasource.service';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper: JwtHelperService, private http: HttpClient, private router: Router) {
  }

  authenticate(credentials, callback) {
    var url = environment.apiEndpoint + '/auth';
    this.http.post(url, credentials).subscribe(response => {
      var authObject = response as AuthResponseObject;

      if (authObject.auth) {
        localStorage.setItem('userId', authObject.userId);
        localStorage.setItem('token', authObject.token);
        localStorage.setItem('username', authObject.username);
        callback(true)
      } else
        callback(false);
    })
  }

  isAuthenticated(): boolean {
    try{
      const token = localStorage.getItem('token');
      return !this.jwtHelper.isTokenExpired(token);
    } catch {
      return false;
    }
    
  }

  getCurrentUserId(): string {
    return localStorage.getItem('userId')
  }

  getCurrentUserName(): string {
    return localStorage.getItem('username')
  }

  logout() {
    console.log('logging out...');
    localStorage.setItem('userId', '');
    localStorage.setItem('username', '');
    this.router.navigateByUrl('');
    localStorage.setItem('token', '');
  }
}
