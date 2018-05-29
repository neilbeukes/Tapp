import { Injectable } from '@angular/core';
import { DataService } from '../../datasource.service';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DevLinksService extends DataService {

  constructor(http: Http) {
    super("http://localhost:3000/links/dev/", http)
  }

  getApplications(): Array<any> {
    return [
      { id: 1, name: "EOML" },
      { id: 2, name: "QMS" },
      { id: 3, name: "PPHL" },
      { id: 4, name: "MLS" }
    ]
  }

}
