import { TeamComponent } from './../../team/team.component';
import { TeammemberfactoryService } from './../../service/teammemberfactory/teammemberfactory.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css']
})

export class TeamMemberComponent {

  public title = "";
  public button = "";
  teamMember = {};
  constructor(public activeModal: NgbActiveModal, private factory: TeammemberfactoryService) { }

  submit() {
    if (this.button === "Add") {
      this.addTeamMember();
    }
    else if (this.button === "Update") {
      this.updateTeamMember();
    }

  }

  addTeamMember() {
    this.factory.add(this.teamMember)
      .subscribe(response => {
        this.activeModal.close({ alertText: "Team member added successfully" });
      });
  }

  updateTeamMember() {
    this.factory.update(this.teamMember)
      .subscribe(response => {
        this.activeModal.close({ alertText: "Team member updated successfully" });
      });
  }

  setContent(title, button) {
    this.title = title;
    this.button = button;
  }

  populateFields(teamMember) {
    this.teamMember = teamMember;
  }


}
