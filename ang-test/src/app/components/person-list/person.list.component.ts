import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BaseComponentService} from "../../services/base.component.service";
import {Router} from "@angular/router";
import {Person} from "../../model/person";
import {PersonService} from "../../services/person.service";

@Component({
  selector: 'person-list-component',
  templateUrl: './person.list.component.html',
  styleUrls: ['./person.list.component.scss']
})
export class PersonListComponent implements OnInit{


  personList: Person[] = [];

  constructor(private router: Router, private baseComponentService: BaseComponentService,
              private personsService: PersonService){
    personsService.personListSubject.subscribe(persons => {
      this.personList = persons;
    });
  }

  ngOnInit(): void {
    this.personsService.getAllPersons();
  }

  edit(id : number){
    this.router.navigate(["/person-edit", id]);
  }

}
