import { AuthService } from './../../service/auth/auth.service';
import { User } from './../../service/login/user';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  user: User = { username: '', password: '' };
  alert = false;

  constructor(public activeModal: NgbActiveModal, private auth: AuthService) { }

  ngOnInit() {
  }

  submit() {
    this.alert = false;
    this.auth.authenticate(this.user, (response) => {
      if (response) {
        this.activeModal.close(this.user);
        this.alert = false
      }
      else
        this.alert = true;
    });
  }

}
