import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { SightTypes } from 'src/app/shared/constants/sight-types';
import * as data from '../../../assets/i18n/cro.json';
let ParksPage = class ParksPage {
    constructor(translate, router) {
        this.translate = translate;
        this.router = router;
        this.getLanguage();
    }
    ngOnInit() {
        this.getParks();
    }
    getLanguage() {
        let currentLanguage = localStorage.getItem('language');
        this.translate.use(currentLanguage);
    }
    getParks() {
        this.data = data.parks;
        this.sights = Object.keys(this.data);
    }
    goToDetails(sight) {
        this.router.navigateByUrl('/details/' + SightTypes.PARKS + '/' + sight);
    }
};
ParksPage = __decorate([
    Component({
        selector: 'app-parks',
        templateUrl: './parks.page.html',
        styleUrls: ['./parks.page.scss'],
    })
], ParksPage);
export { ParksPage };
//# sourceMappingURL=parks.page.js.map