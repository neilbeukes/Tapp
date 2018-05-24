import { Component, OnInit } from '@angular/core';
import { LinksService } from '../../service/links/links.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  applications;
  links;

  selectedApplication;
  selectedEnv = 'Dev';

  constructor() { }

  ngOnInit() {
    this.links = LinksService.getLinks(this.selectApplication, this.selectedEnv)
    this.applications = LinksService.getApplications();
    this.selectedApplication = this.applications[0];
  }

  selectApplication(application){
    this.selectedApplication = application;
  }

  isApplicationSelected(application): boolean {
    if (application.id == this.selectedApplication.id)
      return true;
    else
      return false;
  }

  selectEnv(env){
    this.selectedEnv = env;
  }

  isEnvSelected(env): boolean {
    if (env == this.selectedEnv)
      return true;
    else
      return false;
  }
}
