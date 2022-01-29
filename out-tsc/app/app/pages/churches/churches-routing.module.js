import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChurchesPage } from './churches.page';
const routes = [
    {
        path: '',
        component: ChurchesPage
    }
];
let ChurchesPageRoutingModule = class ChurchesPageRoutingModule {
};
ChurchesPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ChurchesPageRoutingModule);
export { ChurchesPageRoutingModule };
//# sourceMappingURL=churches-routing.module.js.map