import { Component, OnInit } from '@angular/core';
import { DevLinksService } from '../../service/links/dev-links/dev-links.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DevLinksModalComponent } from '../../modals/dev-links-modal/dev-links-modal.component';

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

  alertVisible = false;
  alertText = "";

  constructor(private devLinksService: DevLinksService, private ngModel: NgbModal) { }

  ngOnInit() {
    this.getLinks();
  }

  getLinks() {
    this.devLinksService.getAll().subscribe(response => {
      this.links = response.json();
      this.dataLoaded = true;
    });
    this.applications = this.devLinksService.getApplications();
    this.selectedApplication = this.applications[0];
  }

  selectApplication(application) {
    this.selectedApplication = application;
    console.log(this.selectedApplication);
  }

  isApplicationSelected(application): boolean {
    if (application.id == this.selectedApplication.id)
      return true;
    else
      return false;
  }

  selectEnv(env) {
    this.selectedEnv = env;
  }

  isEnvSelected(env): boolean {
    if (env == this.selectedEnv)
      return true;
    else
      return false;
  }

  addLink() {
    const modalRef = this.ngModel.open(DevLinksModalComponent);
    modalRef.componentInstance.setContent(this.selectedEnv, this.selectedApplication.name, "Add");
    modalRef.result.then(result => {
      this.showAlert(true, result.alertText);
      this.getLinks();
    }).catch(err => {
      console.log("modal dissmisssed");
    })
  }

  showAlert(value: boolean, text: string) {
    this.alertVisible = value;
    this.alertText = text;
  }
}
