import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../../datasource.service';

@Injectable({
  providedIn: 'root'
})
export class GeneralLinksService extends DataService {

  constructor(http: HttpClient) {
    super('/links/general', http);
  }
}
