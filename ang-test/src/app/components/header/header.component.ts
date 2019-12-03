import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'HEADER !!!';
  @Input('fromParent2') fromParent;
  @Input() someData;


  @Output() fromParent2Event: EventEmitter<string> = new EventEmitter();
  @Output() childElementSomething: EventEmitter<any> = new EventEmitter();
  @Output() childElementSomething2: EventEmitter<String> = new EventEmitter();
  name: string = "some param";
  someJson = {data: "asdas", name: "asddd", surname : "ivanov"};
  dataArray: any[] = [];

  constructor(){
    this.dataArray.push({number :1, text: "1 Data"});
    this.dataArray.push({number :2, text: "2 Data"});
    this.dataArray.push({number :3, text: "3 Data"});
    this.dataArray.push({number :4, text: "4 Data"});

  }


  headerCliked(){
    this.fromParent2Event.emit("1313123");
    this.childElementSomething.emit({data: "text2'", textData: "qwewrr"});
  }

  header2Cliked(){
    this.childElementSomething2.emit("!!!!!!!!");
  }
}
