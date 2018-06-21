import { MessageEdit } from './../service/board/MessageEdit';
import { Message } from './../service/board/Message';
import { AuthService } from './../service/auth/auth.service';
import { TeamService } from './../service/team/team.service';
import { BoardService } from './../service/board/board.service';
import { BoardMessageModalComponent } from './../modals/board-message-modal/board-message-modal.component';
import { NgModel } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  messages: MessageEdit[];
  messagesNormal: MessageEdit[];
  messagesPriority: MessageEdit[];

  isDataLoaded = false;

  constructor(private router: Router, private modalService: NgbModal, private boardService: BoardService,
    private teamService: TeamService, private calender: NgbCalendar, private formatter: NgbDateParserFormatter,
    private auth: AuthService) { }

  ngOnInit() {
    if (this.auth.isAuthenticated())
      this.getMessages();
  }

  inBoardRoute() {
    return (this.router.url == "/board");
  }

  postNewMessage() {
    console.log("open modal");
    const modalRef = this.modalService.open(BoardMessageModalComponent);
    //modalRef.componentInstance.setContent("Add team member", "Add");
    modalRef.result.then(result => {
      // this.showAlert(true, result.alertText);
      this.getMessages();
    }).catch(err => {
      console.log("modal dissmisssed");
    })
  }

  getMessages() {
    this.boardService.getAllForTeam(this.teamService.getSelectedTeamAbr()).subscribe(response => {
      this.splitMessages(response);
    }
    )
  }

  splitMessages(messages) {
    this.messagesPriority = [];
    this.messagesNormal = [];
    messages = this.sortMessages(messages);
    for (var i = 0; i < messages.length; i++) {
      if (messages[i].priority) {
        this.messagesPriority.push(messages[i]);
      } else {
        this.messagesNormal.push(messages[i]);
      }
    }
    this.isDataLoaded = true;
  }

  sortMessages(messages) {
    for (var i = 0, len = messages.length; i < len - 1; i++) {
      for (var j = 0, len = messages.length; j < len - 1 - i; j++) {
        var testi = new Date(messages[j].date);
        var testj = new Date(messages[j + 1].date);
        if (testi < testj) {
          var z = messages[j];
          messages[j] = messages[j + 1];
          messages[j + 1] = z;
        }
      }
    }
    return messages;
  }

  canEditMessage(message: MessageEdit){
    console.log(message)
    if ((message.userId == this.auth.getCurrentUserId()) || message.userId == "abnb559"){
      return true;
    }else{
      return false;
    }
  }

  editMessage(message: MessageEdit){
    console.log("open modal");
    const modalRef = this.modalService.open(BoardMessageModalComponent);
    modalRef.componentInstance.setContentEdit(message);
    modalRef.result.then(result => {
      // this.showAlert(true, result.alertText);
      this.getMessages();
    }).catch(err => {
      console.log("modal dissmisssed");
    })
  }
}
