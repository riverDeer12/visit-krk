import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HistoryPage = class HistoryPage {
    constructor(translate) {
        this.translate = translate;
        this.slideOpts = {
            initialSlide: 1,
            speed: 400,
        };
        this.loadingData = true;
        this.getLanguage();
    }
    getLanguage() {
        let currentLanguage = localStorage.getItem('language');
        this.translate.use(currentLanguage);
    }
    ngOnInit() {
        this.loadingData = false;
    }
};
HistoryPage = __decorate([
    Component({
        selector: 'app-history',
        templateUrl: './history.page.html',
        styleUrls: ['./history.page.scss'],
    })
], HistoryPage);
export { HistoryPage };
//# sourceMappingURL=history.page.js.map