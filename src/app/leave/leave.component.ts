import { map } from "rxjs/operators";
import { colors } from "../common/colors";
import { DeleteleavemodalComponent } from "../modals/delete-leave-modal/delete-leave-modal.component";
import { AuthService } from "../service/auth/auth.service";
import { Leave } from "../service/leave/leave";
import { TeamService } from "../service/team/team.service";
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { RecordLeaveModalComponent } from "../modals/record-leave-modal/record-leave-modal.component";
import { LeaveService } from "../service/leave/leave.service";
import { CalendarEvent } from "angular-calendar";
import { saveAs as importedSaveAs } from "file-saver";

@Component({
  selector: "app-leave",
  templateUrl: "./leave.component.html",
  styleUrls: ["./leave.component.css"]
})
export class LeaveComponent implements OnInit {
  view: String = "month";
  viewDate: Date = new Date();
  leaveRecords;

  constructor(
    private modalService: NgbModal,
    private leaveService: LeaveService,
    private teamService: TeamService,
    private auth: AuthService
  ) {}

  events: CalendarEvent[] = [];

  ngOnInit() {
    this.getLeave();
  }

  recordLeave() {
    const modalRef = this.modalService.open(RecordLeaveModalComponent);
    modalRef.result
      .then(result => {
        this.getLeave();
      })
      .catch(err => {
        console.log("modal dissmisssed");
      });
  }

  deleteLeave() {
    const modalRef = this.modalService.open(DeleteleavemodalComponent);
    modalRef.componentInstance.setContent(
      this.leaveRecords,
      this.auth.getCurrentUserId()
    );
    modalRef.result
      .then(result => {
        this.getLeave();
      })
      .catch(err => {
        console.log("modal dissmisssed");
      });
  }

  getLeave() {
    this.leaveService
      .getAllForTeam(this.teamService.getSelectedTeamAbr())
      .subscribe(response => {
        this.leaveRecords = response;
        this.createEvents(response as Array<Leave>);
      });
  }

  createEvents(leave: Array<Leave>) {
    this.events = [];
    for (let i = 0; i < leave.length; i++) {
      this.events.push({
        start: new Date(leave[i].fromDate),
        end: new Date(leave[i].toDate),
        title: leave[i].name,
        color: this.getRandomColor()
      });
    }
  }

  getRandomColor() {
    const color = Math.floor(Math.random() * 14 + 1);
    return colors(color);
  }

  // getReport() {
  //   return this.leaveService
  //     .report("test")
  //     .pipe(
  //       map(res => {
  //         console.log(res);
  //         return {
  //           filename: "tapp-leave.csv",
  //           data: res.blob()
  //         };
  //       })
  //     )
  //     .subscribe(
  //       res => {
  //         console.log("start download:", res);
  //         var url = window.URL.createObjectURL(res.data);
  //         var a = document.createElement("a");
  //         document.body.appendChild(a);
  //         a.setAttribute("style", "display: none");
  //         a.href = url;
  //         a.download = res.filename;
  //         a.click();
  //         window.URL.revokeObjectURL(url);
  //         a.remove(); // remove the element
  //       },
  //       error => {
  //         console.log("download error:", JSON.stringify(error));
  //       },
  //       () => {
  //         console.log("Completed file download.");
  //       }
  //     );
  // }

  getReport() {
    // this.leaveService.downloadFile("").subscribe(blob => {
    //   importedSaveAs(blob, "tapp-leave.csv");
    // });

    this.leaveService.download();
  }
}
