import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FortsPage } from './forts.page';

const routes: Routes = [
  {
    path: '',
    component: FortsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FortsPageRoutingModule {}
