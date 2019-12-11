import {Email} from "./email";

export class Person {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  emails: Email[];


  constructor(id: number, firstName: string, lastName: string, dateOfBirth: Date, emails: Email[]) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.emails = emails;
  }
}
