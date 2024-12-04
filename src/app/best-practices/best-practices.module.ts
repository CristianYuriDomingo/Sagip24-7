import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BestPracticesPageRoutingModule } from './best-practices-routing.module';

import { BestPracticesPage } from './best-practices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BestPracticesPageRoutingModule
  ],
  declarations: [BestPracticesPage]
})
export class BestPracticesPageModule {}
