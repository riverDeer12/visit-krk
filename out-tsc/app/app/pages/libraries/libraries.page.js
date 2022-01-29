import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { SightTypes } from 'src/app/shared/constants/sight-types';
import * as data from '../../../assets/i18n/cro.json';
let LibrariesPage = class LibrariesPage {
    constructor(translate, router) {
        this.translate = translate;
        this.router = router;
        this.getLanguage();
    }
    ngOnInit() {
        this.getLibraries();
    }
    getLanguage() {
        let currentLanguage = localStorage.getItem('language');
        this.translate.use(currentLanguage);
    }
    getLibraries() {
        this.data = data.libraries;
        this.sights = Object.keys(this.data);
    }
    goToDetails(sight) {
        this.router.navigateByUrl('/details/' + SightTypes.LIBRARIES + '/' + sight);
    }
};
LibrariesPage = __decorate([
    Component({
        selector: 'app-libraries',
        templateUrl: './libraries.page.html',
        styleUrls: ['./libraries.page.scss'],
    })
], LibrariesPage);
export { LibrariesPage };
//# sourceMappingURL=libraries.page.js.map