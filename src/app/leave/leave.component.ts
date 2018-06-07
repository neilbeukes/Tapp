import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal, NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap'; 
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

  constructor(private modalService: NgbModal, private leaveService: LeaveService, calendar: NgbCalendar) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
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

  recordLeave(){
    const modalRef = this.modalService.open(RecordLeaveModalComponent);
    modalRef.result.then(result => {
    }).catch(err => {
      console.log("modal dissmisssed");
    })
  }

  getLeave(){
    this.leaveService.getAll().subscribe(response => {
      this.leaveRecords = this.sortRecords(response.json());
    })
  }

  setCalender(record){
    var fromDateSplit = record.fromDate.split("-", 3); 
    var toDateSplit = record.toDate.split("-", 3); 
    this.fromDate.day = Number(fromDateSplit[0]);
    this.fromDate.month = Number(fromDateSplit[1]);
    this.fromDate.year = Number(fromDateSplit[2]);
    this.toDate.day = Number(toDateSplit[0]);
    this.toDate.month = Number(toDateSplit[1]);
    this.toDate.year = Number(toDateSplit[2]);
  }

  sortRecords(records){
    return records;
  }
}

    // for (var i = 0, len = records.length; i < len; i++) {
    //    var testx = Number((records[i].fromDate.split("-", 3)[1]) + (records[i].fromDate.split("-", 3)[0]));
    //    for (var j = 1, len = records.length; j < len; j++) {
    //     var testy = Number((records[j].fromDate.split("-", 3)[1]) + (records[j].fromDate.split("-", 3)[0]));
    //     if (testx > testy){
    //       console.log(testx +" > "+ testy);
    //       var z = records[i];
    //       records[i] = records[j];
    //       records[j] = z;
    //     }
    //   }
    // }
    // console.log(records)
