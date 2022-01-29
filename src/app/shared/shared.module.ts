import { ListPage } from './../pages/list/list.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ListPage],
  declarations: [SharedComponent, ListPage]
})
export class SharedModule { }
