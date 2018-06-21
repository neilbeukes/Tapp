import { HttpClient } from '@angular/common/http';
import { DataService } from './../datasource.service';
import { Injectable } from '@angular/core';
import { TeamService } from '../team/team.service';

@Injectable({
  providedIn: 'root'
})
export class TeammemberService extends DataService {

  constructor(http: HttpClient, private teamService: TeamService) {
    super('/teammember', http);
  }
}
