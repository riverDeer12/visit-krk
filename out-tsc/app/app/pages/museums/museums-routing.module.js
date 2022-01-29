import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MuseumsPage } from './museums.page';
const routes = [
    {
        path: '',
        component: MuseumsPage
    }
];
let MuseumsPageRoutingModule = class MuseumsPageRoutingModule {
};
MuseumsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], MuseumsPageRoutingModule);
export { MuseumsPageRoutingModule };
//# sourceMappingURL=museums-routing.module.js.map