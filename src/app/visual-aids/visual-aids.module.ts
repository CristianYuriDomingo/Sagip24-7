import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualAidsPageRoutingModule } from './visual-aids-routing.module';

import { VisualAidsPage } from './visual-aids.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualAidsPageRoutingModule
  ],
  declarations: [VisualAidsPage]
})
export class VisualAidsPageModule {}
