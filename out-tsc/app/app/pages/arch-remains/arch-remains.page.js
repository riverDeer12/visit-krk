import { __decorate } from "tslib";
import { SightTypes } from './../../shared/constants/sight-types';
import { Component } from '@angular/core';
import * as data from '../../../assets/i18n/cro.json';
let ArchRemainsPage = class ArchRemainsPage {
    constructor(translate, router) {
        this.translate = translate;
        this.router = router;
        this.getLanguage();
    }
    ngOnInit() {
        this.getSights();
    }
    getLanguage() {
        let currentLanguage = localStorage.getItem('language');
        this.translate.use(currentLanguage);
    }
    getSights() {
        this.data = data.archeology_remains;
        this.sights = Object.keys(this.data);
    }
    goToDetails(sight) {
        this.router.navigateByUrl('/details/' + SightTypes.ARCHEOLOGY_REMAINS + '/' + sight);
    }
};
ArchRemainsPage = __decorate([
    Component({
        selector: 'app-archeology_remains',
        templateUrl: './archeology_remains.page.html',
        styleUrls: ['./archeology_remains.page.scss'],
    })
], ArchRemainsPage);
export { ArchRemainsPage };
//# sourceMappingURL=archeology_remains.page.js.map
