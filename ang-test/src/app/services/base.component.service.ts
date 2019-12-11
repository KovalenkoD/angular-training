import {Injectable} from "@angular/core";
import {BehaviorSubject, Subject} from "rxjs";
import {Person} from "../model/person";

@Injectable()
export class BaseComponentService {
  public firstSubject: Subject<string> = new Subject();
  public secondSubject: BehaviorSubject<string> = new BehaviorSubject("testBehavior");

  public personListSubject: BehaviorSubject<Person[]> = new BehaviorSubject([]);

  constructor(){
    let persons = [];
    persons.push(new Person(1, "nameA", "nameA", new Date(), []));
    persons.push(new Person(2, "nameB", "nameB", new Date(), []));
    persons.push(new Person(3, "nameC", "nameC", new Date(), []));
    persons.push(new Person(4, "nameD", "nameD", new Date(), []));
    persons.push(new Person(5, "nameE", "nameE", new Date(), []));
    this.personListSubject.next(persons);
  }

  editPerson(person: Person){
    let persons = this.personListSubject.getValue();
    let oldPerson = persons.find(personInDB => personInDB.id == person.id);
    oldPerson.firstName = person.firstName;
    oldPerson.lastName = person.lastName;
    oldPerson.emails = person.emails;

    this.personListSubject.next(persons);

  }

  getPersonById(id: number){
    let persons = this.personListSubject.getValue();
    let person = persons.find(personInDB => personInDB.id == id);
    return person;
  }


}
