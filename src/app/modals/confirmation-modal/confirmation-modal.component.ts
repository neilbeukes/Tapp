import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap'; 

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent{

  title = "Confirmation"; 
  body = "Are you sure?";
  constructor(public activeModal: NgbActiveModal) { 
  }

  close(response: boolean){
    this.activeModal.close(response);
  }

  setContent(title, body){
    this.title = title;
    this.body = body;
  }
}
