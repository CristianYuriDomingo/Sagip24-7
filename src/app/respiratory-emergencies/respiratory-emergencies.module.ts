import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespiratoryEmergenciesPageRoutingModule } from './respiratory-emergencies-routing.module';

import { RespiratoryEmergenciesPage } from './respiratory-emergencies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespiratoryEmergenciesPageRoutingModule
  ],
  declarations: [RespiratoryEmergenciesPage]
})
export class RespiratoryEmergenciesPageModule {}
