import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
const routes = [
    {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then((m) => m.HomePageModule),
    },
    {
        path: 'folder/:id',
        loadChildren: () => import('./folder/folder.module').then((m) => m.FolderPageModule),
    },
    {
        path: 'history',
        loadChildren: () => import('./pages/history/history.module').then((m) => m.HistoryPageModule),
    },
    {
        path: 'archeology_remains',
        loadChildren: () => import('./pages/arch-remains/arch-remains.module').then((m) => m.ArchRemainsPageModule),
    },
    {
        path: 'monasteries',
        loadChildren: () => import('./pages/monasteries/monasteries.module').then((m) => m.MonasteriesPageModule),
    },
    {
        path: 'churches',
        loadChildren: () => import('./pages/churches/churches.module').then((m) => m.ChurchesPageModule),
    },
    {
        path: 'forts',
        loadChildren: () => import('./pages/forts/forts.module').then((m) => m.FortsPageModule),
    },
    {
        path: 'industrial_heritage',
        loadChildren: () => import('./pages/industry/industry.module').then((m) => m.IndustryPageModule),
    },
    {
        path: 'libraries',
        loadChildren: () => import('./pages/libraries/libraries.module').then((m) => m.LibrariesPageModule),
    },
    {
        path: 'places',
        loadChildren: () => import('./pages/localities/localities.module').then((m) => m.LocalitiesPageModule),
    },
    {
        path: 'lookouts',
        loadChildren: () => import('./pages/lookouts/lookouts.module').then((m) => m.LookoutsPageModule),
    },
    {
        path: 'monuments',
        loadChildren: () => import('./pages/monuments/monuments.module').then((m) => m.MonumentsPageModule),
    },
    {
        path: 'museums',
        loadChildren: () => import('./pages/museums/museums.module').then((m) => m.MuseumsPageModule),
    },
    {
        path: 'parks',
        loadChildren: () => import('./pages/parks/parks.module').then((m) => m.ParksPageModule),
    },
    {
        path: 'details/:sightType/:sight',
        loadChildren: () => import('./pages/details/details.module').then(m => m.DetailsPageModule)
    },
    {
        path: 'list',
        loadChildren: () => import('./pages/list/list.module').then(m => m.ListPageModule)
    },
    {
        path: 'list',
        loadChildren: () => import('./pages/list/list.module').then(m => m.ListPageModule)
    },
    {
        path: 'share',
        loadChildren: () => import('./pages/share/share.module').then(m => m.SharePageModule)
    },
    {
        path: 'about',
        loadChildren: () => import('./pages/about/about.module').then(m => m.AboutPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
        ],
        exports: [RouterModule],
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map
