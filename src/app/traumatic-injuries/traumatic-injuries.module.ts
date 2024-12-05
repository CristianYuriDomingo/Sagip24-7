import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TraumaticInjuriesPageRoutingModule } from './traumatic-injuries-routing.module';

import { TraumaticInjuriesPage } from './traumatic-injuries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TraumaticInjuriesPageRoutingModule
  ],
  declarations: [TraumaticInjuriesPage]
})
export class TraumaticInjuriesPageModule {}
