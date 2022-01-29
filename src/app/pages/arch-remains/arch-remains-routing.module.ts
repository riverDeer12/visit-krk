import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArchRemainsPage } from './arch-remains.page';

const routes: Routes = [
  {
    path: '',
    component: ArchRemainsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArchRemainsPageRoutingModule {}
