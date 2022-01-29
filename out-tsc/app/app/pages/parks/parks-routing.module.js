import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ParksPage } from './parks.page';
const routes = [
    {
        path: '',
        component: ParksPage
    }
];
let ParksPageRoutingModule = class ParksPageRoutingModule {
};
ParksPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ParksPageRoutingModule);
export { ParksPageRoutingModule };
//# sourceMappingURL=parks-routing.module.js.map