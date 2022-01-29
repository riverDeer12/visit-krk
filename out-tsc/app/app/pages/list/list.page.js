import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { SightTypes } from 'src/app/shared/constants/sight-types';
import * as data from '../../../assets/i18n/cro.json';
let ListPage = class ListPage {
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
        this.getData();
    }
    goToDetails(sight) {
        this.router.navigateByUrl('/details/' + this.sightType + '/' + sight);
    }
    getData() {
        switch (this.sightType) {
            case SightTypes.ARCHEOLOGY_REMAINS:
                this.data = data.archeology_remains;
            case SightTypes.CHURCHES:
                this.data = data.churches;
            case SightTypes.CEMETERIES:
                this.data = data.cemeteries;
            case SightTypes.INDUSTRIAL_HERITAGE:
                this.data = data.industrial_heritage;
            case SightTypes.LIBRARIES:
                this.data = data.libraries;
            case SightTypes.LOCALITIES:
                this.data = data.localities;
            case SightTypes.MUSEUMS:
                this.data = data.museums;
            case SightTypes.PARKS:
                this.data = data.parks;
            case SightTypes.MONUMENTS:
                this.data = data.monuments;
            case SightTypes.FORTS:
                this.data = data.forts;
            case SightTypes.LOOKOUTS:
                this.data = data.lookouts;
        }
        this.sights = Object.keys(this.data);
    }
};
__decorate([
    Input()
], ListPage.prototype, "sightType", void 0);
ListPage = __decorate([
    Component({
        selector: 'app-list',
        templateUrl: './list.page.html',
        styleUrls: ['./list.page.scss'],
    })
], ListPage);
export { ListPage };
//# sourceMappingURL=list.page.js.map