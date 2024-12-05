import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnvironmentalEmergenciesPageRoutingModule } from './environmental-emergencies-routing.module';

import { EnvironmentalEmergenciesPage } from './environmental-emergencies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnvironmentalEmergenciesPageRoutingModule
  ],
  declarations: [EnvironmentalEmergenciesPage]
})
export class EnvironmentalEmergenciesPageModule {}
