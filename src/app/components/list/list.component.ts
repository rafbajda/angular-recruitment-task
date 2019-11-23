import { Component } from '@angular/core';
import {ListService} from '../../services/list.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-list',
  template: `
    <div class="list-container">
      <span class="list-title">Employees: </span>
      <ul>
        <li *ngFor="let employee of (listService.employees$ | async)">{{employee.name}}</li>
      </ul>
      <form [formGroup]="employeeForm">
        <input type="text" formControlName="name"/>
        <button (click)="onAddEmployeeClick()">Add</button>
      </form>
    </div>
  `,
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  employeeForm: FormGroup = new FormGroup({
    name: new FormControl(undefined)
  });

  constructor(private listService: ListService) {}

  onAddEmployeeClick() {
    const name = this.employeeForm.get('name').value;
    this.listService.addNewEmployee(name);
  }
}
