import { Component, OnInit } from '@angular/core';
import { DevLinksService } from '../../service/links/dev-links/dev-links.service';

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
  dataLoaded = false;

  constructor(private devLinksService: DevLinksService) { }

  ngOnInit() {
    this.devLinksService.getAll().subscribe(response => {
      this.links = response.json();
      this.dataLoaded = true;
    });
    this.applications = this.devLinksService.getApplications();
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
