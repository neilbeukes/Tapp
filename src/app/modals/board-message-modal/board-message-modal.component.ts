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

  newMessage = {
    team: "",
    userId: "",
    userName: "",
    date: this.formatter.format(this.calender.getToday()),
    priority: false,
    subject: "",
    body: ""
  };

  constructor(private activeModal: NgbActiveModal, private boardService: BoardService, private teamService: TeamService
    , private calender: NgbCalendar, private formatter: NgbDateParserFormatter) { }

  ngOnInit() {
  }

  postNewMessage(){
    this.newMessage.userId = "ABNB559";
    this.newMessage.userName = "Neil Beukes";
    this.newMessage.team = this.teamService.getSelectedTeamAbr();
    console.log(this.newMessage);
    this.boardService.add(this.newMessage).subscribe(response => {
      console.log(response);
      this.activeModal.close();
    });
  }
}
