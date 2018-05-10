import { Component, OnInit } from '@angular/core';
import { TeammemberfactoryService } from '../service/teammemberfactory/teammemberfactory.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  employees;
  selectedEmployee;
  edit = false;
  constructor() { }

  ngOnInit() {
    this.employees = TeammemberfactoryService.getTeamMembers("");
    this.selectedEmployee = this.employees[0];
  }

  selectEmployee(employee){
    this.selectedEmployee = employee;
  }

  isSelected(employee): boolean {
    if (employee.id == this.selectedEmployee.id)
      return true;
    else
      return false;
  }

}
