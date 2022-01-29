import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HomePage = class HomePage {
    constructor(router, translate) {
        this.router = router;
        this.translate = translate;
        this.translate.setDefaultLang('eng');
        this.translate.use('eng');
    }
    switch_language(lang) {
        this.translate.use(lang);
        localStorage.setItem('language', lang);
    }
    goToMenuPage() {
        this.router.navigateByUrl('/history');
    }
};
HomePage = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: './home.page.html',
        styleUrls: ['./home.page.scss'],
    })
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map