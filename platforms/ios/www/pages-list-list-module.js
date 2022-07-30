(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-list-list-module"],{

/***/ "O3HO":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/list/list.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card *ngFor=\"let sight of sights\">\n  <img [src]=\"'assets/images/sights/' + sight + '_1.jpg'\"  [alt]=\"sight\"/>\n  <ion-card-header>\n    <ion-card-subtitle class=\"ion-margin-bottom\">{{ 'navigation.archeology_remain' | translate }}</ion-card-subtitle>\n    <ion-card-title>{{ sightType + '.' + sight + '.title' | translate }}</ion-card-title>\n  </ion-card-header>\n  <ion-card-header class=\"ion-text-center\">\n    <ion-button (click)=\"goToDetails(sight)\" fill=\"clear\" expand=\"full\" color=\"primary\">\n      <ion-icon size=\"large\" slot=\"icon-only\" name=\"information-outline\"></ion-icon>\n      {{ 'read_more' | translate}}\n    </ion-button>\n  </ion-card-header>\n</ion-card>\n");

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
        const currentLanguage = localStorage.getItem('language');
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
                break;
            case src_app_shared_constants_sight_types__WEBPACK_IMPORTED_MODULE_6__["SightTypes"].CHURCHES:
                this.data = _assets_i18n_cro_json__WEBPACK_IMPORTED_MODULE_7__["churches"];
                break;
            case src_app_shared_constants_sight_types__WEBPACK_IMPORTED_MODULE_6__["SightTypes"].ETHNO:
                this.data = _assets_i18n_cro_json__WEBPACK_IMPORTED_MODULE_7__["ethno"];
                break;
            case src_app_shared_constants_sight_types__WEBPACK_IMPORTED_MODULE_6__["SightTypes"].PLACES:
                this.data = _assets_i18n_cro_json__WEBPACK_IMPORTED_MODULE_7__["places"];
                break;
            case src_app_shared_constants_sight_types__WEBPACK_IMPORTED_MODULE_6__["SightTypes"].MONASTERIES:
                this.data = _assets_i18n_cro_json__WEBPACK_IMPORTED_MODULE_7__["monasteries"];
                break;
            case src_app_shared_constants_sight_types__WEBPACK_IMPORTED_MODULE_6__["SightTypes"].TOURS:
                this.data = _assets_i18n_cro_json__WEBPACK_IMPORTED_MODULE_7__["tours"];
                break;
            case src_app_shared_constants_sight_types__WEBPACK_IMPORTED_MODULE_6__["SightTypes"].FORTS:
                this.data = _assets_i18n_cro_json__WEBPACK_IMPORTED_MODULE_7__["forts"];
                break;
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

/***/ "jD90":
/*!*******************************************!*\
  !*** ./src/app/pages/list/list.module.ts ***!
  \*******************************************/
/*! exports provided: createTranslateLoader, ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-routing.module */ "oNf1");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list.page */ "cA8+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");











function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
let ListPageModule = class ListPageModule {
};
ListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _list_routing_module__WEBPACK_IMPORTED_MODULE_6__["ListPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]],
                },
            }),
        ],
        declarations: [_list_page__WEBPACK_IMPORTED_MODULE_7__["ListPage"]]
    })
], ListPageModule);



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

/***/ "oNf1":
/*!***************************************************!*\
  !*** ./src/app/pages/list/list-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageRoutingModule", function() { return ListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.page */ "cA8+");




const routes = [
    {
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_3__["ListPage"]
    }
];
let ListPageRoutingModule = class ListPageRoutingModule {
};
ListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-list-list-module.js.map