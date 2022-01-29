import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { SightTypes } from 'src/app/shared/constants/sight-types';
import * as data from '../../../assets/i18n/cro.json';
let FortsPage = class FortsPage {
    constructor(translate, router) {
        this.translate = translate;
        this.router = router;
        this.getLanguage();
    }
    ngOnInit() {
        this.getForts();
    }
    getLanguage() {
        let currentLanguage = localStorage.getItem('language');
        this.translate.use(currentLanguage);
    }
    getForts() {
        this.data = data.forts;
        this.sights = Object.keys(this.data);
    }
    goToDetails(sight) {
        this.router.navigateByUrl('/details/' + SightTypes.FORTS + '/' + sight);
    }
};
FortsPage = __decorate([
    Component({
        selector: 'app-forts',
        templateUrl: './forts.page.html',
        styleUrls: ['./forts.page.scss'],
    })
], FortsPage);
export { FortsPage };
//# sourceMappingURL=forts.page.js.map