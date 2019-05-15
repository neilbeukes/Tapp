import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DevLinksService } from '../../service/links/dev-links/dev-links.service';

@Component({
  selector: 'app-delete-links-modal',
  templateUrl: './delete-links-modal.component.html',
  styleUrls: ['./delete-links-modal.component.css']
})
export class DeleteLinksModalComponent {

  links;
  title = 'Delete';
  selectedLink;
  selectedEnv;
  selectedApp;

  constructor(public activeModal: NgbActiveModal, private devLinksService: DevLinksService, private toastr: ToastrService) { }

  setContent(title, links, selectedEnv, selectedApp) {
    this.title = title;
    this.links = links;
    // this.selectedLink = links[0];
    this.selectedApp = selectedApp;
    this.selectedEnv = selectedEnv;
  }

  close(response: boolean) {
    if (response === false) {
      this.activeModal.close(response);
    } else {
      this.devLinksService.delete(this.selectedLink._id).subscribe(res => {
        this.toastr.success('Link deleted successfully', 'Link');
        this.activeModal.close(true);
      });
    }
  }

  setLink(link) {
    this.selectedLink = link;
  }

}
