import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from '../../datasource.service';

@Injectable({
  providedIn: 'root'
})
export class DevLinksService extends DataService {

  constructor(http: HttpClient) {
    super('/links/dev', http);
  }

  getApplications(): Array<any> {
    return [
      { id: 1, name: 'EOML' },
      { id: 2, name: 'QMS' },
      { id: 3, name: 'PPHL' },
      { id: 4, name: 'MLS' }
    ];
  }

}
