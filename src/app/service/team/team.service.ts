import { Injectable } from '@angular/core';
import { DataService } from '../datasource.service';
import { Http } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TeamSelectModalComponent } from '../../modals/team-select-modal/team-select-modal.component';

@Injectable({
  providedIn: 'root'
})
export class TeamService extends DataService{

  constructor(http: Http, private cookieService: CookieService, private modalService: NgbModal ) { 
    super('http://localhost:3000/team', http);
  }

  getSelectedTeamName(): string{
    return this.cookieService.get('teamName');
  }

  getSelectedTeamAbr(): string{
    return this.cookieService.get('teamAbr');
  }

  changeTeam(callback) {
    return this.getAll().subscribe(response => {
      console.log("getAll teams returned")
      this.showModal(response.json()).then(()=> {
        callback();
      });
      });
  }

  showModal(teams){
    const modalRef = this.modalService.open(TeamSelectModalComponent);
    console.log("Modal Opened")
    modalRef.componentInstance.setContent(teams);
    modalRef.componentInstance.isLoaded = true;
    return new Promise((resolve, reject) => {
      modalRef.result.then(result => {
      console.log("Modal result")
      this.cookieService.set('teamName', result.Name);
      this.cookieService.set('teamAbr', result.Abr);
      console.log(this.cookieService.get('teamName'));
      resolve();
    }).catch(er => {

    });
  });
  }
}
