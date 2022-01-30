import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor(translate, router) {
        this.translate = translate;
        this.router = router;
        this.pages = [
            {
                title: 'navigation.history',
                url: '/history',
                icon: 'assets/images/nav_icons/history.png',
            },
            {
                title: 'navigation.archeology_remains',
                url: '/archeology_remains',
                icon: 'assets/images/nav_icons/archeology_remains.png',
            },
            {
                title: 'navigation.churches',
                url: '/churches',
                icon: 'assets/images/nav_icons/churches.png',
            },
            {
                title: 'navigation.monasteries',
                url: '/cemeteries',
                icon: 'assets/images/nav_icons/monasteries.png',
            },
            {
                title: 'navigation.industrial_heritage',
                url: '/industrial_heritage',
                icon: 'assets/images/nav_icons/industrial_heritage.png',
            },
            {
                title: 'navigation.libraries',
                url: '/libraries',
                icon: 'assets/images/nav_icons/libraries.png',
            },
            {
                title: 'navigation.places',
                url: '/localities',
                icon: 'assets/images/nav_icons/places.png',
            },
            {
                title: 'navigation.museums',
                url: '/museums',
                icon: 'assets/images/nav_icons/museums.png',
            },
            {
                title: 'navigation.parks',
                url: '/parks',
                icon: 'assets/images/nav_icons/parks.png',
            },
            {
                title: 'navigation.monuments',
                url: '/monuments',
                icon: 'assets/images/nav_icons/monuments.png',
            },
            {
                title: 'navigation.forts',
                url: '/forts',
                icon: 'assets/images/nav_icons/forts.png',
            },
            {
                title: 'navigation.lookouts',
                url: '/lookouts',
                icon: 'assets/images/nav_icons/lookouts.png',
            },
        ];
        this.social = [
            {
                title: 'navigation.share',
                url: '/share',
                icon: 'assets/images/nav_icons/share.png'
            },
            {
                title: 'navigation.rate',
                url: '/rate',
                icon: 'assets/images/nav_icons/rate.png'
            },
            {
                title: 'navigation.send_mail',
                url: '/email',
                icon: 'assets/images/nav_icons/send_mail.png'
            },
        ];
        this.getLanguage();
    }
    getLanguage() {
        let currentLanguage = localStorage.getItem('language');
        if (currentLanguage == '' || currentLanguage == undefined) {
            this.router.navigateByUrl('');
        }
        else {
            this.translate.use(currentLanguage);
        }
        this.translate.use(currentLanguage);
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.scss'],
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map
