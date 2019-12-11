import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonListComponent} from "./components/person-list/person.list.component";
import {PersonEditComponent} from "./components/person-edit/person.edit.component";

const routes: Routes = [
  { path: 'person-list', component: PersonListComponent },
  { path: 'person-edit/:id', component: PersonEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
