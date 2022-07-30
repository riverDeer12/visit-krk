import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClosestPointPageRoutingModule } from './closest-point-routing.module';

import { ClosestPointPage } from './closest-point.page';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClosestPointPageRoutingModule,
    TranslateModule
  ],
  declarations: [ClosestPointPage]
})
export class ClosestPointPageModule {}
