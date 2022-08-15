(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forts-forts-module"],{

/***/ "G3FJ":
/*!*******************************************!*\
  !*** ./src/app/pages/forts/forts.page.ts ***!
  \*******************************************/
/*! exports provided: FortsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FortsPage", function() { return FortsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_forts_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./forts.page.html */ "hGw+");
/* harmony import */ var _forts_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forts.page.scss */ "ZAJU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_constants_sight_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/constants/sight-types */ "/IrA");
/* harmony import */ var _assets_i18n_eng_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/i18n/eng.json */ "1pnk");
var _assets_i18n_eng_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/i18n/eng.json */ "1pnk", 1);








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
        const currentLanguage = localStorage.getItem('language');
        this.translate.use(currentLanguage);
    }
    getForts() {
        this.data = _assets_i18n_eng_json__WEBPACK_IMPORTED_MODULE_7__["forts"];
        this.sights = Object.keys(this.data);
    }
    goToDetails(sight) {
        this.router.navigateByUrl('/details/' + src_app_shared_constants_sight_types__WEBPACK_IMPORTED_MODULE_6__["SightTypes"].FORTS + '/' + sight);
    }
};
FortsPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
FortsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forts',
        template: _raw_loader_forts_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forts_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FortsPage);



/***/ }),

/***/ "P8p4":
/*!*********************************************!*\
  !*** ./src/app/pages/forts/forts.module.ts ***!
  \*********************************************/
/*! exports provided: createTranslateLoader, FortsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FortsPageModule", function() { return FortsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _forts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forts-routing.module */ "W+Mq");
/* harmony import */ var _forts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forts.page */ "G3FJ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
let FortsPageModule = class FortsPageModule {
};
FortsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forts_routing_module__WEBPACK_IMPORTED_MODULE_5__["FortsPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]],
                },
            }),
        ],
        declarations: [_forts_page__WEBPACK_IMPORTED_MODULE_6__["FortsPage"]]
    })
], FortsPageModule);



/***/ }),

/***/ "W+Mq":
/*!*****************************************************!*\
  !*** ./src/app/pages/forts/forts-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: FortsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FortsPageRoutingModule", function() { return FortsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _forts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forts.page */ "G3FJ");




const routes = [
    {
        path: '',
        component: _forts_page__WEBPACK_IMPORTED_MODULE_3__["FortsPage"]
    }
];
let FortsPageRoutingModule = class FortsPageRoutingModule {
};
FortsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FortsPageRoutingModule);



/***/ }),

/***/ "ZAJU":
/*!*********************************************!*\
  !*** ./src/app/pages/forts/forts.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3J0cy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "hGw+":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forts/forts.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar class=\"header\" color=\"primary\">\n        <ion-menu-toggle>\n            <ion-button size=\"small\" color=\"light\" fill=\"clear\">\n                <ion-icon size=\"large\" slot=\"icon-only\" name=\"menu-outline\"></ion-icon>\n            </ion-button>\n        </ion-menu-toggle>\n        <ion-title>{{ 'navigation.forts' | translate }}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n    <ion-list>\n        <ion-item (click)=\"goToDetails(sight)\" *ngFor=\"let sight of sights\">\n            <ion-avatar slot=\"start\">\n                <img [src]=\"'assets/images/sights/forts/' + sight + '_1.jpg'\" [alt]=\"sight\"/>\n            </ion-avatar>\n            <ion-label>\n                <h2>{{ 'forts.' + sight + '.title' | translate }}</h2>\n                <h3>{{ 'navigation.forts' | translate }}</h3>\n                <p>{{ 'forts.' + sight + '.description' | translate }}</p>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-forts-forts-module.js.map