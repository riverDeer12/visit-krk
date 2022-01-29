import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharePageRoutingModule } from './share-routing.module';
import { SharePage } from './share.page';
let SharePageModule = class SharePageModule {
};
SharePageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SharePageRoutingModule
        ],
        declarations: [SharePage]
    })
], SharePageModule);
export { SharePageModule };
//# sourceMappingURL=share.module.js.map