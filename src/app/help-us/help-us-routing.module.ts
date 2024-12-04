import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpUsPage } from './help-us.page';

const routes: Routes = [
  {
    path: '',
    component: HelpUsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpUsPageRoutingModule {}
