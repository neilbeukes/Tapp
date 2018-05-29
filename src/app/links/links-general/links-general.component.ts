import { Component, OnInit } from '@angular/core';
import { GeneralLinksService } from '../../service/links/general-links/general-links.service';

@Component({
  selector: 'app-links-general',
  templateUrl: './links-general.component.html',
  styleUrls: ['./links-general.component.css']
})
export class LinksGeneralComponent implements OnInit {

  links;

  constructor(private gls: GeneralLinksService){}

  ngOnInit() {
    
  }

}
