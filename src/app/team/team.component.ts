import { Component, OnInit } from '@angular/core';
import { TeammemberfactoryService } from '../service/teammemberfactory/teammemberfactory.service';
import { FormsModule} from '@angular/forms';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { AddTeamMemberComponent } from '../add-team-member/add-team-member.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  employees;
  selectedEmployee;
  isDataLoaded = false;
  edit = false;
  constructor(private service: TeammemberfactoryService, private modalService: NgbModal) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(response => {
        this.employees = response.json();
        this.selectedEmployee = this.employees[1];
        this.isDataLoaded = true;
      });
  }

  selectEmployee(employee) {
    this.selectedEmployee = employee;
  }

  isSelected(employee): boolean {
    if (employee._id == this.selectedEmployee._id)
      return true;
    else
      return false;
  }

  open() {
    const modalRef = this.modalService.open(AddTeamMemberComponent);
  }
}
