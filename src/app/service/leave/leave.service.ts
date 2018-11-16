import { map, catchError } from "rxjs/operators";
import { ResponseContentType, RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DataService } from "../datasource.service";
import { TeamService } from "../team/team.service";
import { saveAs } from "file-saver";

@Injectable({
  providedIn: "root"
})
export class LeaveService extends DataService {
  httpClient: HttpClient;

  constructor(http: HttpClient, private teamService: TeamService) {
    super("/leave", http);
    this.httpClient = http;
  }

  email(request) {
    return this.httpClient.post(this.url + "/email", request, this.headers);
    // .catchError(this.handleError)
  }

  report(): Observable<any> {
    return this.httpClient.get(
      this.url + "/report?team=" + this.teamService.getSelectedTeamAbr(),
      this.headers
    );
    // .catchError(this.handleError)
  }

  download() {
    this.report().subscribe(
      response => {
        // download file
        var blob = new Blob([response], { type: "application/pdf" });
        var filename = "tapp-leave.csv";
        saveAs(blob, filename);
      },
      error => {
        console.error(`Error: ${error.message}`);
      }
    );
  }
}
