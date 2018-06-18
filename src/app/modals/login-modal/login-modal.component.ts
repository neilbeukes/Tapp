import { User } from './../../service/login/user';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  user: User = {username: '', password: ''};

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  submit(){
    this.activeModal.close(this.user);
  }

}
