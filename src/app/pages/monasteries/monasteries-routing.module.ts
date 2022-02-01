import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonasteriesPage } from './monasteries.page';

const routes: Routes = [
  {
    path: '',
    component: MonasteriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonasteriesPageRoutingModule {}
