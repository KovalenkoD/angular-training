import { Component } from '@angular/core';

@Component({
  selector: 'app-root3',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang-test';

  parentData;

  needClick(){
    this.title = "I clicked";
  }

  somethingForResponse(data){
   this.parentData = data;
  }

}
