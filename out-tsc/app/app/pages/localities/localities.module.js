import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LocalitiesPageRoutingModule } from './localities-routing.module';
import { LocalitiesPage } from './localities.page';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function createTranslateLoader(http) {
    return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let LocalitiesPageModule = class LocalitiesPageModule {
};
LocalitiesPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            LocalitiesPageRoutingModule,
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [HttpClient],
                },
            }),
        ],
        declarations: [LocalitiesPage]
    })
], LocalitiesPageModule);
export { LocalitiesPageModule };
//# sourceMappingURL=localities.module.js.map