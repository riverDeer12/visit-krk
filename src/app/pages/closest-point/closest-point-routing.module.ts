import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClosestPointPage } from './closest-point.page';

const routes: Routes = [
  {
    path: '',
    component: ClosestPointPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClosestPointPageRoutingModule {}
