import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BaseComponentService} from "../../services/base.component.service";
import {Router} from "@angular/router";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentUser: any;

  constructor(private router: Router){

  }

  logOut(){
  //  this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
