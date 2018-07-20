import { Message } from './../../service/board/Message';
import { AuthService } from './../../service/auth/auth.service';
import { BoardComponent } from './../../board/board.component';
import { TeamService } from './../../service/team/team.service';
import { BoardService } from './../../service/board/board.service';
import { NgbModal, NgbActiveModal, NgbCalendar, NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';

@Component({
  selector: 'app-board-message-modal',
  templateUrl: './board-message-modal.component.html',
  styleUrls: ['./board-message-modal.component.css']
})
export class BoardMessageModalComponent implements OnInit {

  newMessage: Message = {
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
    , private formatter: NgbDateParserFormatter, private auth: AuthService) { }

  ngOnInit() {
  }

  postNewMessage() {
    if (this.edit) {
      this.updateMessage();
    } else {
      this.newMessage.userId = this.auth.getCurrentUserId();
      this.newMessage.userName = this.auth.getCurrentUserName();
      this.newMessage.team = this.teamService.getSelectedTeamAbr();
      this.boardService.add(this.newMessage).subscribe(response => {
        this.activeModal.close();
      });
    }
  }

  setContentEdit(message: Message) {
    this.newMessage = message;
    this.edit = true;
  }

  updateMessage() {
    this.boardService.update(this.newMessage).subscribe(response => {
      this.activeModal.close();
    });
  }
}
