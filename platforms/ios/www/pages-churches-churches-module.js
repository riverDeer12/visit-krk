(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-churches-churches-module"],{

/***/ "7zcq":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/churches/churches.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"header\" color=\"primary\">\n    <ion-menu-toggle>\n      <ion-button size=\"small\" color=\"light\" fill=\"clear\">\n        <ion-icon size=\"large\" slot=\"icon-only\" name=\"menu-outline\"></ion-icon>\n      </ion-button>\n    </ion-menu-toggle>\n    <ion-title>\n      {{'navigation.churches' | translate }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n  <ion-content fullscreen>\n    <ion-card *ngFor=\"let sight of sights\">\n      <img [src]=\"'assets/images/sights/churches/' + sight + '_1.jpg'\"  [alt]=\"sight\"/>\n      <ion-card-header>\n        <ion-card-subtitle class=\"ion-margin-bottom\">{{ 'navigation.church' | translate }}</ion-card-subtitle>\n        <ion-card-title>{{ 'churches.' + sight + '.title' | translate }}</ion-card-title>\n      </ion-card-header>\n      <ion-card-header class=\"ion-text-center\">\n        <ion-button (click)=\"goToDetails(sight)\" fill=\"clear\" expand=\"full\" color=\"primary\">\n          <ion-icon size=\"large\" slot=\"icon-only\" name=\"information-outline\"></ion-icon>\n          {{ 'read_more' | translate}}\n        </ion-button>\n      </ion-card-header>\n    </ion-card>\n  </ion-content>\n");

/***/ }),

/***/ "aY1c":
/*!*************************************************!*\
  !*** ./src/app/pages/churches/churches.page.ts ***!
  \*************************************************/
/*! exports provided: ChurchesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChurchesPage", function() { return ChurchesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_churches_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./churches.page.html */ "7zcq");
/* harmony import */ var _churches_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./churches.page.scss */ "m4pB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_shared_constants_sight_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/constants/sight-types */ "/IrA");
/* harmony import */ var _assets_i18n_eng_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../assets/i18n/eng.json */ "1pnk");
var _assets_i18n_eng_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/i18n/eng.json */ "1pnk", 1);








let ChurchesPage = class ChurchesPage {
    constructor(translate, router) {
        this.translate = translate;
        this.router = router;
        this.getLanguage();
    }
    ngOnInit() {
        this.getChurches();
    }
    getLanguage() {
        const currentLanguage = localStorage.getItem('language');
        this.translate.use(currentLanguage);
    }
    getChurches() {
        this.data = _assets_i18n_eng_json__WEBPACK_IMPORTED_MODULE_7__["churches"];
        this.sights = Object.keys(this.data);
    }
    goToDetails(sight) {
        this.router.navigateByUrl('/details/' + src_app_shared_constants_sight_types__WEBPACK_IMPORTED_MODULE_6__["SightTypes"].CHURCHES + '/' + sight);
    }
};
ChurchesPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ChurchesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-churches',
        template: _raw_loader_churches_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_churches_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChurchesPage);



/***/ }),

/***/ "k05K":
/*!***********************************************************!*\
  !*** ./src/app/pages/churches/churches-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ChurchesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChurchesPageRoutingModule", function() { return ChurchesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _churches_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./churches.page */ "aY1c");




const routes = [
    {
        path: '',
        component: _churches_page__WEBPACK_IMPORTED_MODULE_3__["ChurchesPage"]
    }
];
let ChurchesPageRoutingModule = class ChurchesPageRoutingModule {
};
ChurchesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChurchesPageRoutingModule);



/***/ }),

/***/ "m4pB":
/*!***************************************************!*\
  !*** ./src/app/pages/churches/churches.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaHVyY2hlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "t18P":
/*!***************************************************!*\
  !*** ./src/app/pages/churches/churches.module.ts ***!
  \***************************************************/
/*! exports provided: createTranslateLoader, ChurchesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChurchesPageModule", function() { return ChurchesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _churches_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./churches-routing.module */ "k05K");
/* harmony import */ var _churches_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./churches.page */ "aY1c");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");











function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
let ChurchesPageModule = class ChurchesPageModule {
};
ChurchesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _churches_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChurchesPageRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]],
                },
            }),
        ],
        declarations: [_churches_page__WEBPACK_IMPORTED_MODULE_6__["ChurchesPage"]]
    })
], ChurchesPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-churches-churches-module.js.map