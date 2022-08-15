(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-arch-remains-arch-remains-module"],{

/***/ "2IjH":
/*!*********************************************************!*\
  !*** ./src/app/pages/arch-remains/arch-remains.page.ts ***!
  \*********************************************************/
/*! exports provided: ArchRemainsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchRemainsPage", function() { return ArchRemainsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_arch_remains_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./arch-remains.page.html */ "3jz3");
/* harmony import */ var _arch_remains_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arch-remains.page.scss */ "NGD9");
/* harmony import */ var _shared_constants_sight_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/constants/sight-types */ "/IrA");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _assets_i18n_eng_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/i18n/eng.json */ "1pnk");
var _assets_i18n_eng_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/i18n/eng.json */ "1pnk", 1);








let ArchRemainsPage = class ArchRemainsPage {
    constructor(translate, router) {
        this.translate = translate;
        this.router = router;
        this.getLanguage();
    }
    ngOnInit() {
        this.getSights();
    }
    getLanguage() {
        const currentLanguage = localStorage.getItem('language');
        this.translate.use(currentLanguage);
    }
    getSights() {
        this.data = _assets_i18n_eng_json__WEBPACK_IMPORTED_MODULE_7__["archeology_remains"];
        this.sights = Object.keys(this.data);
    }
    goToDetails(sight) {
        this.router.navigateByUrl('/details/' + _shared_constants_sight_types__WEBPACK_IMPORTED_MODULE_3__["SightTypes"].ARCHEOLOGY_REMAINS + '/' + sight);
    }
};
ArchRemainsPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
ArchRemainsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-arch-remains',
        template: _raw_loader_arch_remains_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_arch_remains_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ArchRemainsPage);



/***/ }),

/***/ "3jz3":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/arch-remains/arch-remains.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"header\" color=\"primary\">\n    <ion-menu-toggle>\n      <ion-button size=\"small\" color=\"light\" fill=\"clear\">\n        <ion-icon size=\"large\" slot=\"icon-only\" name=\"menu-outline\"></ion-icon>\n      </ion-button>\n    </ion-menu-toggle>\n    <ion-title>{{ 'navigation.archeology_remains' | translate }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n    <ion-list>\n        <ion-item (click)=\"goToDetails(sight)\" *ngFor=\"let sight of sights\">\n            <ion-avatar slot=\"start\">\n                <img [src]=\"'assets/images/sights/archeology_remains/' + sight + '_1.jpg'\" [alt]=\"sight\"/>\n            </ion-avatar>\n            <ion-label>\n                <h2>{{ 'archeology_remains.' + sight + '.title' | translate }}</h2>\n                <h3>{{ 'navigation.archeology_remain' | translate }}</h3>\n                <p>{{ 'archeology_remains.' + sight + '.description' | translate }}</p>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "Hcyd":
/*!***********************************************************!*\
  !*** ./src/app/pages/arch-remains/arch-remains.module.ts ***!
  \***********************************************************/
/*! exports provided: createTranslateLoader, ArchRemainsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchRemainsPageModule", function() { return ArchRemainsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _arch_remains_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./arch-remains-routing.module */ "J+kT");
/* harmony import */ var _arch_remains_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./arch-remains.page */ "2IjH");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");











function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http, "./assets/i18n/", ".json");
}
let ArchRemainsPageModule = class ArchRemainsPageModule {
};
ArchRemainsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _arch_remains_routing_module__WEBPACK_IMPORTED_MODULE_6__["ArchRemainsPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]],
                },
            }),
        ],
        declarations: [_arch_remains_page__WEBPACK_IMPORTED_MODULE_7__["ArchRemainsPage"]]
    })
], ArchRemainsPageModule);



/***/ }),

/***/ "J+kT":
/*!*******************************************************************!*\
  !*** ./src/app/pages/arch-remains/arch-remains-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ArchRemainsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchRemainsPageRoutingModule", function() { return ArchRemainsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _arch_remains_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./arch-remains.page */ "2IjH");




const routes = [
    {
        path: '',
        component: _arch_remains_page__WEBPACK_IMPORTED_MODULE_3__["ArchRemainsPage"]
    }
];
let ArchRemainsPageRoutingModule = class ArchRemainsPageRoutingModule {
};
ArchRemainsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ArchRemainsPageRoutingModule);



/***/ }),

/***/ "NGD9":
/*!***********************************************************!*\
  !*** ./src/app/pages/arch-remains/arch-remains.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmNoLXJlbWFpbnMucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=pages-arch-remains-arch-remains-module.js.map