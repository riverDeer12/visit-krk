import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LookoutsPage } from './lookouts.page';

const routes: Routes = [
  {
    path: '',
    component: LookoutsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LookoutsPageRoutingModule {}
