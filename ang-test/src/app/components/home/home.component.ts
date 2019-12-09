import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BaseComponentService} from "../../services/base.component.service";
import {Person} from "../../model/person";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  notification: number = 0;
  public person:Person;
  public personForm : FormGroup;

  constructor(private baseComponentService: BaseComponentService, private fb: FormBuilder){
    this.person = new Person("Lenin", "Mertv", new Date(), []);

    this.personForm =  this.fb.group({
      firstName: [this.person.firstName, [Validators.required]],
      lastName: [this.person.lastName],
      emails: this.fb.array([this.generateEmailsGroup()])
    });

  }

  generateEmailsGroup(){
    return this.fb.group({
          value:['testEmail'],
          primary: true
        }
      );
  }

  addEmail(){
    let emails: FormArray = <FormArray> this.personForm.get("emails");
    emails.push(this.generateEmailsGroup());
  }

  isControlValid(controlName){
    return !this.personForm.controls[controlName].valid;
  }

  submitForm(){
    console.log(this.personForm.invalid);
    this.person.firstName = this.personForm.controls['firstName'].value;
    this.person.lastName = this.personForm.controls['lastName'].value;

    let emails: any[] = this.personForm.controls['emails'].value;
    emails.forEach(email => {
      console.log(email.value);
    })
  }



  increaseCounter(){
    this.notification++;
  }

  someLatNameChange(event){

    console.log(this.personForm.invalid);
  }


}
