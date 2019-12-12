import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BaseComponentService} from "../../services/base.component.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Person} from "../../model/person";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Email} from "../../model/email";
import {PersonService} from "../../services/person.service";

@Component({
  selector: 'person-edit-component',
  templateUrl: './person.edit.component.html',
  styleUrls: ['./person.edit.component.scss']
})
export class PersonEditComponent implements OnInit {

  public person:Person;
  public personForm : FormGroup;

  constructor(private baseComponentService: BaseComponentService, private fb: FormBuilder, private activatedRoute: ActivatedRoute,
              private router: Router, private personService: PersonService){
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(someParameters => {
      this.personService.getById(someParameters.id).subscribe(person => {
        this.person = person;
        this.initForm();
      });
    });
  }


  initForm(){
    this.personForm =  this.fb.group({
      firstName: [this.person.firstName, [Validators.required]],
      lastName: [this.person.lastName],
      emails: this.fb.array(this.generateEmailsGroupByPeron(this.person.emails))
    });
  }

  generateEmailsGroupByPeron(emails: Email[]){
    let personEmaols = [];
    emails.forEach(email => {
      personEmaols.push(this.fb.group({
          value:email.value,
          primary: email.primary
        }
      ));
    });

     return personEmaols;
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
    this.person.firstName = this.personForm.controls['firstName'].value;
    this.person.lastName = this.personForm.controls['lastName'].value;

    let emails: any[] = this.personForm.controls['emails'].value;
    let emailObjects = [];
    emails.forEach(email => {
      emailObjects.push(new Email(email.value, email.primary));
    });
    this.person.emails = emailObjects;

    this.personService.save(this.person);
    this.router.navigate(["/person-list"], );
  }
}
