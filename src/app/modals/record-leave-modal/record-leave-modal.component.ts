import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal, NgbDateStruct, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { LeaveService } from '../../service/leave/leave.service';
import { TeamService } from '../../service/team/team.service';

const now = new Date();

const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;

@Component({
  selector: 'app-record-leave-modal',
  templateUrl: './record-leave-modal.component.html',
  styleUrls: ['./record-leave-modal.component.css']
})
export class RecordLeaveModalComponent {

  model: NgbDateStruct;
  date: {year: number, month: number};
  hoveredDate: NgbDateStruct;
  fromDate: NgbDateStruct;
  toDate: NgbDateStruct;
  selectedDate;
  singleDay:boolean = true;

  constructor(private activeModal: NgbActiveModal, calendar: NgbCalendar, 
    private leaveService: LeaveService, private teamService: TeamService, private dateFormatter: NgbDateParserFormatter) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  onDateSelection(date: NgbDateStruct) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
    this.selectedDate = this.dateToString();
  }

  isHovered = date => this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate);
  isInside = date => after(date, this.fromDate) && before(date, this.toDate);
  isFrom = date => equals(date, this.fromDate);
  isTo = date => equals(date, this.toDate);

  dateToString(): string {
    try {
      if (this.fromDate.day == null || this.toDate.day == null)
      return "please pick a date";
      else
        return  this.dateFormatter.format(this.fromDate) + " to " + this.dateFormatter.format(this.toDate)
    } catch{}
    return "please pick a date";
  }

  recordLeave(){
    let leaveObject = this.createleaveObject();
    console.log(leaveObject);
    this.leaveService.add(leaveObject).subscribe(response => {
      console.log(response);
      this.activeModal.close();
    });
  }

  createleaveObject(){
    if(this.singleDay){
      this.fromDate.day = this.toDate.day = this.model.day;
      this.fromDate.month = this.toDate.month = this.model.month;
      this.fromDate.year = this.toDate.year = this.model.year;
    }
    return {name: "Neil Beukes",
            userId: "ABNB559",
            fromDate: this.dateFormatter.format(this.fromDate),
            toDate: this.dateFormatter.format(this.toDate),
            team: this.teamService.getSelectedTeamAbr()};
  }
}
