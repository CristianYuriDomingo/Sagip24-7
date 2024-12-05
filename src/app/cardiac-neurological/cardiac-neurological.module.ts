import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardiacNeurologicalPageRoutingModule } from './cardiac-neurological-routing.module';

import { CardiacNeurologicalPage } from './cardiac-neurological.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardiacNeurologicalPageRoutingModule
  ],
  declarations: [CardiacNeurologicalPage]
})
export class CardiacNeurologicalPageModule {}
