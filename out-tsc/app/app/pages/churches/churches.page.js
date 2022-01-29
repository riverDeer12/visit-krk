import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { SightTypes } from 'src/app/shared/constants/sight-types';
import * as data from '../../../assets/i18n/cro.json';
let ChurchesPage = class ChurchesPage {
    constructor(translate, router) {
        this.translate = translate;
        this.router = router;
        this.getLanguage();
    }
    ngOnInit() {
        this.getChurches();
    }
    getLanguage() {
        let currentLanguage = localStorage.getItem('language');
        this.translate.use(currentLanguage);
    }
    getChurches() {
        this.data = data.churches;
        this.sights = Object.keys(this.data);
    }
    goToDetails(sight) {
        this.router.navigateByUrl('/details/' + SightTypes.CHURCHES + '/' + sight);
    }
};
ChurchesPage = __decorate([
    Component({
        selector: 'app-churches',
        templateUrl: './churches.page.html',
        styleUrls: ['./churches.page.scss'],
    })
], ChurchesPage);
export { ChurchesPage };
//# sourceMappingURL=churches.page.js.map