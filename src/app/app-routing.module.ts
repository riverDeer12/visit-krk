import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'history',
    loadChildren: () =>
      import('./pages/history/history.module').then((m) => m.HistoryPageModule),
  },
  {
    path: 'closest-point',
    loadChildren: () =>
      import('./pages/closest-point/closest-point.module').then((m) => m.ClosestPointPageModule),
  },
  {
    path: 'archeology_remains',
    loadChildren: () =>
      import('./pages/arch-remains/arch-remains.module').then(
        (m) => m.ArchRemainsPageModule
      ),
  },
  {
    path: 'monasteries',
    loadChildren: () =>
      import('./pages/monasteries/monasteries.module').then(
        (m) => m.MonasteriesPageModule
      ),
  },
  {
    path: 'churches',
    loadChildren: () =>
      import('./pages/churches/churches.module').then(
        (m) => m.ChurchesPageModule
      ),
  },
  {
    path: 'forts',
    loadChildren: () =>
      import('./pages/forts/forts.module').then((m) => m.FortsPageModule),
  },
  {
    path: 'places',
    loadChildren: () =>
      import('./pages/places/places.module').then(
        (m) => m.LocalitiesPageModule
      ),
  },
  {
    path: 'ethno',
    loadChildren: () =>
        import('./pages/ethno/ethno.module').then(
            (m) => m.EthnoPageModule
        ),
  },
  {
    path: 'details/:sightType/:sight',
    loadChildren: () =>
      import('./pages/details/details.module').then((m) => m.DetailsPageModule),
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./pages/list/list.module').then((m) => m.ListPageModule),
  },
  {
    path: 'share',
    loadChildren: () =>
      import('./pages/share/share.module').then((m) => m.SharePageModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutPageModule),
  },
  {
    path: 'tours',
    loadChildren: () =>
      import('./pages/tours/tours.module').then((m) => m.ToursPageModule),
  },
  {
    path: 'closest-point',
    loadChildren: () => import('./pages/closest-point/closest-point.module').then(m => m.ClosestPointPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
