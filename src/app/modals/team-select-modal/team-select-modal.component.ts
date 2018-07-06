import { Component} from '@angular/core';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-team-select-modal',
  templateUrl: './team-select-modal.component.html',
  styleUrls: ['./team-select-modal.component.css']
})
export class TeamSelectModalComponent {

  constructor(public activeModal: NgbActiveModal) { }
  teams;
  selectedTeam;
  public isLoaded = false;

  setContent(teams) {
    this.teams = teams;
    this.selectedTeam = teams[0];
  }

  isSelected(team): boolean {
    if (team._id === this.selectedTeam._id) {
      return true;
    } else {
      return false;
    }
  }

  selectTeam(team) {
    this.selectedTeam = team;
  }

  save() {
    this.activeModal.close(this.selectedTeam);
  }

}
