import { TeamService } from './../../service/team/team.service';
import { Component} from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-team-select-modal',
  templateUrl: './team-select-modal.component.html',
  styleUrls: ['./team-select-modal.component.css']
})
export class TeamSelectModalComponent {

  constructor(public activeModal: NgbActiveModal, private toastr: ToastrService) { }
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
    this.toastr.success(this.selectedTeam.Name + ' preference saved', 'Team');
    this.activeModal.close(this.selectedTeam);
  }

}
