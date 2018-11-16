import { Router, NavigationEnd } from '@angular/router';
import { TeamService } from '../service/team/team.service';
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
  navigationSubscription;

  constructor(private ts: TeamService, private router: Router) {

    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.setTeamValues();
      }
    });
  }

  setTeamValues() {
    this.costCentre = this.ts.getSelectedCostCentre();
    this.switchBoard = this.ts.getSelectedSwitchBoard();
    this.manager = this.ts.getSelectedManager();
  }

  ngOnInit() {
    }

}
