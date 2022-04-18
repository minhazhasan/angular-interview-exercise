import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthStatusComponent } from './common/components/health-status/health-status.component';

const routes: Routes = [
  {
    path:'health-status', component: HealthStatusComponent
  },
  {
    path: 'flights',
    loadChildren: () => import('./modules/flights/flights.module').then(m => m.FlightsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
