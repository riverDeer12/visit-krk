import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { SightTypes } from 'src/app/shared/constants/sight-types';
import * as data from '../../../assets/i18n/cro.json';
let LookoutsPage = class LookoutsPage {
    constructor(translate, router) {
        this.translate = translate;
        this.router = router;
        this.getLanguage();
    }
    ngOnInit() {
        this.getLookouts();
    }
    getLanguage() {
        let currentLanguage = localStorage.getItem('language');
        this.translate.use(currentLanguage);
    }
    getLookouts() {
        this.data = data.lookouts;
        this.sights = Object.keys(this.data);
    }
    goToDetails(sight) {
        this.router.navigateByUrl('/details/' + SightTypes.LOOKOUTS + '/' + sight);
    }
};
LookoutsPage = __decorate([
    Component({
        selector: 'app-lookouts',
        templateUrl: './lookouts.page.html',
        styleUrls: ['./lookouts.page.scss'],
    })
], LookoutsPage);
export { LookoutsPage };
//# sourceMappingURL=lookouts.page.js.map