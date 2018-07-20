import { GeneralLinksService } from './../../service/links/general-links/general-links.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-general-links-modal',
  templateUrl: './delete-general-links-modal.component.html',
  styleUrls: ['./delete-general-links-modal.component.css']
})
export class DeleteGeneralLinksModalComponent {

  constructor(public activeModal: NgbActiveModal, private generalLinksService: GeneralLinksService) { }

  links;
  title = 'Delete';
  selectedLink;

  setContent(title, links) {
    this.title = title;
    this.links = links;
  }

  close(response: boolean) {
    if (response === false) {
      this.activeModal.close(response);
    } else {
      this.generalLinksService.delete(this.selectedLink._id).subscribe(res => {
        this.activeModal.close(true);
      });
    }
  }

  setLink(link) {
    this.selectedLink = link;
  }

}
