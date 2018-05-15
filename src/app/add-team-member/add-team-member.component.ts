import { TeamComponent } from './../team/team.component';
import { TeammemberfactoryService } from './../service/teammemberfactory/teammemberfactory.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-team-member',
  templateUrl: './add-team-member.component.html',
  styleUrls: ['./add-team-member.component.css']
})
export class AddTeamMemberComponent {

  teamMember = {};


   constructor(public activeModal: NgbActiveModal, private factory: TeammemberfactoryService) {}

   addTeamMember(){
     console.log(this.teamMember);
     this.factory.add(this.teamMember)
     .subscribe(response => {
        console.log(response);
     })
   }


}
