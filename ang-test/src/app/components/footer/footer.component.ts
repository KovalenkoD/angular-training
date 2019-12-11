import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BaseComponentService} from "../../services/base.component.service";
import {Person} from "../../model/person";

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{
  public textFromSubject;
  @Input() dsfsdfsf: string;

  public person:Person;

  constructor(private baseComponentService: BaseComponentService){

    baseComponentService.firstSubject.subscribe(value => {
      this.textFromSubject = value;
    });

    baseComponentService.secondSubject.subscribe(value => {
      console.log(value);
    })

  }

  ngOnInit(): void {
  }

}
