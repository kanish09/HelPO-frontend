import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { ConsultComponent } from './components/consult/consult.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MedicinesComponent } from './components/medicines/medicines.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'consult',component:ConsultComponent},
  {path:'medicines',component:MedicinesComponent},
  {path:'test',component:TestComponent},
  {path:'chat',component:ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
