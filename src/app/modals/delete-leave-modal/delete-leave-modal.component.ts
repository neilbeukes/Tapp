import { ToastrService } from 'ngx-toastr';
import { LeaveService } from './../../service/leave/leave.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-leave-modal',
  templateUrl: './delete-leave-modal.component.html',
  styleUrls: ['./delete-leave-modal.component.css']
})
export class DeleteleavemodalComponent {

  leave;
  selectedLeave;
  userId;

  constructor(public activeModal: NgbActiveModal, private leaveService: LeaveService, private toastr: ToastrService) { }

  setContent(leave, userId: string) {
    this.leave = leave;
    this.userId = userId;
    // this.selectedLeave = leave[0];
  }

  close(response: boolean) {
    if (response === false) {
      this.activeModal.close(response);
    } else {
      this.leaveService.delete(this.selectedLeave._id).subscribe( res => {
        console.log(res);
        this.toastr.success('Leave deleted successfully', 'Leave');
        this.activeModal.close(true);
      });
    }
  }

  setLeave(leave) {
    this.selectedLeave = leave;
  }

}
