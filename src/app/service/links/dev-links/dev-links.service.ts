import { ApplicationService } from "./../application/dev-links.service";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DataService } from "../../datasource.service";

@Injectable({
  providedIn: "root"
})
export class DevLinksService extends DataService {
  constructor(http: HttpClient, private appService: ApplicationService) {
    super("/links/dev", http);
  }

  getApplications(callback) {
    this.appService.getAll().subscribe(response => {
      callback(response);
    });
  }
}
