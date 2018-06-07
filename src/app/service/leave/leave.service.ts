import { Injectable } from '@angular/core';
import { DataService } from '../datasource.service';
import { Http } from '@angular/http';
import { TeamService } from '../team/team.service';

@Injectable({
  providedIn: 'root'
})
export class LeaveService extends DataService {

  localhttp;

  constructor(http: Http, private teamService: TeamService) {
    super("http://localhost:3000/leave",http)
    this.localhttp = http;
   }

   getAll() {
    return this.localhttp.get('http://localhost:3000/leave?team=' + this.teamService.getSelectedTeamAbr())
    // .map(Response => Response.json()) if you want to map the response
    //.catchError(this.handleError)
  }
}
