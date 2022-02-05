import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HistoryPage} from '../history/history.page';

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
                path: 'archeology_remains',
                loadChildren: () =>
                    import('../arch-remains/arch-remains.module').then(
                        (m) => m.ArchRemainsPageModule
                    ),
            },
            {
                path: 'monasteries',
                loadChildren: () =>
                    import('../monasteries/monasteries.module').then(
                        (m) => m.MonasteriesPageModule
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
                path: 'places',
                loadChildren: () =>
                    import('../places/places.module').then(
                        (m) => m.LocalitiesPageModule
                    )
            },
            {
                path: 'ethno',
                loadChildren: () =>
                    import('../ethno/ethno.module').then(
                        (m) => m.EthnoPageModule
                    )
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MenuPageRoutingModule {
}
