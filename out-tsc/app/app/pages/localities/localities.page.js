import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { SightTypes } from 'src/app/shared/constants/sight-types';
import * as data from '../../../assets/i18n/cro.json';
let LocalitiesPage = class LocalitiesPage {
    constructor(translate, router) {
        this.translate = translate;
        this.router = router;
        this.getLanguage();
    }
    ngOnInit() {
        this.getLocalities();
    }
    getLanguage() {
        let currentLanguage = localStorage.getItem('language');
        this.translate.use(currentLanguage);
    }
    getLocalities() {
        this.data = data.localities;
        this.sights = Object.keys(this.data);
    }
    goToDetails(sight) {
        this.router.navigateByUrl('/details/' + SightTypes.LOCALITIES + '/' + sight);
    }
};
LocalitiesPage = __decorate([
    Component({
        selector: 'app-places',
        templateUrl: './places.page.html',
        styleUrls: ['./places.page.scss'],
    })
], LocalitiesPage);
export { LocalitiesPage };
//# sourceMappingURL=places.page.js.map
