import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { SightTypes } from 'src/app/shared/constants/sight-types';
import * as data from '../../../assets/i18n/cro.json';
let MonumentsPage = class MonumentsPage {
    constructor(translate, router) {
        this.translate = translate;
        this.router = router;
        this.getLanguage();
    }
    ngOnInit() {
        this.getMonuments();
    }
    getLanguage() {
        let currentLanguage = localStorage.getItem('language');
        this.translate.use(currentLanguage);
    }
    getMonuments() {
        this.data = data.monuments;
        this.sights = Object.keys(this.data);
    }
    goToDetails(sight) {
        this.router.navigateByUrl('/details/' + SightTypes.MONUMENTS + '/' + sight);
    }
};
MonumentsPage = __decorate([
    Component({
        selector: 'app-monuments',
        templateUrl: './monuments.page.html',
        styleUrls: ['./monuments.page.scss'],
    })
], MonumentsPage);
export { MonumentsPage };
//# sourceMappingURL=monuments.page.js.map