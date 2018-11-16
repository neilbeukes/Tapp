import { Router } from '@angular/router';
import { LoginModalComponent } from '../../modals/login-modal/login-modal.component';
import { AuthService } from '../auth/auth.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private modalService:  NgbModal, private authService: AuthService, private router: Router) { }

  login() {
    this.router.navigate(['']);
    const myModel = this.modalService.open(LoginModalComponent);
    myModel.result.then(response => {
      this.router.navigate(['']);
    });
  }
}
