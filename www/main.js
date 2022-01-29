(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/IrA":
/*!*************************************************!*\
  !*** ./src/app/shared/constants/sight-types.ts ***!
  \*************************************************/
/*! exports provided: SightTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SightTypes", function() { return SightTypes; });
class SightTypes {
}
SightTypes.ARCHEOLOGY_REMAINS = "archeology_remains";
SightTypes.CHURCHES = "churches";
SightTypes.CEMETERIES = "cemeteries";
SightTypes.INDUSTRIAL_HERITAGE = "industrial_heritage";
SightTypes.LIBRARIES = "libraries";
SightTypes.LOCALITIES = "localities";
SightTypes.MUSEUMS = "museums";
SightTypes.PARKS = "parks";
SightTypes.MONUMENTS = "monuments";
SightTypes.FORTS = "forts";
SightTypes.LOOKOUTS = "lookouts";
SightTypes.TOURS = "tours";


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/riverdeer/Projects/omisalj-heritage/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "O3HO":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/list/list.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card *ngFor=\"let sight of sights\">\n  <img [src]=\"'assets/images/sights/' + sight + '_1.jpg'\" />\n  <ion-card-header>\n    <ion-card-subtitle class=\"ion-margin-bottom\">{{ 'navigation.archeology_remain' | translate }}</ion-card-subtitle>\n    <ion-card-title>{{ sightType + '.' + sight + '.title' | translate }}</ion-card-title>\n  </ion-card-header>\n  <ion-card-header class=\"ion-text-center\">\n    <ion-button (click)=\"goToDetails(sight)\" fill=\"clear\" expand=\"full\" color=\"primary\">\n      <ion-icon size=\"large\" slot=\"icon-only\" name=\"information-outline\"></ion-icon>\n      {{ 'read_more' | translate}}\n    </ion-button>\n  </ion-card-header>\n</ion-card>");

/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _pages_list_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../pages/list/list.page */ "cA8+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared.component */ "duh5");





let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
        ],
        exports: [_pages_list_list_page__WEBPACK_IMPORTED_MODULE_1__["ListPage"]],
        declarations: [_shared_component__WEBPACK_IMPORTED_MODULE_4__["SharedComponent"], _pages_list_list_page__WEBPACK_IMPORTED_MODULE_1__["ListPage"]]
    })
], SharedModule);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "/XPu");
/* harmony import */ var _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/app-rate/ngx */ "k0k6");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "aaed");









let AppComponent = class AppComponent {
    constructor(translate, router, socialSharing, appRate, emailComposer) {
        this.translate = translate;
        this.router = router;
        this.socialSharing = socialSharing;
        this.appRate = appRate;
        this.emailComposer = emailComposer;
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
                title: 'navigation.cemeteries',
                url: '/cemeteries',
                icon: 'assets/images/nav_icons/cemeteries.png',
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
                title: 'navigation.localities',
                url: '/localities',
                icon: 'assets/images/nav_icons/localities.png',
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
            {
                title: 'navigation.tours',
                url: '/tours',
                icon: 'assets/images/nav_icons/tours.png',
            },
            {
                title: 'navigation.about',
                url: '/about',
                icon: 'assets/images/nav_icons/about.png',
            },
        ];
        this.getLanguage();
    }
    share() {
        this.socialSharing
            .share('Omisalj Heritage iOS app', 'Omisalj Heritage')
            .then(() => {
            // Success!
        })
            .catch(() => {
            // Error!
        });
    }
    rate() {
        this.appRate.preferences.storeAppURL = {
            ios: '<omisalj-heritage>',
        };
        this.appRate.promptForRating(true);
    }
    sendEmail() {
        let email = {
            to: 'info@visit-omisalj-njivice.hr'
        };
        this.emailComposer.open(email);
    }
    getLanguage() {
        let currentLanguage = localStorage.getItem('language');
        if (currentLanguage == '' || currentLanguage == undefined) {
            localStorage.setItem('language', 'eng');
            this.router.navigateByUrl('');
            return;
        }
        this.translate.use(currentLanguage);
    }
};
AppComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"] },
    { type: _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_7__["AppRate"] },
    { type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_8__["EmailComposer"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n\n  <ion-split-pane contentId=\"main-content\">\n\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list class=\"ion-no-padding\" id=\"menu-list\">\n          <ion-list-header class=\"menu-header-image\"></ion-list-header>\n          <ion-note class=\"ion-padding-top\">{{'app_name' | translate }}</ion-note>\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let page of pages; let i = index\">\n            <ion-item routerDirection=\"root\" [routerLink]=\"[page.url]\" lines=\"none\" detail=\"false\"\n              routerLinkActive=\"selected\">\n              <img class=\"nav-icon\" [src]=\"page.icon\" />\n              <ion-label>{{ page.title | translate}}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n        <ion-list id=\"contact-list\">\n          <ion-note class=\"ion-padding-bottom\">{{'contact' | translate }}</ion-note>\n          <ion-menu-toggle auto-hide=\"false\">\n            <ion-item (click)=\"share()\" lines=\"none\" detail=\"false\">\n              <img class=\"nav-icon\" src=\"assets/images/nav_icons/share.png\" />\n              <ion-label>{{ 'navigation.share' | translate}}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n          <ion-menu-toggle auto-hide=\"false\">\n            <ion-item (click)=\"rate()\" lines=\"none\" detail=\"false\">\n              <img class=\"nav-icon\" src=\"assets/images/nav_icons/rate.png\" />\n              <ion-label>{{ 'navigation.rate' | translate}}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n          <ion-menu-toggle auto-hide=\"false\">\n            <ion-item (click)=\"sendEmail()\" lines=\"none\" detail=\"false\">\n              <img class=\"nav-icon\" src=\"assets/images/nav_icons/send_mail.png\" />\n              <ion-label>{{ 'navigation.send_mail' | translate}}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n\n  </ion-split-pane>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/launch-navigator/ngx */ "fGQ8");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "/XPu");
/* harmony import */ var _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/app-rate/ngx */ "k0k6");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "aaed");















function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http, "./assets/i18n/", ".json");
}
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]],
                },
            }),
        ],
        exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicRouteStrategy"] },
            _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_1__["LaunchNavigator"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_12__["SocialSharing"],
            _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_13__["AppRate"],
            _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_14__["EmailComposer"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "cA8+":
/*!*****************************************!*\
  !*** ./src/app/pages/list/list.page.ts ***!
  \*****************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_list_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./list.page.html */ "O3HO");
/* harmony import */ var _list_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.page.scss */ "ll5S");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_constants_sight_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/constants/sight-types */ "/IrA");
/* harmony import */ var _assets_i18n_cro_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/i18n/cro.json */ "lVkN");
var _assets_i18n_cro_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/i18n/cro.json */ "lVkN", 1);








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
            case src_app_shared_constants_sight_types__WEBPACK_IMPORTED_MODULE_6__["SightTypes"].ARCHEOLOGY_REMAINS:
                this.data = _assets_i18n_cro_json__WEBPACK_IMPORTED_MODULE_7__["archeology_remains"];
            case src_app_shared_constants_sight_types__WEBPACK_IMPORTED_MODULE_6__["SightTypes"].CHURCHES:
                this.data = _assets_i18n_cro_json__WEBPACK_IMPORTED_MODULE_7__["churches"];
            case src_app_shared_constants_sight_types__WEBPACK_IMPORTED_MODULE_6__["SightTypes"].CEMETERIES:
                this.data = _assets_i18n_cro_json__WEBPACK_IMPORTED_MODULE_7__["cemeteries"];
            case src_app_shared_constants_sight_types__WEBPACK_IMPORTED_MODULE_6__["SightTypes"].INDUSTRIAL_HERITAGE:
                this.data = _assets_i18n_cro_json__WEBPACK_IMPORTED_MODULE_7__["industrial_heritage"];
            case src_app_shared_constants_sight_types__WEBPACK_IMPORTED_MODULE_6__["SightTypes"].LIBRARIES:
                this.data = _assets_i18n_cro_json__WEBPACK_IMPORTED_MODULE_7__["libraries"];
            case src_app_shared_constants_sight_types__WEBPACK_IMPORTED_MODULE_6__["SightTypes"].LOCALITIES:
                this.data = _assets_i18n_cro_json__WEBPACK_IMPORTED_MODULE_7__["localities"];
            case src_app_shared_constants_sight_types__WEBPACK_IMPORTED_MODULE_6__["SightTypes"].MUSEUMS:
                this.data = _assets_i18n_cro_json__WEBPACK_IMPORTED_MODULE_7__["museums"];
            case src_app_shared_constants_sight_types__WEBPACK_IMPORTED_MODULE_6__["SightTypes"].PARKS:
                this.data = _assets_i18n_cro_json__WEBPACK_IMPORTED_MODULE_7__["parks"];
            case src_app_shared_constants_sight_types__WEBPACK_IMPORTED_MODULE_6__["SightTypes"].MONUMENTS:
                this.data = _assets_i18n_cro_json__WEBPACK_IMPORTED_MODULE_7__["monuments"];
            case src_app_shared_constants_sight_types__WEBPACK_IMPORTED_MODULE_6__["SightTypes"].FORTS:
                this.data = _assets_i18n_cro_json__WEBPACK_IMPORTED_MODULE_7__["forts"];
            case src_app_shared_constants_sight_types__WEBPACK_IMPORTED_MODULE_6__["SightTypes"].LOOKOUTS:
                this.data = _assets_i18n_cro_json__WEBPACK_IMPORTED_MODULE_7__["lookouts"];
        }
        this.sights = Object.keys(this.data);
    }
};
ListPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ListPage.propDecorators = {
    sightType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-list',
        template: _raw_loader_list_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_list_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListPage);



/***/ }),

/***/ "duh5":
/*!********************************************!*\
  !*** ./src/app/shared/shared.component.ts ***!
  \********************************************/
/*! exports provided: SharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponent", function() { return SharedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_shared_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./shared.component.html */ "vR6h");
/* harmony import */ var _shared_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared.component.css */ "xbZ7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SharedComponent = class SharedComponent {
    constructor() { }
    ngOnInit() {
    }
};
SharedComponent.ctorParameters = () => [];
SharedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-shared',
        template: _raw_loader_shared_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_shared_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SharedComponent);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "lVkN":
/*!**********************************!*\
  !*** ./src/assets/i18n/cro.json ***!
  \**********************************/
/*! exports provided: app_name, language_picker, sidebar_header_text, next, contact, back_to_quit, settings, try_again, back, refresh, please_wait, show_on_map, get_me_there, related_sights, read_more, navigation, history, closest_point_of_interest, about, archeology_remains, churches, forts, industrial_heritage, localities, libraries, parks, museums, cemeteries, monuments, lookouts, tours, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"app_name\":\"Heritage Omišalj\",\"language_picker\":{\"choose_your_language\":\"Odaberite svoj jezik\",\"english\":\"Engleski\",\"croatian\":\"Hrvatski\",\"german\":\"Njemački\",\"italian\":\"Talijanski\"},\"sidebar_header_text\":\"Heritage Omišalj\",\"next\":\"Naprijed\",\"contact\":\"Kontakt\",\"back_to_quit\":\"Kliknite NATRAG ponovno kako biste izašli iz aplikacije\",\"settings\":\"Postavke\",\"try_again\":\"Pokušajte ponovno\",\"back\":\"Natrag\",\"refresh\":\"Osvježi\",\"please_wait\":\"Molimo pričekajte...\",\"show_on_map\":\"Prikaži na karti!\",\"get_me_there\":\"Odvedi me tamo!\",\"related_sights\":\"Povezane znamenitosti:\",\"read_more\":\"Pročitaj više\",\"navigation\":{\"history\":\"Povijest\",\"closest_point_of_interest\":\"Closest point of interest\",\"archeology_remains\":\"Arheološki ostatci\",\"archeology_remain\":\"Arheološki ostatak\",\"churches\":\"Crkve\",\"church\":\"Crkva\",\"forts\":\"Utvrde\",\"fort\":\"Utvrda\",\"industrial_heritage\":\"Industrijska baština\",\"localities\":\"Lokaliteti\",\"locality\":\"Lokalitet\",\"libraries\":\"Knjižnice\",\"library\":\"Knjižnica\",\"parks\":\"Parkovi\",\"park\":\"Park\",\"museums\":\"Muzeji\",\"museum\":\"Muzej\",\"cemeteries\":\"Groblja\",\"cemetery\":\"Groblje\",\"monuments\":\"Spomenici\",\"monument\":\"Spomenik\",\"lookouts\":\"Vidikovci\",\"lookout\":\"Vidikovac\",\"tours\":\"Obilasci\",\"tour\":\"Obilazak\",\"ethnographic_collections\":\"Zavičajne zbirke\",\"ethnographic_collection\":\"Zavičajne zbirka\",\"all_sights\":\"Sve znamenitosti\",\"about\":\"O nama\",\"communication\":\"Kontakt\",\"share\":\"Podijeli\",\"rate\":\"Ocjeni\",\"send_mail\":\"Pošalji email\",\"no_email_message\":\"Nemate instaliranu aplikaciju za slanje email-a\"},\"history\":{\"title\":\"Povijest Omišlja\",\"description\":\"Dobrodošli u povijesno središte Omišlja, slikovitu i slojevitu urbanu strukturu s elementima graditeljstva srednjega vijeka, renesanse, baroka, historijskih stilova 19. i secesije ranog 20. stoljeća. Omišalj je nastao na podlozi ranijeg naselja čiji korijeni sežu u prapovijest. Prvotno stanište gradinskoga tipa branjeno jakim suho zidnim bedemima bilo je sjedište liburnske plemenske zajednice Fertinata. Stagniralo je u doba Rimskog carstva, kada se razvijao obližnji priobalni ladanjski ali i lučki grad Fulfinum, a nanovo je procvalo u doba ranog i razvijenog srednjeg vijeka. Omišalj je bio prvo među već postojećim naseljima na otoku, koje su u ranom srednjem vijeku masovnije napučili doseljeni Hrvati, ostvarujući skladan suživot s romaniziranom starosjedilačkom zajednicom. Tijekom razvijenog srednjeg vijeka bio je snažno uporište knezova Krčkih, kasnijih Frankapana, koju su pred njim i pokraj njega izgradili čak dvije snažne utvrde. Mlečani koji su Omišljem zavladali 1480. godine sasvim opravdano su ga zbog njegove strateške važnosti nazivali „ključem otoka Krka“. I danas je to jasno svakom tko uđe u povijesno središte naselja i nađe se na nekom od njegovih vidikovaca s kojih se lako mogao kontrolirati dobar dio akvatorija Kvarnerskog zaljeva. Kao nigdje drugdje na otoku Krku, u Omišlju se isprepliću odličja srednjovjekovnog i renesansnog graditeljstva s neobičnim izvan stilskim graditeljskim strukturama. Veliki smo onoliko koliko držimo do vrijednosti kojih smo baštinici, i koliko ih očuvamo za buduće naraštaje. Povežemo li povijesno umjetničke, arheološke i historiografske podatke sa specifičnostima omišaljske tradicije, govora, narodne pjesme i običaja, otkrit ćemo mnogo o burnoj povijesti ovoga dijela otoka koji je do danas ostao ključ otoka Krka.\"},\"closest_point_of_interest\":{\"closest_sight\":\"Najbliža lokacija\",\"closest_tour\":\"Najbliži obilazak\",\"no_navigation_alert\":\"Navigacijska aplikacija nije dostupna\",\"no_internet\":{\"title\":\"Nemate internet pristup!\",\"description\":\"Ova funkcionalnost zahtjeva internet pristup.\"},\"location_permission\":{\"title\":\"Dopuštenje za lokaciju je potrebno!\",\"description\":\"Ova funkcionalnost zahtjeva dopuštenje za lokaciju.\"},\"gps\":{\"title\":\"GPS nije uključen\",\"description\":\"Ova funkcionalnost zahtjeva GPS.\"}},\"about\":{\"title\":\"Heritage Omišalj\",\"description\":\"<b>Naručitelj:</b> TZO OMIŠALJ<br><br><b>Voditelj projekta:</b> Kristina Pandža<br><br><b>Text:</b> TZO OMIŠALJ<br><br><b>Lektura i korekcije:</b> Adverbum d.o.o.<br><br><b>Prijevod na engleski:</b> Adverbum d.o.o.<br><br><b>Prijevod na njemački:</b> Adverbum d.o.o.<br><br><b>Prijevod na talijanski:</b> Adverbum d.o.o.<br><br><b>Fotografija:</b> Luka Tabako, Srđan Hulak, Sanjin Ilić<br><br><b>Razvoj web stranice:</b> Ljiljana Brusić<br><br><b>Razvoj mobilne aplikacije:</b> R.D.D.\"},\"archeology_remains\":{\"glagolitic_inscription\":{\"title\":\"Glagoljski natpis – nadvratnik portala, uzidan u kući Veli dvor 11\",\"description\":\"<b>Glagoljski natpis Matije Franovića iz 1535. godine.</b><br><br>Glagoljski natpis upisan je u medaljonu uokolo križa na kamenom bloku uzidanom pri dnu pročelja obiteljske kuće. Natpis spominje svećenika Matiju Franovića i godinu 1535. Izvorno se, naravno, nije nalazio na ovom neuglednom mjestu. Kameni blok je bio nadvratnik portala svećenikove kuće a vlasnik je, kako je u vrijeme renesanse bilo uobičajeno, dovršetak izgradnje obilježio natpisom i križem koji je imao i apotropejsku funkciju odbijanja svakog zla od praga vlasnikove kuće. Nigdje na svijetu nema toliko sačuvanih glagoljskih natpisa na kamenu kao u gradićima na otoku Krku. Natpisi svjedoče o raširenoj pismenosti među pučanima otoka Krka. Nositelj glagoljske pismenosti bilo je brojno svećenstvo kaptola krčkih gradića, Omišlja, Dobrinja, Vrbnika i Baške koji su se tada zvali kaštelima.\",\"numberOfImages\":2,\"latitude\":45.212041,\"longitude\":14.552886},\"klancina\":{\"title\":\"Klančina\",\"description\":\"<b>Posljednja izvorna kamenom opločena ulica u Omišlju.</b><br><br>Ulica se stoljećima oblikovala uokolo udoline nastale erozijom uslijed djelovanja vodene bujice. Nalazi se u južnom dijelu omišaljske povijesne jezgre. Opločena je škrilom tj. prirodnim kamenim pločama, kamenom lomljencem i priklesanim kvadrima složenim u središnji niz.\",\"numberOfImages\":1,\"latitude\":45.211217,\"longitude\":14.554656},\"loza\":{\"title\":\"Loža\",\"description\":\"<b>Omišaljska javna građevina s kontinuitetom iz doba renesanse.</b><br><br>U vrijeme renesanse na Placi se nalazila gradska loža. U njoj su i pred njom Omišljani trgovali, vijećali i izabirali predstavnike u zajednička upravna tijela u okvirima autonomnih ovlasti koje je omišaljska općina kao zajednica slobodnih pučana imala i u vrijeme vlasti knezova Krčkih kao i u vrijeme vlasti Mletačke Republike. U njoj se obavljao težak izbor onih koji su morali služiti na mletačkim galijama, toj okosnici snage Mletačke Republike. Loža je pregrađena početkom 20. stoljeća. Danas je u njoj smještena Malakološka zbirka Omišalj, uspostavljena 2011. godine u suradnji sa stručnjacima Prirodoslovnog muzeja iz Rijeke. Kolekciju od 675 primjeraka puževa, školjkaša i glavonožaca Općini je darovala dr. Branka Hameder Isensee, rodom iz Vukovara. Kolekcija simbolički podsjeća i na jednu pretpostavku o imenu Omišlja, koje je prema dijelu stručnjaka nastalo kroatiziranjem srednjovjekovnoga latinskoga imena a musclu, u značenju Ad musculum u klasičnom latinskom, dakle mjesta kod sitnih školjki ili dagnji.\",\"numberOfImages\":1,\"latitude\":45.211807,\"longitude\":14.553792},\"pancirov\":{\"title\":\"Panćirov\",\"description\":\"<b>Zavojita ulica u jugoistočnom dijelu omišaljske povijesne jezgre.</b><br><br>U prošlosti je ova stara omišaljska ulica bila vrlo karakteristična po tradicijski oblikovanim, složenim višekatnim lučnim konstrukcijama s terasama i vanjskim stubištima pred pročeljima kuća.\",\"numberOfImages\":1,\"latitude\":45.211308,\"longitude\":14.553835},\"mirine_fulfinum_basilica\":{\"title\":\"Mirine Fulfinum – Bazilika\",\"description\":\"<b>Na periferiji grada, sredinom 5. stoljeća gradi se crkva na Mirinama. Riječ je o jednobrodnoj, longitudinalnoj bazilici čiji je temeljni oblik latinski križ.</b><br><br>Bazilika je sačuvana do visine krovišta i jedini je sačuvani sakralni objekt toga tipa ne samo na otoku Krku, nego i u cijelome Hrvatskom primorju.<br><br>S tom crkvom na ruševinama rimskoga grada Fulfinuma počeo je nicati novi kršćanski grad, no, njegove tajne stručnjaci tek trebaju otkriti. Lokalna tradicija crkvu povezuje s glagoljaškom benediktinskom opatijom Sv. Nikole, napuštenom u 15. stoljeću i preseljenom bliže Omišlju.<br><br>Radi se zaista o impozantnoj jednobrodnoj crkvenoj građevini. U izvornoj fazi gradnje posjedovala je u pročelju predvorje – narteks ili vestibul, trijem na južnoj strani, te dvije manje pobočne prostorije – preteče sakristiji – spojene sa ziđem svetišta. Samo svetište jednostavnog je oblika: začelje je ravno, a u njega je upisana slobodnostojeća klupa za svećenstvo. Pred klupom stoji dio svetišta zatvoren oltarnom pregradom, koji u svom središtu čuva oltarni grob u obliku križa. U prostoru predvorja, ukopan u živu stijenu i zaliven podnicom od žbuke, pronađen je sarkofag. Uz sarkofag naknadno je smješten i privilegiran grob s dva pokojnika, datiran u razdoblje između 7. i 8. stoljeća.<br><br>Vjerojatno je u isto vrijeme južnom trijemu nadozidan i atrij, koji u svojim krakovima također posjeduje nekoliko privilegiranih grobnica. Ova će se zajednica razviti kroz stoljeća koja slijede u dobro organiziranu redovničku zajednicu koja će preuzeti učenje svetog Benedikta, kako govore kasniji izvori koji spominju opatiju Svetog Nikole podno Omišlja. Unutar ovog samostanskog kompleksa, uz crkvu koja doživljava preinake prostora i iznutra, nalaze se sa istočne strane manji objekti, memorijalnog, pa zatim i gospodarskog karaktera.\",\"numberOfImages\":3,\"latitude\":45.2039264,\"longitude\":14.5425719},\"mirine_fulfinum_sarcophagus\":{\"title\":\"Mirine Fulfinum - Sarkofag\",\"description\":\"<b>U predvorju bazilike je pronađen sarkofag položen u šupljinu uklesanu u stijeni, koji nikada nije otvaran, a kasnije je u okolici pronađeno još grobnica.</b><br><br>Prilikom čišćenja predvorja bazilike, ispod goleme količine kamena pronađen je sarkofag in situ, vrlo rijetka dragocjenost tog kompleksa. Sarkofag, s originalnim poklopcem, stoji na svom mjestu otkad je postavljen, ukopan ispod crkve. Bez oskvrnjivanja groba, mikro kamerom je otkriveno da se unutra nalaze dva pokojnika.\",\"numberOfImages\":2,\"latitude\":45.2039609,\"longitude\":14.54291},\"mirine_fulfinum_forum\":{\"title\":\"Mirine Fulfinum - Forum\",\"description\":\"<b>Kao i svaki rimski grad Municipium Flavium Fulfinum posjedovao je u samom svom središtu FORUM – glavni gradski trg gdje su se susretale one glavne funkcije urbane sredine rimskog svijeta: političke, ekonomske, religijske i društvene.</b><br><br>Fulfinski forum nalazi se na krajnjem sjeverozapadnom dijelu grada, uz rub jedne od glavnih prometnica koja je tekla u gotovo pravocrtnoj liniji prateći orijentaciju obale kroz prostor čitavog naselja, pa vjerojatno i dalje u smjeru Krka, preko lokaliteta Mohorov i Njivice.<br><br>Glavni gradski trg očito je posjedovao sve one zgrade koje su bile potrebne za osnovno funkcioniranje grada, prema rimskom predlošku. Tako je u razvijenoj fazi datiranoj u kraj 1. st. poslije Krista u svom središnjem dijelu, ali povučen uz sjeverozapadni rub forumskog prostora koji je zauzimao 1300 m2, stajao glavni forumski hram, posvećen ili kapitolinskoj trijadi, odnosno trima glavnim božanstvima rimske religije Jupiteru, Junoni i Minervi, ili moguće rimskim carevima.<br><br>Hram jednostavnog izgleda, sa samo četiri stupa u pročelju i jednostavnom unutarnjom celom podignutom na visinu od otprilike jednog metra ponad hodne površine forumskog zrcala, bio je okružen posvećenim prostorom kojeg su tvorili obodni zidovi foruma zapadne i sjeverne strane te zid trijema s istočne. Uz zapadnu, dužu stranicu foruma tekao je niz prostorija – taverni – u koje se zacijelo nije moglo ući izravno s foruma, već sa suprotne strane okrenute moru. U istočnom dijelu foruma smjestila se se vrlo dugačka građevina sa svega tri omanje prostorije u svom sjevernom dijelu, kojima je prethodilo veliko unutarnje otvoreno dvorište omeđeno dvama trijemovima. U spomenuti prostor moglo se ući vratima otvorenima u zidu koji je omeđavao prostor forumskog zrcala s te strane. Naposljetku, ulaz u forumski prostor bio je označen portikom nad kojim je stajao natpis posvetnog karaktera.<br><br>Forum grada Fulfinuma doživjeti će veće preinake u 3. stoljeću, uređenjem intimnog trga sa sjeveroistočne strane glavnog hrama, u čijoj je sredini pronađena zidana baza u kojoj je zasigurno stajao spomenik – statua ili natpis – kojem se nažalost u potpunosti izgubio trag. U razdoblju prije konačnog napuštanja foruma, pa i samog grada, određeni su prostori bili privatizirani. Na forumu, simbolu javnog prostora rimskog grada pojavljuju se lake, drvane konstrukcije koje dokazuju gubljenje prvotne funkcije trga.\",\"numberOfImages\":7,\"latitude\":45.2030764,\"longitude\":14.5445837},\"mirine_fulfinum_comb\":{\"title\":\"Mirinski češalj\",\"description\":\"<b>Na arheološkom nalazištu kod drvenog mosta pronađen je jedinstveni arheološki predmet iz 5. stoljeća nazvan – Mirinski češalj.</b><br><br>Otkriven je u travnju 2017. godine tijekom francusko-hrvatskog istraživačkog projekta 'Arheološki park Mirine – Fulfinum' Općine Omišalj. Ovaj češalj od bjelokosti, vjerojatno liturgijske namijene, predstavlja arheološki nalaz izuzetne vrijednosti iz razdoblja ranog kršćanstva.<br><br>Češalj je restaurirao Arheološki muzej u Zagrebu, a nalaz su predstavili Sanjin Mihelić, ravnatelj Arheološkog muzeja u Zagrebu, Morana Čaušević-Bully, znanstvenica sa Sveučilišta Franche-Comté, Sébastien Bully, voditelj istraživanja u CNRS-u i Damir Doračić, restaurator Arheološkog muzeja u Zagrebu.<br><br>Mirinski je češalj ukrašen s obje strane reljefnim prikazima Kristovih čuda. S jedne strane prikazana je pretvorba vode u vino na svadbi u Kani, te čudesno umnažanje kruha. S druge strane može se prepoznati scena žene koja krvari, izliječene tako što je dotaknula Isusovo ruho. Uz nju, s lijeve strane, nalazi se drugi prikaz - vrlo moguće - žene pred Kristovim grobom. Njegov je nalaz jedinstven na našim prostorima koji upotpunjuje svjetski korpus od svega nekoliko sličnih predmeta, te svakako predstavlja jedan od značajnijih nalaza u recentnoj hrvatskoj ranokršćanskoj arheologiji.\",\"numberOfImages\":2,\"latitude\":45.2053904,\"longitude\":14.5431302},\"mirine_thermal_baths\":{\"title\":\"TO-DO\",\"description\":\"TO-DO\",\"numberOfImages\":2,\"latitude\":45.20525,\"longitude\":14.5427135}},\"churches\":{\"church_of_st_anthony_of_padua\":{\"title\":\"Crkva sv. Antuna Padovanskoga (13/14. stoljeće)\",\"description\":\"<b>Jednobrodna crkva zaključena polukružno istaknutom apsidom.</b><br><br>Crkva sv. Antona Padovanskoga na Dubcu prvi se put spominje 1685. godine, iako, sudeći po romaničkom stilu u kojem je građena, mora biti znatno starija. O njoj se brinula istoimena bratovština. Na južnom je zidu sačuvan gotički prozor. Oltarna slika sv. Antuna Padovanskoga je iz 18. stoljeća. Nad pročeljem se uzdiže preslica sa sačuvanim zvonom a pred njim je prigrađena prostrana sjenovita loža. Ljudi se pod ložom i unaokolo rado zadržavaju, posebice u večernjim satima toplih ljetnih mjeseci.\",\"numberOfImages\":3,\"latitude\":45.213345,\"longitude\":14.553331},\"church_of_st_helen\":{\"title\":\"Crkva sv. Jelene\",\"description\":\"<b>Jednobrodna crkva zaključena polukružno izbočenom apsidom (14./15. stoljeće).</b><br><br>Crkva sv. Jelene zidana je pravilno uslojenim klesancima. Pročelje joj je proviđeno gotičkim portalom šiljastoga luka i prozorčićem u obliku križa a kruni ga zvonik na preslicu. Smještena je odmah do zvonika i lože župne crkve; s nekoliko stuba podignuta je od glavnog trga Place. U izvorima se prvi put javlja 1458. godine, već kao ruševina. Naime, te ju je godine obnovio i priveo u današnje stanje Nikola Bozanić, te brigu o njoj, uz uporabu određenih posjeda, oporučno povjerio svojim nasljednicima, 15. travnja 1470. godine. Isprave javnih notara bilježe u narednim godinama više imena iz loze Bozanić koja su bila vezana uz kapelu. Tako se 1565. godine pojavljuje Vid Bozanić s juspatronatom, tj. s pravom raspolaganja s kapelom i njezinim zemljištima. Omišaljski župnik Anton Bozanić, oporukom od 16. kolovoza 1612. godine, povjerava brigu o kapeli kleriku Antonu Čubraniću, s time da nakon njegove smrti prijeđe opet Bozanićevu rodu. U kapeli se nalaze kameni oltar i oltarna slika sv. Jelene. Na dan sv. Jelene Križarice u njoj se slavi misa. Osim ove, u Omišlju postoje i ostaci druge, još starije istoimene crkve, sv. Jelena na Dolu.\",\"numberOfImages\":2,\"latitude\":45.211886,\"longitude\":14.553894},\"rose_window\":{\"title\":\"Rozeta\",\"description\":\"Pročelje crkve krasi rozeta, okrugli, reljefno ukrašeni kameni prozor s glagoljičnim natpisom iz 1405. godine. Rozeta s pročelja župne crkve, rad ponosnoga omišaljskoga majstora – kamenoklesara Sinoge, često se koristi kao amblem grada Omišlja.\",\"numberOfImages\":2,\"latitude\":45.20525,\"longitude\":14.553481},\"bell_tower\":{\"title\":\"Zvonik\",\"description\":\"<b>Renesansni zvonik dovršen je 1536. godine, o čemu svjedoči glagoljski natpis iznad ulaznih vrata.</b><br><br>Zvonik se gradio tri godine, od 1533. do 1536. godine a sredstva za tu izgradnju izdvojio je sav omišaljski puk i bratovštine. Te religiozne udruge bavile su se karitativnim radom ali bile su i ključni pokretači graditeljskih aktivnosti na polju sakralnoga graditeljstva u doba kasnog srednjeg i ranog novog vijeka. Dva majstora, graditelja, vodila su poslove, Pjero iz Omišlja i Andrij iz sela Kotora kraj Crikvenice, a sve se to događalo u vrijeme župnika Matije Vlčijića i kaštelana Nikole Antončića. Detaljne podatke saznajemo iz glagoljskog natpisa kojeg su nad portalom zvonika postavili ponosni graditelji. U biforu zvonika majstori su ugradili dijelove predromaničkoga crkvenog namještaja.<br><br>IU ta nemirna vremena rastuće opasnosti od Osmanlija kao i austrijsko-mletačkih sukoba, kao i drugdje duž istočne obale Jadrana takav zvonik nije imao samo sakralnu ulogu, jer bio je on i promatračnica s koje se nagledao okolni akvatorij. Stoga je građen poput utvrde.<br><br>Tekst natpisa na zvoniku glasi: „1533., miseca marča po volji Božji i Blaženije Devi Marije i po guverni gospodina plovana Matija Vlčijića i Mikuli Antončića, kaštalda, i sudac ki bihu toga vrimena. I pomore ga činiti vas palk i brašćini ta zvonik. A učiniše ga meštri: meštar Pjero z Omišja i meštar Andrij s Kotora. I bi svršen miseca maja 1536.“\",\"numberOfImages\":1,\"latitude\":45.211822,\"longitude\":14.553551},\"parish_church_of_the_assumption_stomorina\":{\"title\":\"Župna crkva Uznesenja Blažene Djevice Marije, Stomorina\",\"description\":\"<b>Trobrodna crkva nastala na prijelazu 12. u 13. stoljeće građena je u romaničkom stilu.</b><br><br>Već tada korišteni su dijelovi dekoracije starije crkve, iz ranog 9. i 10. stoljeća. Pokrajnje kapele, kupola i sakristija dograđeni su u 16. i 17. stoljeću. Crkva je riznica sakralnoga blaga. Ističe se velika reljefna drvorezbarena i polikromirana pala glavnog oltara, djelo nepoznatog autora iz 1565. godine. U nju je inkorporiran ranorenesansni drvorezbareni poliptih. U apsidi južne crkvene lađe oslikani je poliptih sv. Ivana Evanđelista, datiran u razdoblje oko 1410. godine. Slikani dijelovi politpiha pripisani su mletačkom slikaru Jacobellu del Fiore, dok je reljef sv. Ivana nešto kasnije gotičko djelo. Zidove i strop crkve oslikao je domaći slikar i dekorater Ivan Volarić, a Stanislava Radimiri kapelu Presvetog Sakramenta.<br><br>U luneti ponad glavnih vrata crkve sekundarno su ugrađeni ranosrednjovjekovni kameni reljefi, dijelovi pluteja i ambona predromaničke oltarne pregrade. Vjerojatno su pripadali inventaru crkve koja je na ovoj poziciji prethodila danas sačuvanoj romaničkoj bazilici.<br><br>Uz župnu je crkvu prislonjena nekadašnja gotička kapela sv. Ivana a uz nju masivni renesansni zvonik. Crkvena cjelina riznica je ranosrednjovjekovne kamene skulpture ranijeg sakralnog zdanja koje se na ovom mjestu nalazilo. Glagoljski natpisi uklesani u kamenu bilježe godine gradnji i pregradnji na crkvi („1405., miseca ijuna bi delana ta ponestra za gospodina Martina Glušca“).<br><br>Nastala je na prijelazu 12. u 13. stoljeće, kao trobrodna romanička bazilika čiji su graditelji bili pod neposrednim utjecajem monumentalnih romaničkih realizacija grada Krka. Tri lađe međusobno dijeli arkatura koja počiva na masivnim stubovima četvrtastog presjeka. Središnja lađa završava glavnom apsidom pravokutnog tlorisa a pobočne malim polukružnim apsidama (južna apsida skrivena je recentnom prigradnjom). U luneti glavnog portala zapadnog pročelja, na vanjskom i unutarnjem ziđu, stubovima i propovjedaonicama, uzidani su fragmenti crkvenog namještaja (ploče-pluteji, grede, pilastri i dijelovi zabata-tegurija oltarne pregrade te dijelovi ambona- propovjedaonice jedne ranije crkve). Lako ih je prepoznati po karakterističnim motivima kršćanskog simbolizma, vjere u stalnu obnovu, uskrsnuće i vječni život. Tako se nižu vješto modelirane učvorene, “beskonačne” pletenice, kružnice, polurozete, virovite rozete, čempresi, lozice, ptice i drugi vegetabilni i zoomorfni ornament. Reljefi su naknadno uzidavani u romaničku župnu crkvu, prilikom njezine gradnje a dijelom i znatno kasnije. Predromanički majstori su ovaj crkveni namještaj klesali na licu mjesta, mahom koristeći podatni istarski vapnenac koji im je u blokovima stizao brodovljem a dijelom i mramor porijeklom iz grčkih kamenoloma, kojeg su “brali” s neke ovdje već postojeće gradnje. Rozeta na pročelju crkve naivni je rad mjesnog majstora Sinoge. Datirana je glagoljskim natpisom u 1405. godinu. Na reprezentativnom romaničkom bočnom portalu kasnije su (15.-17. st.) glagoljskim pismom uparani neslužbeni natpisi-grafiti. U 16. stoljeću crkva se sustavno proširuje što je dokumentirano i glagoljskim natpisom iz 1525. godine na jednoj od kapela prizidanih uz sjevernu lađu. Križni svodovi pobočnih kapela svjedoče nam da mjesni majstori tad još uvijek grade u kasnogotičkom duhu. Adaptacije su se intenzivirale pod imperativom liturgijskih mijena diktiranih Tridentskim koncilom a kulminirale su izvedbom kupole nad prezbiterijem u 17. stoljeću i obuhvaćanjem dotad zasebne crkve sv. Ivana Krstitelja u 18. stoljeću. U središtu kasnorenesansnog oltarnog retabla sačuvan je njegov ranorenesansni prethodnik. Ova drvorezbarena i oslikana skulptura pripada vrhu tadašnje venecijanske produkcije. Isti je slučaj s ophodnim križevima, relikvijarima i kadionicama. Vizitacija druge polovine 16. stoljeća spominje da je crkva imala čak 18 oltara. U desnoj apsidi nalazi se drvorezbareni i oslikani oltarni retabl sv. Ivana Evanđelista koji se pripisuje Jacobellu del Fiore (početak 15. st.). Freske u kupoli i na stropu glavne lađe 1929. godine naslikao je lokalni majstor Ivan Volarić.<br><br>Pokraj bočnog ulaza u južnu lađu župne crkve nalazi se današnja sakristija a nekadašnja kapela sv. Ivana Krstitelja. Njezino gotičko pročelje podignuto je 1442. godine, kako nam to svjedoči glagoljski natpis smješten između izvornih otvora, sada zazidanog portala i uskog prozorčića, skošenih bridova okvira (“V ime Božje, amen. Let Gospodnjih 1442. bi zidano to pročeli, a v to vrime biše državnici pop Petar i Dv…”). Njih i stilski raspoznajete po karakterističnom šiljatom luku. Pretpostavka je da se ispod kapele kriju ostaci nekadašnjeg baptisterija crkve koja se ovdje izvorno nalazila.\",\"numberOfImages\":4,\"latitude\":45.211886,\"longitude\":14.553481}},\"forts\":{\"kastel\":{\"title\":\"Kaštel (Kešte)\",\"description\":\"<b>Mjesto na kojem se nalazila kula srednjovjekovne frankapanske utvrde.</b><br><br>Na jugoistočnom zidu župnoga ureda sačuvana je kamena ploča s glagoljičnim natpisom o gradnji kule 1476. godine. Kulu je dao podignuti Ivan VII. Mlađi, posljednji frankapanski gospodar otoka. Nekadašnju utvrđenu feudalnu rezidenciju knezova Krčkih kao utvrdu s kaštelanom održavala je Mletačka Republika, a zapuštena je u 19. stoljeću. Početkom 20. stoljeća na njezinom je mjestu podignuta škola i sklop općinskih zgrada sa stanom i uredom omišaljskog župnika. Ovdje se i danas nalazi sjedište Općine Omišalj. Cisterna iz središnjeg dvorišta potječe iz frankapanskoga razdoblja a obnavljana je početkom 20. stoljeća.<br><br>Glagoljični natpis o gradnji kaštela uzidan u zid župnog ureda: „V ime Božje, amen. 1476., ijuna kada se poče zidat ta kaštel va vrime kneza Ivana i njega sina kneza Mikule.“\",\"numberOfImages\":2,\"latitude\":45.21127,\"longitude\":14.555322}},\"industrial_heritage\":{\"water_tower_dubec\":{\"title\":\"Vodotoranj Dubec – 1925. godina\",\"description\":\"Vodotoranj Dubec s vodospremom i crpnom stanicom u podnožju činio je tehnološku cjelinu, a danas predstavlja važan spomenik infrastrukture i industrijskog graditeljstva, koji ponajprije svjedoči o civilizacijskim dosezima Omišlja. Zahvaljujući tom pogonu 1925. godine Omišalj je dobio pitku vodu u slavine i električnu struju u domove, desetljećima ranije od sličnih otočnih naselja duž istočne obale Jadrana.<br><br>Zanimljivo je da su se graditelji načinom izvedbe oplošja klesanim kamenom nastojali prilagoditi omišaljskom ambijentu.\",\"numberOfImages\":2,\"latitude\":45.213484,\"longitude\":14.553718}},\"localities\":{\"placa\":{\"title\":\"Placa\",\"description\":\"<b>Srce omišaljske povijesne jezgre.</b><br><br>Placa je stoljećima predstavljala središte naselja. Početkom 20. stoljeća postupno joj je primat počeo uzimati prostor na južnom rubu tadašnjega grada, mjesto nekadašnjeg kaštela na kojem je tada, pred Prvi svjetski rat, izgrađena nova općinska zgrada. Na kućama koje obrubljuju Placu, tragovi izvorne srednjovjekovne i renesansne gradnje skriveni su pod građevinskim intervencijama, adaptacijama i pregradnjama kasnijih stoljeća, osobito devetnaestog i početka dvadesetog, u kojima je Omišalj znatnije preoblikovan.\",\"numberOfImages\":5,\"latitude\":45.211621,\"longitude\":14.553873},\"tome_lesica_carpentery_workshop\":{\"title\":\"Marangunija Toma Lesice\",\"description\":\"<b>Stolarska radionica Toma Lesice (1916. – 1989.), posljednjega samoukog krčkoga glagoljaša.</b><br><br>Tome Lesica temeljnim je zanimanjem bio stolar. K tomu, desetljećima je obavljao dužnost sakristana, zvonara, mežnjara, tj. čovjeka koji se brine o uređenju crkve i pomaže svećeniku u njegovim dužnostima a djelovao je i kao svirač tradicijskog glazbala – sopila (sopele, roženice), tj. sopec. Najviše će se pamtiti kao posljednji krčki samouki glagoljaš ponikao iz puka. Glagoljicu je čitao tečno kao što se čitaju novine, (B. Fučić). Posljednji svoj službeni zapis glagoljicom ostavio je netom prije smrti u omišaljskoj bratovštinskoj knjizi bratovštine „Od duš“ a povodom posvećenja Josipa Bozanića za krčkoga biskupa. Za života predstavljao je vrelo za izučavanje tradicijske baštine Omišlja. Poznavali su ga i redovito konzultirali slavisti iz čitave Europe, kao i etnolozi koji su istraživali krčke teme. Svoj stolarski zanat obavljao je u radionici smještenoj pokraj kuće u kojoj je živio.\",\"numberOfImages\":2,\"latitude\":45.211387,\"longitude\":14.553604}},\"libraries\":{\"vid_omisljanin\":{\"title\":\"Knjižnica 'Vid Omišljanin'\",\"description\":\"<b>Ustanova nosi ime pisca i iluminatora koji je djelovao koncem 14. stoljeća.</b><br><br>Omišaljska gradska knjižnica nalazi se u sklopu zgrade općine koja je u razdoblju pred Prvi svjetski rat izgrađena nad ruševinama frankapanskog kaštela. Vid Omišljanin je 1396. godine ustavnom glagoljicom napisao i oslikao brevijar koji se sastoji od 468 pergamentnih listova. Izradio ga je za župnu crkvu sv. Bartola u Roču, gradića u središnjoj Istri. Brevijar se čuva u austrijskoj Nacionalnoj knjižnici u Beču.<br><br>Prva čitaonica otvorena je u Omišlju 1884. godine, a u sadašnjem prostoru knjižnica djeluje od 2002.\",\"numberOfImages\":2,\"latitude\":45.211315,\"longitude\":14.555139}},\"parks\":{\"dubec_park\":{\"title\":\"Park Dubec\",\"description\":\"<b>Spomenik krajobrazne arhitekture iz prve polovice 20. stoljeća.</b><br><br>Park Dubec nastajao je postupno od 1925. godine, zalaganjem mjesnog „Kupališnog povjerenstva“. Jedan je od rijetkih primjera prirodnih parkova, nastajao reguliranjem postojećih pješačkih staza i uređenjem postojeće autohtone hortikulture. Opjevan je svojevrsnom omišaljskom himnom, „Nad Omišalj kad padne mrak“, prof. Ivana Kraljića Duminića.<br><br>Valja naglasiti da je otok Krk bio izrazito bogat hrastovim šumama što se kao njegovo temeljno bogatstvo redovito naglašavalo u izvješćima mletačkih upravitelja (providura) koje su oni slali duždu u Veneciju. Drvo je Mletačkoj Republici bilo od strateškog značaja zbog ogromnih potreba izgradnje i popravaka brodova u venecijanskom arsenalu.\",\"numberOfImages\":1,\"latitude\":45.213122,\"longitude\":14.552419},\"gornja_vraca\":{\"title\":\"Gornja vraca / Njivičina\",\"description\":\"<b>Jedan od povijesnih ulaza u Omišalj.</b><br><br>Na ovaj, drugi prastari ulaz u Omišalj se ulazilo sa sjevera i izlazilo u pravcu sjevera, otočića sv. Marka  i uskoga kanala koji otok Krk dijeli od susjednoga, vinodolskoga kopna (prema Pušći, Vežici, Vošćici). I on je zasnovan još u prapovijesti u vrijeme gradinskoga naselja liburnske zajednice Fertinata koje se nalazilo na omišaljskoj uzvisini.\",\"numberOfImages\":2,\"latitude\":45.213492,\"longitude\":14.553981}},\"museums\":{\"memorial_house_of_krk_folklore\":{\"title\":\"Spomen dom krčkog folklora\",\"description\":\"<b>Zbirka materijalne i nematerijalne tradicijske baštine otoka Krka.</b><br><br>U Kući na stupićih, građenoj početkom 20. stoljeća, smješten je izložbeni postav s narodnom nošnjom, predmetima svakodnevne uporabe i etnomuzikološkim nasljeđem. Mjesto je posvećeno Festivalu krčkog folklora utemeljenom u prvoj polovici 20. stoljeća (Omišalj, 1935.), najstarijoj manifestaciji takve vrste u Hrvatskoj.\",\"numberOfImages\":7,\"latitude\":45.210843,\"longitude\":14.555245}},\"cemeteries\":{\"smitir\":{\"title\":\"Smitir\",\"description\":\"<b>Nekadašnje omišaljsko groblje.</b><br><br>Ime Smitir dolazi od latinske riječi coemeterium a znači groblje. Oko crkve pokapalo se umrle, od srednjega vijeka, do zabrane ukapanja u naseljima koju je donijela rana austrijska uprava. Od 1818. groblje je regulirano ispred naselja na mjestu nekadašnjeg benediktinskog samostana i crkve sv. Nikole, gdje je potrajalo do Prvog svjetskog rata kada je opet uspostavljeno na novoj lokaciji, podalje od naselja.\",\"numberOfImages\":2,\"latitude\":45.211863,\"longitude\":14.553373}},\"monuments\":{\"house_in_pancirov_street\":{\"title\":\"Kuća u ulici Panćirov\",\"description\":\"<b>Kuća iz doba renesanse.</b><br><br>Kuća je građena pravilno uslojenim klesancima. Luk karakterističnog, polukružno zaključenog prozorskog otvora ukrašen je motivom izmjeničnih zubaca. Gređe otvora počiva na klupčici koju nose geometrijskim profilom ukrašene konzole.\",\"numberOfImages\":1,\"latitude\":45.210941,\"longitude\":14.553744},\"lapidarium\":{\"title\":\"Lapidarij\",\"description\":\"<b>Zbirka kamenih spomenika s područja općine Omišalj.</b><br><br>Ova zbirka pokretnih kulturnih dobara čini cjelinu s „in situ“ sačuvanim spomenicima u njezinoj neposrednoj blizini, a osobito onima koji se nalaze na vanjštini i u unutrašnjosti omišaljske zborne crkve Uznesenja Marijina. U njoj se osobito ističe natpis o gradnji vodovoda Fulfinuma, antičkoga grada koji se prostirao obalom Uvale Sepen jugozapadno od Omišlja. Natpis iz 94. godine spominjao je cara Domicijana kao utemeljitelja vodovoda. Njegovo ime i titule su, kao i drugdje u Rimskom carstvu, odlukom Senata službeno izbrisani (damnatio memoriae), u ovom slučaju otučeni s površine kamenog natpisa, a preostalo je ime Lucija Sekstija Dekstera, veterana treće pretorijanske kohorte koji je, vjerojatno kao mještanin Fulfinuma, bio donator nekih radova na vodovodu. Ističu se i dijelovi ranosrednjovjekovnoga kamenog namještaja crkve iz ranog 9. stoljeća, koja je prethodila današnjoj Zbornoj crkvi Uznesenja Bl. Dj. Marije. Posebno je zanimljiva nadgrobna ploča s glagoljičnim natpisom i reljefnim prikazom znakova opatske časti iz 1477. godine. Izrađena je za Stjepana iz Zadra, posljednjeg opata benediktinskog samostana sv. Nikole koji se nalazio ispred ulaza u Omišalj. Značenje ovih kamenih ulomaka i druge omišaljske baštine podrobnije je rastumačeno knjižicom, kulturno-povijesnim vodičem – Nepoznati Omišalj, koja se može pribaviti u izložbenom prostoru.\",\"numberOfImages\":5,\"latitude\":45.20525,\"longitude\":14.55361},\"mile_kumbatovic_oton_gliha_house\":{\"title\":\"Spomen kuća Mile Kumbatović i Otona Glihe\",\"description\":\"<b>U ovoj su tradicijskoj omišaljskoj kući desetljećima živjeli i stvarali velikani hrvatske likovne umjetnosti Mila Kumbatović (1915.-2004.) i Oton Gliha (1914.-1999).</b><br><br>Mila Kumbatović rodom iz Omišlja, svoj je zavičaj zadužila dosljednim korištenjem njegova karakteristična krajolika kao inspiracije. To je bila konstanta njezina umjetničkog djelovanja u kojem je prešla put od sezanizma do posve apstraktnog slikarstva kao i eksperimentiranja s industrijskom skulpturom. Oton Gliha, jedan od najvećih hrvatskih slikara druge polovice 20. stoljeća bio je suprug Mile Kumbatović, koju je upoznao još tijekom studija na Umjetničkoj akademiji u Zagrebu. Podrijetlom iz Istre, u mladosti je živio u Sloveniji, Slavoniji i Zagrebu. Širom svijeta postao je poznat po slikanju gromača - suhozida otoka Krka, koje su u njegovoj interpretaciji postajale apstraktna kamena čipka.\",\"numberOfImages\":1,\"latitude\":45.212378,\"longitude\":14.554098},\"landauf_house\":{\"title\":\"Kuća Landauf\",\"description\":\"<b>Kuća sagrađena 1909. godine.</b><br><br>Kuću je 1909. godine, u jeku svojeg, ali i općeg ekonomskog probitka u Omišlju, dao sagraditi poznati lokalni poduzetnik, Luka Turato, koji se obogatio trgovinom, poglavito žitom, a onda stečeno investirao u turizam. Izgradio je luksuzni hotel Jadran i nikad dovršenu Plavu terasu u Njivicama. Započeo je gradnju objekta u uvali Slivanjska, nedaleko spilje Biserujka, a zatim ekonomski krahirao.<br><br>Plemenitim činom profesorice Anice Landauf, nećake Luke Turata, kuća je oporučno postala vlasništvo Općine Omišalj.\",\"numberOfImages\":1,\"latitude\":45.213205,\"longitude\":14.553954},\"stogata\":{\"title\":\"Stogata\",\"description\":\"<b>Građevina na mjestu na kojem se nalazila srednjovjekovna crkva sv. Agate.</b><br><br>Na ostacima napuštene crkve po ukidanju bratovštine izgrađena je tijekom 19. stoljeća stambena zgrada.<br><br>Uspomena na crkvu zadržana je u do danas živom mikrotoponimu.\",\"numberOfImages\":2,\"latitude\":45.212676,\"longitude\":14.554061}},\"lookouts\":{\"dubec_vantage_point\":{\"title\":\"Vidikovac Dubec\",\"description\":\"<b>Vidikovac Dubec s pogledom na Kvarner, Omišaljski zaljev, omišaljske priobalne hotele i ljetnikovce građene između dva svjetska rata, susjednu cresku i istarsku obalu, ali i Alpe, velebitske masive i perivoj Dubec u podnožju.</b><br><br>Još jedno omišaljsko mjesto s impresivnim pogledom na Kvarner, Omišaljski zaljev, omišaljske priobalne hotele i ljetnikovce građene između dva svjetska rata, susjednu cresku i istarsku obalu, ali i Alpe, velebitske masive i perivoj Dubec u podnožju.\",\"numberOfImages\":2,\"latitude\":45.213409,\"longitude\":14.553289},\"vele_steni_vantage_point\":{\"title\":\"Vidikovac Vele steni\",\"description\":\"<b>Vidikovac nad zapadnim padinama omišaljske uzvisine.</b><br><br>Mjesto s veličanstvenim pogledom na otok Krk, velik dio Kvarnerskog zaljeva, Omišaljski zaljev, Ert, kupalište i uvalu Pesja, Rivu pape Ivana Pavla II i povijesne lokalitete poput uzvisine Fortičine s ostacima srednjovjekovne utvrde i uvale Sepen s ostacima ranokršćanske bazilike na Mirinama te ostacima antičkog grada Fulfinuma. Iznimne je ambijentalne vrijednosti karakteristična pučka arhitektura u ovom rubnom predjelu grada s tragovima iz razdoblja srednjeg vijeka, renesanse i baroka.\",\"numberOfImages\":2,\"latitude\":45.211761,\"longitude\":14.552628}},\"tours\":{\"municipium_flavium_fulfinum_and_mirine\":{\"title\":\"Municipium Flavium Fulfinum i Mirine\",\"description\":\"<b>Ostaci antičkog grada Municipium Flavium Fulfinum iz druge polovice 1. st po. Kr. i ranokršćanske bazilike iz 5. st. po. Kr.</b><br><br>Na području Fulfinuma (današnji toponim Okladi) i danas su dobro raspoznatljivi preostaci različitih građevina iz rimskog doba. Osobito su impozantni nedavno istraženi dijelovi foruma, srca antičkoga grada s forumskim hramom, bazilikom i tabernama te dijelovima monumentalne arhitektonske plastike javnih, forumskih građevina. Usprkos sustavnim istraživanjima zadnjih godina grad Municipium Flavium Fulfinum je najvećim dijelom još neistražen i neotkopan. Ime mu je precizno poznato zahvaljujući nalazu natpisa iz vremena rimskog cara Domicijana na kojem se spominju neki radovi na gradskom vodovodu. Natpis se čuva u omišaljskoj zbirci Lapidarij.<br><br>Zidane strukture pa i raspored komunikacija dobro se uočavaju u konfiguraciji terena. Kako je proteklih stoljeća područje bilo poljodjelski obrađivano, preostaci žbukanih zidova antičkih građevina dijelom su zasuti suhozidnim gomilama - gromačama. Pristaništa i reprezentativne građevine s podnim mozaicima dijelom su zatrpani muljem u pličini uvale Sepen. Grad su regulirali rimski gromatici kao posve novu tvorevinu na terenu na kojem dotad nije postojalo naselje. Naseljenim rimskim veteranima podijeljena je zemlja koja je pripadala omišaljskim starosjediocima – Fertinatima. Takav nizinski i priobalni grad nije imao šansu za opstanak usprkos pokušajima njegovog utvrđivanja u vremenima kasne antike. Lagano je odumirao i napokon posve odumro poput Salone i mnogih drugih gradova rimske civilizacije uzdrmane seobom naroda.<br><br>Jugozapadno od foruma na lokalitetu Mirine nalazi se kasnoantička nekropola s nizom manjih i nekoliko velikih, povlaštenih grobnica te velikom do pod krov sačuvanom grobnom bazilikom pretpostavljenog titulara sv. Nikole. Crkva zbog izvrsne sačuvanosti može služiti kao ogledni primjer ranokršćanskih sakralnih zdanja. Temeljni oblik latinskog križa crkvi pridaje njezin poprečni brod - transept. U njezinom narteksu koji je restauriran a dijelom i rekonstruiran postavljena je izložba pokretnog arheološkog materijala. Ondje se nalazi i in situ sačuvan ranokršćanski sarkofag.<br><br>Atrij koji se duž južnog zida crkva proteže prema moru rezultat je naknadne prilagodbe zdanja redovničkoj zajednici, koja ga je naposljetku napustila, kada ga više zbog njegovih dimenzija nije mogla održavati. Kontinuitet su benediktinci nastojali nastaviti adaptacijom jednog suburbanog rezidencijalnog sklopa s termama, koji se nalazi zapadnije od bazilike. Arheološki je istražen i prezentiran pa se također može razgledati, Naposljetku su se benediktinci – glagoljaši povukli s izloženog priobalnog položaja i nastanili nadomak samog Omišlja, prenoseći ondje i titular sv. Nikole. Današnji toponim Mirine dijalektalni je naziv za ruševine - kroatizirano od latinskog murus, koje su doseljenim Hrvatima od srednjeg vijeka morale izgledati impozantno.\",\"related\":{\"mirine_fulfinum_basilica\":{\"title\":\"Mirine Fulfinum – Bazilika\",\"type\":\"archeology_remains\"},\"mirine_fulfinum_sarcophagus\":{\"title\":\"Mirine Fulfinum - Sarkofag\",\"type\":\"archeology_remains\"},\"mirine_fulfinum_forum\":{\"title\":\"Mirine Fulfinum - Forum\",\"type\":\"archeology_remains\"},\"mirine_fulfinum_comb\":{\"title\":\"Mirinski češalj\",\"type\":\"archeology_remains\"},\"mirine_thermal_baths\":{\"title\":\"TO-DO\",\"type\":\"archeology_remains\"}}}}}");

/***/ }),

/***/ "ll5S":
/*!*******************************************!*\
  !*** ./src/app/pages/list/list.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "vR6h":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/shared.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  shared works!\n</p>\n");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-home-home-module */ "pages-home-home-module").then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "99Un")).then((m) => m.HomePageModule),
    },
    {
        path: 'folder/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | folder-folder-module */ "folder-folder-module").then(__webpack_require__.bind(null, /*! ./folder/folder.module */ "yIOV")).then((m) => m.FolderPageModule),
    },
    {
        path: 'history',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-history-history-module */ "pages-history-history-module").then(__webpack_require__.bind(null, /*! ./pages/history/history.module */ "6F3i")).then((m) => m.HistoryPageModule),
    },
    {
        path: 'archeology_remains',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-arch-remains-arch-remains-module */ "pages-arch-remains-arch-remains-module").then(__webpack_require__.bind(null, /*! ./pages/arch-remains/arch-remains.module */ "Hcyd")).then((m) => m.ArchRemainsPageModule),
    },
    {
        path: 'cemeteries',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-cemeteries-cemeteries-module */ "pages-cemeteries-cemeteries-module").then(__webpack_require__.bind(null, /*! ./pages/cemeteries/cemeteries.module */ "VCD6")).then((m) => m.CemeteriesPageModule),
    },
    {
        path: 'churches',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-churches-churches-module */ "pages-churches-churches-module").then(__webpack_require__.bind(null, /*! ./pages/churches/churches.module */ "t18P")).then((m) => m.ChurchesPageModule),
    },
    {
        path: 'forts',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-forts-forts-module */ "pages-forts-forts-module").then(__webpack_require__.bind(null, /*! ./pages/forts/forts.module */ "P8p4")).then((m) => m.FortsPageModule),
    },
    {
        path: 'industrial_heritage',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-industry-industry-module */ "pages-industry-industry-module").then(__webpack_require__.bind(null, /*! ./pages/industry/industry.module */ "pI4P")).then((m) => m.IndustryPageModule),
    },
    {
        path: 'libraries',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-libraries-libraries-module */ "pages-libraries-libraries-module").then(__webpack_require__.bind(null, /*! ./pages/libraries/libraries.module */ "Hf1h")).then((m) => m.LibrariesPageModule),
    },
    {
        path: 'localities',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-localities-localities-module */ "pages-localities-localities-module").then(__webpack_require__.bind(null, /*! ./pages/localities/localities.module */ "8sB6")).then((m) => m.LocalitiesPageModule),
    },
    {
        path: 'lookouts',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-lookouts-lookouts-module */ "pages-lookouts-lookouts-module").then(__webpack_require__.bind(null, /*! ./pages/lookouts/lookouts.module */ "Apye")).then((m) => m.LookoutsPageModule),
    },
    {
        path: 'monuments',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-monuments-monuments-module */ "pages-monuments-monuments-module").then(__webpack_require__.bind(null, /*! ./pages/monuments/monuments.module */ "y4x0")).then((m) => m.MonumentsPageModule),
    },
    {
        path: 'museums',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-museums-museums-module */ "pages-museums-museums-module").then(__webpack_require__.bind(null, /*! ./pages/museums/museums.module */ "vemD")).then((m) => m.MuseumsPageModule),
    },
    {
        path: 'parks',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-parks-parks-module */ "pages-parks-parks-module").then(__webpack_require__.bind(null, /*! ./pages/parks/parks.module */ "FWcU")).then((m) => m.ParksPageModule),
    },
    {
        path: 'details/:sightType/:sight',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-details-details-module */ "pages-details-details-module").then(__webpack_require__.bind(null, /*! ./pages/details/details.module */ "TyDT")).then((m) => m.DetailsPageModule),
    },
    {
        path: 'list',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-list-list-module */ "pages-list-list-module").then(__webpack_require__.bind(null, /*! ./pages/list/list.module */ "jD90")).then((m) => m.ListPageModule),
    },
    {
        path: 'share',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-share-share-module */ "pages-share-share-module").then(__webpack_require__.bind(null, /*! ./pages/share/share.module */ "Hr7V")).then((m) => m.SharePageModule),
    },
    {
        path: 'about',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-about-about-module */ "pages-about-about-module").then(__webpack_require__.bind(null, /*! ./pages/about/about.module */ "UoYK")).then((m) => m.AboutPageModule),
    },
    {
        path: 'tours',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-tours-tours-module */ "pages-tours-tours-module").then(__webpack_require__.bind(null, /*! ./pages/tours/tours.module */ "tQfs")).then((m) => m.ToursPageModule),
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "xbZ7":
/*!*********************************************!*\
  !*** ./src/app/shared/shared.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGFyZWQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n.nav-icon {\n  width: 30px;\n  height: 30px;\n  margin-right: 20px;\n}\n\n#menu-list {\n  padding-top: 0;\n}\n\n.menu-header-image {\n  background-image: url('sidebar_header.jpg');\n  background-size: cover;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkRBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0RBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFKRjs7QUFPQTtFQUNFLGlDQUFBO0FBSkY7O0FBT0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBSkY7O0FBT0E7RUFDRSxjQUFBO0FBSkY7O0FBT0E7RUFDRSwyQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQUpGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuXG5pb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuXG4gIGNvbG9yOiAjNzU3NTc1O1xuXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6ICM2MTZlN2U7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzczODQ5YTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbm90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5uYXYtaWNvbntcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4jbWVudS1saXN0e1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLm1lbnUtaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvc2lkZWJhcl9oZWFkZXIuanBnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map