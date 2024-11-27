import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardiacNeurologicalPage } from './cardiac-neurological.page';

const routes: Routes = [
  {
    path: '',
    component: CardiacNeurologicalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardiacNeurologicalPageRoutingModule {}
