import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { SightTypes } from 'src/app/shared/constants/sight-types';
import * as data from '../../../assets/i18n/cro.json';
let MuseumsPage = class MuseumsPage {
    constructor(translate, router) {
        this.translate = translate;
        this.router = router;
        this.getLanguage();
    }
    ngOnInit() {
        this.getMuseums();
    }
    getLanguage() {
        let currentLanguage = localStorage.getItem('language');
        this.translate.use(currentLanguage);
    }
    getMuseums() {
        this.data = data.museums;
        this.sights = Object.keys(this.data);
    }
    goToDetails(sight) {
        this.router.navigateByUrl('/details/' + SightTypes.MUSEUMS + '/' + sight);
    }
};
MuseumsPage = __decorate([
    Component({
        selector: 'app-museums',
        templateUrl: './museums.page.html',
        styleUrls: ['./museums.page.scss'],
    })
], MuseumsPage);
export { MuseumsPage };
//# sourceMappingURL=museums.page.js.map