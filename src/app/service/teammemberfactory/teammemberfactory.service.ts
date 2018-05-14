import { Http } from '@angular/http';
import { DataService } from './../datasource.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeammemberfactoryService extends DataService {

  constructor(http: Http) {
    super('http://localhost:3000/team/', http)
  }
}
