import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllergicInsectBitesPage } from './allergic-insect-bites.page';

const routes: Routes = [
  {
    path: '',
    component: AllergicInsectBitesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllergicInsectBitesPageRoutingModule {}
