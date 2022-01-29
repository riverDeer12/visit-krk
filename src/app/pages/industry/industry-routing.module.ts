import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndustryPage } from './industry.page';

const routes: Routes = [
  {
    path: '',
    component: IndustryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndustryPageRoutingModule {}
