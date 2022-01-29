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
    path: 'archeology_remains',
    loadChildren: () =>
      import('./pages/arch-remains/arch-remains.module').then(
        (m) => m.ArchRemainsPageModule
      ),
  },
  {
    path: 'cemeteries',
    loadChildren: () =>
      import('./pages/cemeteries/cemeteries.module').then(
        (m) => m.CemeteriesPageModule
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
    path: 'industrial_heritage',
    loadChildren: () =>
      import('./pages/industry/industry.module').then(
        (m) => m.IndustryPageModule
      ),
  },
  {
    path: 'libraries',
    loadChildren: () =>
      import('./pages/libraries/libraries.module').then(
        (m) => m.LibrariesPageModule
      ),
  },
  {
    path: 'localities',
    loadChildren: () =>
      import('./pages/localities/localities.module').then(
        (m) => m.LocalitiesPageModule
      ),
  },
  {
    path: 'lookouts',
    loadChildren: () =>
      import('./pages/lookouts/lookouts.module').then(
        (m) => m.LookoutsPageModule
      ),
  },
  {
    path: 'monuments',
    loadChildren: () =>
      import('./pages/monuments/monuments.module').then(
        (m) => m.MonumentsPageModule
      ),
  },
  {
    path: 'museums',
    loadChildren: () =>
      import('./pages/museums/museums.module').then((m) => m.MuseumsPageModule),
  },
  {
    path: 'parks',
    loadChildren: () =>
      import('./pages/parks/parks.module').then((m) => m.ParksPageModule),
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
