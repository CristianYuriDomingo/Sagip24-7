import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BestPracticesPage } from './best-practices.page';

const routes: Routes = [
  {
    path: '',
    component: BestPracticesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BestPracticesPageRoutingModule {}
