import { LoginModalComponent } from './../../modals/login-modal/login-modal.component';
import { AuthService } from './../auth/auth.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from '@angular/core';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private modalService:  NgbModal, private authService: AuthService) { }

  login():Promise<any>{
    var myModel = this.modalService.open(LoginModalComponent)
    return myModel.result
  }
}
