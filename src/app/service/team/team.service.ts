import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../datasource.service';
import { CookieService } from 'ngx-cookie-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TeamSelectModalComponent } from '../../modals/team-select-modal/team-select-modal.component';

@Injectable({
  providedIn: 'root'
})
export class TeamService extends DataService {

  constructor(http: HttpClient, private cookieService: CookieService, private modalService: NgbModal ) {
    super('/team', http);
  }

  getSelectedTeamName(): string {
    return this.cookieService.get('teamName');
  }

  getSelectedTeamAbr(): string {
    return this.cookieService.get('teamAbr');
  }

  getSelectedSwitchBoard(): string {
    return this.cookieService.get('switchBoard');
  }

  getSelectedManager(): string {
    return this.cookieService.get('manager');
  }

  getSelectedCostCentre(): string {
    return this.cookieService.get('costCentre');
  }

  changeTeam(callback) {
    return this.getAll().subscribe(response => {
      this.showModal(response).then(() => {
        callback();
      });
      });
  }

  showModal(teams) {
    const modalRef = this.modalService.open(TeamSelectModalComponent);
    modalRef.componentInstance.setContent(teams);
    modalRef.componentInstance.isLoaded = true;
    return new Promise((resolve, reject) => {
      modalRef.result.then(result => {
      this.cookieService.set('teamName', result.Name);
      this.cookieService.set('teamAbr', result.Abr);
      this.cookieService.set('manager', result.Manager);
      this.cookieService.set('switchBoard', result.SwitchBoard);
      this.cookieService.set('costCentre', result.CostCentre);
      resolve();
    }).catch(er => {
        console.log(er);
    });
  });
  }
}
