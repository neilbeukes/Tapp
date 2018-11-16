import { HttpClient } from '@angular/common/http';
import { DataService } from '../datasource.service';
import { Injectable } from '@angular/core';
import { extend } from 'webdriver-js-extender';

@Injectable({
  providedIn: 'root'
})
export class BoardService extends DataService {

  constructor(http: HttpClient) {
    super('/messages', http);
   }
}
