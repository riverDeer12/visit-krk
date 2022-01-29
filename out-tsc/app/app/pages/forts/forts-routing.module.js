import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FortsPage } from './forts.page';
const routes = [
    {
        path: '',
        component: FortsPage
    }
];
let FortsPageRoutingModule = class FortsPageRoutingModule {
};
FortsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], FortsPageRoutingModule);
export { FortsPageRoutingModule };
//# sourceMappingURL=forts-routing.module.js.map