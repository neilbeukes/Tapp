import { DeleteleavemodalComponent } from './../modals/delete-leave-modal/delete-leave-modal.component';
import { AuthService } from './../service/auth/auth.service';
import { AuthGuardService } from './../service/authguard/auth-guard.service';
import { Leave } from './../service/leave/leave';
import { TeamService } from './../service/team/team.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal, NgbDateStruct, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { RecordLeaveModalComponent } from '../modals/record-leave-modal/record-leave-modal.component';
import { LeaveService } from '../service/leave/leave.service';
import { forEach } from '@angular/router/src/utils/collection';

const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {

  leaveRecords;

  //datePicker
  hoveredDate: NgbDateStruct;
  fromDate: NgbDateStruct;
  toDate: NgbDateStruct;

  constructor(private modalService: NgbModal, private leaveService: LeaveService, private calendar: NgbCalendar,
    private dateFormatter: NgbDateParserFormatter, private teamService: TeamService, private auth: AuthService) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getToday();
  }

  ngOnInit() {
    this.getLeave();
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
  }

  isHovered = date => this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate);
  isInside = date => after(date, this.fromDate) && before(date, this.toDate);
  isFrom = date => equals(date, this.fromDate);
  isTo = date => equals(date, this.toDate);

  recordLeave() {
    const modalRef = this.modalService.open(RecordLeaveModalComponent);
    modalRef.result.then(result => {
      this.getLeave();
    }).catch(err => {
      console.log("modal dissmisssed");
    })
  }

  deleteLeave() {
    const modalRef = this.modalService.open(DeleteleavemodalComponent);
    console.log(this.leaveRecords);
    modalRef.componentInstance.setContent(this.leaveRecords, this.auth.getCurrentUserId());
    modalRef.result.then(result => {
      this.getLeave();
    }).catch(err => {
      console.log("modal dissmisssed");
    })
  }

  getLeave() {
    this.leaveService.getAllForTeam(this.teamService.getSelectedTeamAbr()).subscribe(response => {
      var records = response as Array<Leave>;
      for (var i = 0; i < records.length; i++) {
        if (records[i].toDate < this.dateFormatter.format(this.calendar.getToday())) {
          if (i !== -1) {
            records.splice(i, 1);
          }
        }else if (new Date(records[i].fromDate).getMonth() > (new Date(this.dateFormatter.format(this.calendar.getToday())).getMonth()+2)){
          if (i !== -1) {
            records.splice(i, 1);
          }
        }
      }
      this.leaveRecords = this.sortRecords(records);
    })
  }

  setCalender(record) {
    this.fromDate = this.dateFormatter.parse(record.fromDate);
    this.toDate = this.dateFormatter.parse(record.toDate);
  }

  sortRecords(records) {
    for (var i = 0, len = records.length; i < len - 1; i++) {
      for (var j = 0, len = records.length; j < len - 1 - i; j++) {
        var testi = new Date(records[j].fromDate);
        var testj = new Date(records[j + 1].fromDate);
        if (testi > testj) {
          var z = records[j];
          records[j] = records[j + 1];
          records[j + 1] = z;
        }
      }
    }
    return records;
  }
}

