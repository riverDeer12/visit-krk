import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LibrariesPage } from './libraries.page';
const routes = [
    {
        path: '',
        component: LibrariesPage
    }
];
let LibrariesPageRoutingModule = class LibrariesPageRoutingModule {
};
LibrariesPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], LibrariesPageRoutingModule);
export { LibrariesPageRoutingModule };
//# sourceMappingURL=libraries-routing.module.js.map