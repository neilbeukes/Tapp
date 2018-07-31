import { ToastrService } from 'ngx-toastr';
import { User } from './../../service/login/user';
import { TeamComponent } from './../../team/team.component';
import { TeammemberService } from './../../service/teammember/teammember.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TeamService } from '../../service/team/team.service';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css']
})

export class TeamMemberComponent {

  public title = '';
  public button = '';
  teamMember: any = {};
  constructor(public activeModal: NgbActiveModal, private tmService: TeammemberService,
    private teamService: TeamService, private toastr: ToastrService) { }

  submit() {
    if (this.button === 'Add') {
      this.addTeamMember();
    } else if (this.button === 'Update') {
      this.updateTeamMember();
    }

  }

  addTeamMember() {
    this.teamMember.team = this.teamService.getSelectedTeamAbr();
    this.teamMember.USERID = this.teamMember.USERID.toUpperCase();
    this.tmService.add(this.teamMember)
      .subscribe(response => {
        this.toastr.success('Teammember added successfully', 'Teammember');
        // if user is creating their profile the first time it assigns newly created username to current user
        if (this.title === 'Please fill in your profile') {
          localStorage.setItem('username', this.teamMember.NAME + ' ' + this.teamMember.SURNAME);
        }

        this.activeModal.close({ alertText: 'Team member added successfully' });
      });
  }

  updateTeamMember() {
    this.tmService.update(this.teamMember)
      .subscribe(response => {
        this.toastr.success('Teammember updated successfully', 'Teammember');
        this.activeModal.close();
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
