import { Component } from '@angular/core';
import {BaseComponentService} from "./services/base.component.service";

@Component({
  selector: 'app-root3',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang-test';

  parentData;

  constructor(private baseComponentService: BaseComponentService){
    baseComponentService.firstSubject.subscribe(someValue => {
      this.title = someValue;
    });
  }

  needClick(){
    this.title = "I clicked";
  }

  somethingForResponse(data){
   this.parentData = data;
  }

}
