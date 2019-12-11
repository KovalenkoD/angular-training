import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BaseComponentService} from "../../services/base.component.service";
import {Router} from "@angular/router";
import {Person} from "../../model/person";

@Component({
  selector: 'person-list-component',
  templateUrl: './person.list.component.html',
  styleUrls: ['./person.list.component.scss']
})
export class PersonListComponent {

  personList: Person[] = [];

  constructor(private router: Router, private baseComponentService: BaseComponentService){
    baseComponentService.personListSubject.subscribe(persons => {
      this.personList = persons;
    })
  }

  edit(id : number){
    this.router.navigate(["/person-edit", id]);
  }

}
