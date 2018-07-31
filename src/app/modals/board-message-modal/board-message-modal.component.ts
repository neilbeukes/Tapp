import { ToastrService } from 'ngx-toastr';
import { Message } from './../../service/board/Message';
import { AuthService } from './../../service/auth/auth.service';
import { TeamService } from './../../service/team/team.service';
import { BoardService } from './../../service/board/board.service';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-message-modal',
  templateUrl: './board-message-modal.component.html',
  styleUrls: ['./board-message-modal.component.css']
})
export class BoardMessageModalComponent implements OnInit {

  message: Message = {
    team: '',
    userId: '',
    userName: '',
    date: new Date().toString(),
    priority: false,
    subject: '',
    body: ''
  };

  edit = false;

  constructor(public activeModal: NgbActiveModal, private boardService: BoardService, private teamService: TeamService
    , private auth: AuthService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  postMessage() {
    if (this.edit) {
      this.updateMessage();
    } else {
      this.newMessage();
    }
  }

  setContentEdit(message: Message) {
    this.message = message;
    this.edit = true;
  }

  updateMessage() {
    this.boardService.update(this.message).subscribe(response => {
      this.toastr.success('Message updated successfully', 'Updated');
      this.activeModal.close();
    });
  }

  newMessage() {
    this.message.userId = this.auth.getCurrentUserId();
    this.message.userName = this.auth.getCurrentUserName();
    this.message.team = this.teamService.getSelectedTeamAbr();
    this.boardService.add(this.message).subscribe(response => {
      this.toastr.success('New message posted successfully', 'Message');
      this.activeModal.close();
    });
  }
}
