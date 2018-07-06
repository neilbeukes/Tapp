import { TeamService } from './../service/team/team.service';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TeamSelectModalComponent } from '../modals/team-select-modal/team-select-modal.component';
import { NgbModal, NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  costCentre;
  manager;
  switchBoard;

  constructor(private ts: TeamService) {
    this.costCentre = ts.getSelectedCostCentre();
    this.switchBoard = ts.getSelectedSwitchBoard();
    this.manager = ts.getSelectedManager();
  }

  ngOnInit() {
    }

}
