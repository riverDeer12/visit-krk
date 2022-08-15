(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tours-tours-module"],{

/***/ "G1Wr":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tours/tours.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar class=\"header\" color=\"primary\">\n        <ion-menu-toggle>\n            <ion-button size=\"small\" color=\"light\" fill=\"clear\">\n                <ion-icon size=\"large\" slot=\"icon-only\" name=\"menu-outline\"></ion-icon>\n            </ion-button>\n        </ion-menu-toggle>\n        <ion-title>\n            {{'navigation.tours' | translate }}\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n    <ion-list>\n        <ion-item (click)=\"goToDetails(sight)\" *ngFor=\"let sight of sights\">\n            <ion-avatar slot=\"start\">\n                <img [src]=\"'assets/images/sights/tours/' + sight + '_1.jpg'\" [alt]=\"sight\"/>\n            </ion-avatar>\n            <ion-label>\n                <h2>{{ 'tours.' + sight + '.title' | translate }}</h2>\n                <h3>{{ 'navigation.tours' | translate }}</h3>\n                <p>{{ 'tours.' + sight + '.description' | translate }}</p>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "PGYT":
/*!*******************************************!*\
  !*** ./src/app/pages/tours/tours.page.ts ***!
  \*******************************************/
/*! exports provided: ToursPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToursPage", function() { return ToursPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tours_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tours.page.html */ "G1Wr");
/* harmony import */ var _tours_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tours.page.scss */ "qFjm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_i18n_eng_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/i18n/eng.json */ "1pnk");
var _assets_i18n_eng_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/i18n/eng.json */ "1pnk", 1);
/* harmony import */ var src_app_shared_constants_sight_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/constants/sight-types */ "/IrA");








let ToursPage = class ToursPage {
    constructor(translate, router) {
        this.translate = translate;
        this.router = router;
        this.getLanguage();
    }
    ngOnInit() {
        this.getTours();
    }
    getLanguage() {
        const currentLanguage = localStorage.getItem('language');
        this.translate.use(currentLanguage);
    }
    getTours() {
        this.data = _assets_i18n_eng_json__WEBPACK_IMPORTED_MODULE_6__["tours"];
        this.sights = Object.keys(this.data);
    }
    goToDetails(sight) {
        this.router.navigateByUrl('/details/' + src_app_shared_constants_sight_types__WEBPACK_IMPORTED_MODULE_7__["SightTypes"].TOURS + '/' + sight);
    }
};
ToursPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ToursPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-tours',
        template: _raw_loader_tours_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tours_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ToursPage);



/***/ }),

/***/ "QLcu":
/*!*****************************************************!*\
  !*** ./src/app/pages/tours/tours-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ToursPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToursPageRoutingModule", function() { return ToursPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tours_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tours.page */ "PGYT");




const routes = [
    {
        path: '',
        component: _tours_page__WEBPACK_IMPORTED_MODULE_3__["ToursPage"]
    }
];
let ToursPageRoutingModule = class ToursPageRoutingModule {
};
ToursPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ToursPageRoutingModule);



/***/ }),

/***/ "qFjm":
/*!*********************************************!*\
  !*** ./src/app/pages/tours/tours.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3Vycy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "tQfs":
/*!*********************************************!*\
  !*** ./src/app/pages/tours/tours.module.ts ***!
  \*********************************************/
/*! exports provided: createTranslateLoader, ToursPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToursPageModule", function() { return ToursPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tours_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tours-routing.module */ "QLcu");
/* harmony import */ var _tours_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tours.page */ "PGYT");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
let ToursPageModule = class ToursPageModule {
};
ToursPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tours_routing_module__WEBPACK_IMPORTED_MODULE_5__["ToursPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]],
                },
            }),
        ],
        declarations: [_tours_page__WEBPACK_IMPORTED_MODULE_6__["ToursPage"]]
    })
], ToursPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-tours-tours-module.js.map