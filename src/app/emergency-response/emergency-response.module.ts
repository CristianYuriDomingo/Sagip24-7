import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmergencyResponsePageRoutingModule } from './emergency-response-routing.module';

import { EmergencyResponsePage } from './emergency-response.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmergencyResponsePageRoutingModule
  ],
  declarations: [EmergencyResponsePage]
})
export class EmergencyResponsePageModule {}
