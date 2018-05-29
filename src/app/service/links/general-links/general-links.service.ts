import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from '../../datasource.service';

@Injectable({
  providedIn: 'root'
})
export class GeneralLinksService extends DataService {

  constructor(http: Http) {
    super("http://localhost:3000/links/general/", http)
  }

}
