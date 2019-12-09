import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BaseComponentService} from "../../services/base.component.service";
import {Person} from "../../model/person";

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  notification: number = 0;
  public person:Person;

  constructor(private baseComponentService: BaseComponentService){
    this.person = new Person("Lenin", "Mertv", new Date(), []);

  }

  increaseCounter(){
    this.notification++;
  }

  someLatNameChange(event){
    console.log(event);
  }


}
