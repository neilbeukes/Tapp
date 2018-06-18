import { LoginService } from './../service/login/login.service';
import { Component, OnInit } from '@angular/core';
import { TeamService } from '../service/team/team.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isCollapsed = false;
  selectedTeam = '';

  constructor(private teamService: TeamService, private loginService: LoginService) {
  }

  ngOnInit() {
    if (this.teamService.getSelectedTeamName() == '')
      this.changeTeam();
    else
      this.selectedTeam = this.teamService.getSelectedTeamName();
  }

  changeTeam() {
    this.teamService.changeTeam(() => {
      console.log("updating team name");
      this.selectedTeam = this.teamService.getSelectedTeamName();
    });
  }

  login(){
    this.loginService.login().then(response =>{
      console.log(response);
    })
  }
  
}
