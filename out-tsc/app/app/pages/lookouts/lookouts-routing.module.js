import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LookoutsPage } from './lookouts.page';
const routes = [
    {
        path: '',
        component: LookoutsPage
    }
];
let LookoutsPageRoutingModule = class LookoutsPageRoutingModule {
};
LookoutsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], LookoutsPageRoutingModule);
export { LookoutsPageRoutingModule };
//# sourceMappingURL=lookouts-routing.module.js.map