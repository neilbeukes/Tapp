import { Component, OnInit } from '@angular/core';
import { LinksfactoryService } from '../../service/linksfactory/linksfactory.service';

@Component({
  selector: 'app-links-general',
  templateUrl: './links-general.component.html',
  styleUrls: ['./links-general.component.css']
})
export class LinksGeneralComponent implements OnInit {

  links;

  ngOnInit() {
    this.links = LinksfactoryService.getGeneralLinks();
  }

}
