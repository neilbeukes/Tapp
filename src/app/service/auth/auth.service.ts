import { TeamMemberComponent } from './../../modals/team-member-modal/team-member.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';
import { AuthResponseObject } from './AuthResponseObject';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper: JwtHelperService, private http: HttpClient,
    private router: Router, private ngModal: NgbModal) {
  }

  authenticate(credentials, callback) {
    const url = environment.apiEndpoint + '/auth';
    this.http.post(url, credentials).subscribe(response => {
      const authObject = response as AuthResponseObject;

      if (authObject.auth) {
        localStorage.setItem('userId', authObject.userId);
        localStorage.setItem('token', authObject.token);
        localStorage.setItem('username', authObject.username);

        if (!authObject.found) {
          this.addNewUser();
        }

        callback(true);
      } else {
        callback(false);
      }
    });
  }

  isAuthenticated(): boolean {
    try {
      const token = localStorage.getItem('token');
      return !this.jwtHelper.isTokenExpired(token);
    } catch {
      return false;
    }

  }

  getCurrentUserId(): string {
    return localStorage.getItem('userId');
  }

  getCurrentUserName(): string {
    return localStorage.getItem('username');
  }

  logout() {
    console.log('logging out...');
    localStorage.setItem('userId', '');
    localStorage.setItem('username', '');
    localStorage.setItem('token', '');
    this.router.navigateByUrl('');
  }

  addNewUser() {
    const modalRef = this.ngModal.open(TeamMemberComponent);
    modalRef.componentInstance.setContent('Please fill in your profile', 'Add');
    modalRef.result.then(result => {
      console.log('New member added');
    }).catch(err => {
      console.log('modal dissmisssed');
    });
  }
}
