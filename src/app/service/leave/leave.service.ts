import { Injectable } from '@angular/core';
import { DataService } from '../datasource.service';
import { Http } from '@angular/http';
import { TeamService } from '../team/team.service';

@Injectable({
  providedIn: 'root'
})
export class LeaveService extends DataService {

    constructor(http: Http, private teamService: TeamService) {
    super("http://localhost:3000/leave",http)
   }
}
