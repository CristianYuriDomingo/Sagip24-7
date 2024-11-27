import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherGeneralEmergenciesPage } from './other-general-emergencies.page';

const routes: Routes = [
  {
    path: '',
    component: OtherGeneralEmergenciesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherGeneralEmergenciesPageRoutingModule {}
