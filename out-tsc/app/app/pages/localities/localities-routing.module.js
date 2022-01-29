import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LocalitiesPage } from './localities.page';
const routes = [
    {
        path: '',
        component: LocalitiesPage
    }
];
let LocalitiesPageRoutingModule = class LocalitiesPageRoutingModule {
};
LocalitiesPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], LocalitiesPageRoutingModule);
export { LocalitiesPageRoutingModule };
//# sourceMappingURL=localities-routing.module.js.map