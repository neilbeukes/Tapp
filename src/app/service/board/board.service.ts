import { DataService } from './../datasource.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { extend } from 'webdriver-js-extender';

@Injectable({
  providedIn: 'root'
})
export class BoardService extends DataService{

  constructor(http: Http) {
    super("http://localhost:3000/messages",http);
   }
}
