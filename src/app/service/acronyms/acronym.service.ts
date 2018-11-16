import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DataService } from "../datasource.service";

@Injectable({
  providedIn: "root"
})
export class AcronymService extends DataService {
  constructor(http: HttpClient) {
    super("/acronyms", http);
  }
}
