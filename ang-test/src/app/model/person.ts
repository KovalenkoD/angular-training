import {Email} from "./email";

export class Person {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  emails: Email[];


  constructor(firstName: string, lastName: string, dateOfBirth: Date, emails: Email[]) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.emails = emails;
  }
}
