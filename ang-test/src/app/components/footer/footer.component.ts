import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BaseComponentService} from "../../services/base.component.service";
import {Person} from "../../model/person";

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public textFromSubject;

  public person:Person;

  constructor(private baseComponentService: BaseComponentService){
    this.person = new Person("Lenin", "Mertv", new Date(), []);
    baseComponentService.firstSubject.subscribe(value => {
      this.textFromSubject = value;
    });

    baseComponentService.secondSubject.subscribe(value => {
      console.log(value);
    })

  }

}
