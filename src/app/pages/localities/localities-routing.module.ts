import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalitiesPage } from './localities.page';

const routes: Routes = [
  {
    path: '',
    component: LocalitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalitiesPageRoutingModule {}
