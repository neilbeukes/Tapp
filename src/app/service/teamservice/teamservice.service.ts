import { Injectable } from '@angular/core';
import { DataService } from '../datasource.service';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TeamDataService extends DataService{

  constructor(http: Http) { 
    super('http://localhost:3000/team', http);
  }
}
