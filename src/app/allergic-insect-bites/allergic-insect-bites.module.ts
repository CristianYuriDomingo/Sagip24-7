import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllergicInsectBitesPageRoutingModule } from './allergic-insect-bites-routing.module';

import { AllergicInsectBitesPage } from './allergic-insect-bites.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllergicInsectBitesPageRoutingModule
  ],
  declarations: [AllergicInsectBitesPage]
})
export class AllergicInsectBitesPageModule {}
