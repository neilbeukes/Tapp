import { GeneralLinksModalComponent } from './../../modals/general-links-modal/general-links-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { GeneralLinksService } from '../../service/links/general-links/general-links.service';

@Component({
  selector: 'app-links-general',
  templateUrl: './links-general.component.html',
  styleUrls: ['./links-general.component.css']
})
export class LinksGeneralComponent implements OnInit {

  links;
  dataLoaded = false;

  constructor(private gls: GeneralLinksService, private ngModel: NgbModal) { }

  ngOnInit() {
    this.getLinks()
  }

  getLinks() {
    this.gls.getAll().subscribe(response => {
      this.links = response;
      this.dataLoaded = true;
    })
  }

  addLink() {
    const modalRef = this.ngModel.open(GeneralLinksModalComponent);
    modalRef.result.then(result => {
      this.getLinks();
    }).catch(err => {
      console.log("modal dissmisssed");
    })
  }
}
