import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

interface IEmployee {
  id: number;
  name: string;
}

const employeeList: IEmployee[] = [
  {
    id: 0,
    name: 'Jake Peralta'
  },
  {
    id: 1,
    name: 'Terry Jeffords'
  },
  {
    id: 2,
    name: 'Charles Boyle'
  },
  {
    id: 3,
    name: 'Ray Holt'
  },
  {
    id: 4,
    name: 'Amy Santiago'
  },
  {
    id: 5,
    name: 'Rosa Diaz'
  },
];

@Injectable({
  providedIn: 'root'
})
export class ListService {
  employees$ = new BehaviorSubject<IEmployee[]>(employeeList);

  addNewEmployee(name: string) {
    const currentList = this.employees$.value;
    const newEmployee = this.createNewEmployee(name);
    this.employees$.next([...currentList, newEmployee]);
  }

  private getNewId(): number {
    const currentList = this.employees$.value;
    const ids = currentList.map(employee => employee.id);
    return Math.max(...ids);
  }

  private createNewEmployee(name: string): IEmployee {
    const id = this.getNewId();
    return {id, name};
  }
}
