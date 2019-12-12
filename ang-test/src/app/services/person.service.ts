import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {Person} from "../model/person";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

const serverUrl = environment.url;

@Injectable()
export class PersonService {

  public personListSubject: BehaviorSubject<Person[]> = new BehaviorSubject([]);

  constructor(private httpClient: HttpClient){
  }

  getAllPersons(){
    this.httpClient.get<Person[]>(serverUrl + "persons").subscribe(persons => {
      this.personListSubject.next(persons);
    });
  }

  getById(id: number) : Observable<Person> {
    return this.httpClient.get<Person>(serverUrl + "persons/" + id );
  }


  save(person: Person) {
    return this.httpClient.put<Person>(serverUrl + "persons/", person).subscribe(person => {
      this.getAllPersons();
    });
  }
}
