import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../datasource.service';
import { TeamService } from '../team/team.service';

@Injectable({
  providedIn: 'root'
})
export class LeaveService extends DataService {

    constructor(http: HttpClient, private teamService: TeamService) {
    super("/leave",http)
   }
}
