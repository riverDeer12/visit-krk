import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CemeteriesPage } from './cemeteries.page';
const routes = [
    {
        path: '',
        component: CemeteriesPage
    }
];
let CemeteriesPageRoutingModule = class CemeteriesPageRoutingModule {
};
CemeteriesPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], CemeteriesPageRoutingModule);
export { CemeteriesPageRoutingModule };
//# sourceMappingURL=monasteries-routing.module.js.map
