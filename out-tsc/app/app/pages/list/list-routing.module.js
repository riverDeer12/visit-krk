import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListPage } from './list.page';
const routes = [
    {
        path: '',
        component: ListPage
    }
];
let ListPageRoutingModule = class ListPageRoutingModule {
};
ListPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ListPageRoutingModule);
export { ListPageRoutingModule };
//# sourceMappingURL=list-routing.module.js.map