(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-history-history-module"],{

/***/ "1mSK":
/*!***********************************************!*\
  !*** ./src/app/pages/history/history.page.ts ***!
  \***********************************************/
/*! exports provided: HistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPage", function() { return HistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_history_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./history.page.html */ "yyvh");
/* harmony import */ var _history_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history.page.scss */ "X84x");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





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
        const currentLanguage = localStorage.getItem('language');
        this.translate.use(currentLanguage);
    }
    ngOnInit() {
        this.loadingData = false;
    }
};
HistoryPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
];
HistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-history',
        template: _raw_loader_history_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_history_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HistoryPage);



/***/ }),

/***/ "6F3i":
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.module.ts ***!
  \*************************************************/
/*! exports provided: createTranslateLoader, HistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _history_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history-routing.module */ "f9vg");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./history.page */ "1mSK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");











function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
let HistoryPageModule = class HistoryPageModule {
};
HistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _history_routing_module__WEBPACK_IMPORTED_MODULE_6__["HistoryPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]],
                },
            }),
        ],
        declarations: [_history_page__WEBPACK_IMPORTED_MODULE_7__["HistoryPage"]]
    })
], HistoryPageModule);



/***/ }),

/***/ "X84x":
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0b3J5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "f9vg":
/*!*********************************************************!*\
  !*** ./src/app/pages/history/history-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: HistoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageRoutingModule", function() { return HistoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history.page */ "1mSK");




const routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_3__["HistoryPage"]
    }
];
let HistoryPageRoutingModule = class HistoryPageRoutingModule {
};
HistoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HistoryPageRoutingModule);



/***/ }),

/***/ "yyvh":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [hidden]=\"loadingData\">\n  <ion-toolbar class=\"header\" color=\"primary\">\n    <ion-menu-toggle>\n      <ion-button size=\"small\" color=\"light\" fill=\"clear\">\n        <ion-icon size=\"large\" slot=\"icon-only\" name=\"menu-outline\"></ion-icon>\n      </ion-button>\n    </ion-menu-toggle>\n    <ion-title>\n       {{'navigation.history' | translate }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [hidden]=\"loadingData\">\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide\n    class=\"slide-image\"\n    [style]=\"'background-image: url(assets/images/sights/places/krk_1.jpg);'\">\n    </ion-slide>\n    <ion-slide\n    class=\"slide-image\"\n    [style]=\"'background-image: url(assets/images/sights/forts/volsonis_1.jpg);'\">\n    </ion-slide>\n    <ion-slide\n    class=\"slide-image\"\n    [style]=\"'background-image: url(assets/images/sights/churches/st_john_1.jpg);'\">\n    </ion-slide>\n  </ion-slides>\n\n  <div class=\"ion-padding\">\n    <ion-text [innerHtml]=\"'history.description' | translate\"></ion-text>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-history-history-module.js.map