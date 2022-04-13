import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultComponent } from './components/consult/consult.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'consult',component:ConsultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
