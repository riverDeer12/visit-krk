import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { SightTypes } from 'src/app/shared/constants/sight-types';
import * as data from '../../../assets/i18n/cro.json';
let IndustryPage = class IndustryPage {
    constructor(translate, router) {
        this.translate = translate;
        this.router = router;
        this.getLanguage();
    }
    ngOnInit() {
        this.getIndustrialHeritage();
    }
    getLanguage() {
        let currentLanguage = localStorage.getItem('language');
        this.translate.use(currentLanguage);
    }
    getIndustrialHeritage() {
        this.data = data.industrial_heritage;
        this.sights = Object.keys(this.data);
    }
    goToDetails(sight) {
        this.router.navigateByUrl('/details/' + SightTypes.INDUSTRIAL_HERITAGE + '/' + sight);
    }
};
IndustryPage = __decorate([
    Component({
        selector: 'app-industry',
        templateUrl: './industry.page.html',
        styleUrls: ['./industry.page.scss'],
    })
], IndustryPage);
export { IndustryPage };
//# sourceMappingURL=industry.page.js.map