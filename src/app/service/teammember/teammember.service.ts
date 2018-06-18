import { Http } from '@angular/http';
import { DataService } from './../datasource.service';
import { Injectable } from '@angular/core';
import { TeamService } from '../team/team.service';

@Injectable({
  providedIn: 'root'
})
export class TeammemberService extends DataService {

  constructor(http: Http, private teamService: TeamService) {
    super('http://localhost:3000/teammember', http);
  }
}
