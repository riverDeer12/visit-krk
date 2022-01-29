import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AboutPage = class AboutPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    openWebsite(index) {
        let websites = [];
        websites[0] = 'http://www.krk.hr/';
        websites[1] = 'http://www.kvarner.hr/turizam';
        websites[2] = 'https://www.croatia.hr/hr-HR';
        websites[3] = 'https://www.uniri.hr/index.php?lang=hr';
        websites[4] = 'http://cib.uniri.hr/';
        this.router.navigateByUrl(websites[index]);
    }
};
AboutPage = __decorate([
    Component({
        selector: 'app-about',
        templateUrl: './about.page.html',
        styleUrls: ['./about.page.scss'],
    })
], AboutPage);
export { AboutPage };
//# sourceMappingURL=about.page.js.map