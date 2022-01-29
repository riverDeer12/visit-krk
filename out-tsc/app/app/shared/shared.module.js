import { __decorate } from "tslib";
import { ListPage } from './../pages/list/list.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        exports: [ListPage],
        declarations: [SharedComponent, ListPage]
    })
], SharedModule);
export { SharedModule };
//# sourceMappingURL=shared.module.js.map