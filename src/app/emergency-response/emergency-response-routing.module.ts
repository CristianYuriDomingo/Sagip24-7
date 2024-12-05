import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmergencyResponsePage } from './emergency-response.page';

const routes: Routes = [
  {
    path: '',
    component: EmergencyResponsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmergencyResponsePageRoutingModule {}
