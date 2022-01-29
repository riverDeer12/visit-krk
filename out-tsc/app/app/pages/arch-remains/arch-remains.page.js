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
        selector: 'app-arch-remains',
        templateUrl: './arch-remains.page.html',
        styleUrls: ['./arch-remains.page.scss'],
    })
], ArchRemainsPage);
export { ArchRemainsPage };
//# sourceMappingURL=arch-remains.page.js.map