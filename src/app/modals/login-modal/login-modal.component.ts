import { AuthService } from './../../service/auth/auth.service';
import { User } from './../../service/login/user';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  user: User = { username: '', password: '' };
  alert = false;
  loginButton = false;

  constructor(public activeModal: NgbActiveModal, private auth: AuthService, private toastr: ToastrService) { }

  ngOnInit() {
    this.loginButton = false;
  }

  submit() {
    this.alert = false;
    this.loginButton = true;
    this.auth.authenticate(this.user, (response) => {
      if (response) {
        this.toastr.success('You have successfully signed in', 'Signed in');
        this.activeModal.close(this.user);
        this.alert = false;
      } else {
        this.alert = true;
        this.loginButton = false;
      }
    });
  }

}
