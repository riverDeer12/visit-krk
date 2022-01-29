import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryPage } from '../history/history.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryPage,
    children: [
      {
        path: 'history',
        loadChildren: () =>
          import('../history/history.module').then(
            (m) => m.HistoryPageModule
          )
      },
      {
        path: 'arch-remains',
        loadChildren: () =>
          import('../arch-remains/arch-remains.module').then(
            (m) => m.ArchRemainsPageModule
          ),
      },
      {
        path: 'cemeteries',
        loadChildren: () =>
          import('../cemeteries/cemeteries.module').then(
            (m) => m.CemeteriesPageModule
          )
      },
      {
        path: 'churches',
        loadChildren: () =>
          import('../churches/churches.module').then((m) => m.ChurchesPageModule)
      },
      {
        path: 'forts',
        loadChildren: () =>
          import('../forts/forts.module').then((m) => m.FortsPageModule)
      },
      {
        path: 'industry',
        loadChildren: () =>
          import('../industry/industry.module').then((m) => m.IndustryPageModule)
      },
      {
        path: 'libraries',
        loadChildren: () =>
          import('../libraries/libraries.module').then(
            (m) => m.LibrariesPageModule
          )
      },
      {
        path: 'localities',
        loadChildren: () =>
          import('../localities/localities.module').then(
            (m) => m.LocalitiesPageModule
          )
      },
      {
        path: 'lookouts',
        loadChildren: () =>
          import('../lookouts/lookouts.module').then((m) => m.LookoutsPageModule),
      },
      {
        path: 'monuments',
        loadChildren: () =>
          import('../monuments/monuments.module').then(
            (m) => m.MonumentsPageModule
          )
      },
      {
        path: 'museums',
        loadChildren: () =>
          import('../museums/museums.module').then((m) => m.MuseumsPageModule)
      },
      {
        path: 'parks',
        loadChildren: () =>
          import('../parks/parks.module').then((m) => m.ParksPageModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
