import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EthnoPage } from './ethno.page';

const routes: Routes = [
  {
    path: '',
    component: EthnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EthnoPageRoutingModule {}
