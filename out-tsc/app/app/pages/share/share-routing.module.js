import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharePage } from './share.page';
const routes = [
    {
        path: '',
        component: SharePage
    }
];
let SharePageRoutingModule = class SharePageRoutingModule {
};
SharePageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], SharePageRoutingModule);
export { SharePageRoutingModule };
//# sourceMappingURL=share-routing.module.js.map