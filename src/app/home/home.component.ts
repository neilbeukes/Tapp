import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TeamSelectModalComponent } from '../modals/team-select-modal/team-select-modal.component';
import { NgbModal, NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { TeamDataService } from '../service/teamservice/teamservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cookieService: CookieService, private modalService: NgbModal, private teamservice: TeamDataService) { }

  ngOnInit() {
    console.log(this.cookieService.get('Team'));
    this.cookieService.get('Team');
    if (this.cookieService.get('Team') == "") {
      console.log("home init if");
        this.changeTeam();
    }
  }

  changeTeam() {
    this.teamservice.getAll().subscribe(response => {
      this.showModal(response.json());
    });
  }

  showModal(teams){
    const modalRef = this.modalService.open(TeamSelectModalComponent);
    modalRef.componentInstance.setContent(teams);
    modalRef.componentInstance.isLoaded = true;
    modalRef.result.then(result => {
      this.cookieService.set('Team', result.Abr);
      console.log(this.cookieService.get('Team'));
    }).catch(er => {

    })
  }
}
