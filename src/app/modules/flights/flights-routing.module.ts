import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsStatusComponent } from './flights-status/flights-status.component';

const routes: Routes = [
  {
    path:'', component: FlightsStatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightsRoutingModule { }