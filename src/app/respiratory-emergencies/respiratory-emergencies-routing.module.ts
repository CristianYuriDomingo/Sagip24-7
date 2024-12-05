import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespiratoryEmergenciesPage } from './respiratory-emergencies.page';

const routes: Routes = [
  {
    path: '',
    component: RespiratoryEmergenciesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespiratoryEmergenciesPageRoutingModule {}
