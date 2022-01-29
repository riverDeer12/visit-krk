import { __decorate } from "tslib";
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ArchRemainsPageRoutingModule } from './arch-remains-routing.module';
import { ArchRemainsPage } from './arch-remains.page';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function createTranslateLoader(http) {
    return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let ArchRemainsPageModule = class ArchRemainsPageModule {
};
ArchRemainsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ArchRemainsPageRoutingModule,
            SharedModule,
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [HttpClient],
                },
            }),
        ],
        declarations: [ArchRemainsPage]
    })
], ArchRemainsPageModule);
export { ArchRemainsPageModule };
//# sourceMappingURL=arch-remains.module.js.map