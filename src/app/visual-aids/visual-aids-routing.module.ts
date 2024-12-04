import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualAidsPage } from './visual-aids.page';

const routes: Routes = [
  {
    path: '',
    component: VisualAidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualAidsPageRoutingModule {}
