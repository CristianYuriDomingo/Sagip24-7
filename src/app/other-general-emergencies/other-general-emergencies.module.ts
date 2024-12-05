import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherGeneralEmergenciesPageRoutingModule } from './other-general-emergencies-routing.module';

import { OtherGeneralEmergenciesPage } from './other-general-emergencies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtherGeneralEmergenciesPageRoutingModule
  ],
  declarations: [OtherGeneralEmergenciesPage]
})
export class OtherGeneralEmergenciesPageModule {}
