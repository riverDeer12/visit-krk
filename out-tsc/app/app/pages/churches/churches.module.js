import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChurchesPageRoutingModule } from './churches-routing.module';
import { ChurchesPage } from './churches.page';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from 'src/app/shared/shared.module';
export function createTranslateLoader(http) {
    return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let ChurchesPageModule = class ChurchesPageModule {
};
ChurchesPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ChurchesPageRoutingModule,
            SharedModule,
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [HttpClient],
                },
            }),
        ],
        declarations: [ChurchesPage]
    })
], ChurchesPageModule);
export { ChurchesPageModule };
//# sourceMappingURL=churches.module.js.map