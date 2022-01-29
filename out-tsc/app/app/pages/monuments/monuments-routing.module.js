import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MonumentsPage } from './monuments.page';
const routes = [
    {
        path: '',
        component: MonumentsPage
    }
];
let MonumentsPageRoutingModule = class MonumentsPageRoutingModule {
};
MonumentsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], MonumentsPageRoutingModule);
export { MonumentsPageRoutingModule };
//# sourceMappingURL=monuments-routing.module.js.map