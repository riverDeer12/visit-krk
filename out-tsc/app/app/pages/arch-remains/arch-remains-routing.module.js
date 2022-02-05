import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArchRemainsPage } from './arch-remains.page';
const routes = [
    {
        path: '',
        component: ArchRemainsPage
    }
];
let ArchRemainsPageRoutingModule = class ArchRemainsPageRoutingModule {
};
ArchRemainsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ArchRemainsPageRoutingModule);
export { ArchRemainsPageRoutingModule };
//# sourceMappingURL=archeology_remains-routing.module.js.map
