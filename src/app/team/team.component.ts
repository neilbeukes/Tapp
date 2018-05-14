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
  isDataLoaded = false;
  edit = false;
  constructor(private service: TeammemberfactoryService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(response => {
        this.employees = response.json();
        this.selectedEmployee = this.employees[2];
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

}
