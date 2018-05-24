import { Http } from '@angular/http';
import { DataService } from './../datasource.service';
import { Injectable } from '@angular/core';
import { TeamService } from '../team/team.service';

@Injectable({
  providedIn: 'root'
})
export class TeammemberService extends DataService {

  private localhttp: Http;

  constructor(http: Http, private teamService: TeamService) {
    super('http://localhost:3000/teammember', http)
    this.localhttp = http;
  }

  getAll() {
    return this.localhttp.get('http://localhost:3000/teammember?team=' + this.teamService.getSelectedTeamAbr())
    // .map(Response => Response.json()) if you want to map the response
    //.catchError(this.handleError)
  }
}
