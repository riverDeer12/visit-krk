import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IndustryPage } from './industry.page';
const routes = [
    {
        path: '',
        component: IndustryPage
    }
];
let IndustryPageRoutingModule = class IndustryPageRoutingModule {
};
IndustryPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], IndustryPageRoutingModule);
export { IndustryPageRoutingModule };
//# sourceMappingURL=industry-routing.module.js.map