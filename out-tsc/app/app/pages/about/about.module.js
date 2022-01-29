import { __decorate } from "tslib";
import { AboutPage } from './about.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AboutPageRoutingModule } from './about-routing.module';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function createTranslateLoader(http) {
    return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
let AboutPageModule = class AboutPageModule {
};
AboutPageModule = __decorate([
    NgModule({
        declarations: [AboutPage],
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            AboutPageRoutingModule,
            SharedModule,
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [HttpClient],
                },
            }),
        ]
    })
], AboutPageModule);
export { AboutPageModule };
//# sourceMappingURL=about.module.js.map