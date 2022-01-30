import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { SightTypes } from 'src/app/shared/constants/sight-types';
import * as data from '../../../assets/i18n/cro.json';
let CemeteriesPage = class CemeteriesPage {
    constructor(translate, router) {
        this.translate = translate;
        this.router = router;
        this.getLanguage();
    }
    ngOnInit() {
        this.getCemeteries();
    }
    getLanguage() {
        let currentLanguage = localStorage.getItem('language');
        this.translate.use(currentLanguage);
    }
    getCemeteries() {
        this.data = data.cemeteries;
        this.sights = Object.keys(this.data);
    }
    goToDetails(sight) {
        this.router.navigateByUrl('/details/' + SightTypes.CEMETERIES + '/' + sight);
    }
};
CemeteriesPage = __decorate([
    Component({
        selector: 'app-monasteries',
        templateUrl: './monasteries.page.html',
        styleUrls: ['./monasteries.page.scss'],
    })
], CemeteriesPage);
export { CemeteriesPage };
//# sourceMappingURL=monasteries.page.js.map
