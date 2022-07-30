(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "/rnz":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo-img {\n  width: auto;\n  margin: auto;\n  display: block;\n}\n\n.lang-img {\n  width: 20px;\n  height: 20px;\n}\n\n.social-logo {\n  height: 20px;\n}\n\n.language-picker {\n  display: flex !important;\n  justify-content: center !important;\n}\n\n.logo-container {\n  display: flex !important;\n  justify-content: center !important;\n  padding: 20px;\n  margin-bottom: 20px;\n}\n\n.language-picker-heading {\n  text-align: center !important;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0Usd0JBQUE7RUFDQSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0Usd0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28taW1nIHtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5sYW5nLWltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5zb2NpYWwtbG9nbyB7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmxhbmd1YWdlLXBpY2tlcntcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4ubG9nby1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmxhbmd1YWdlLXBpY2tlci1oZWFkaW5ne1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "99Un":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-routing.module */ "9oos");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home.page */ "hsj+");









let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_7__["HomePageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_8__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "9oos":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "hsj+");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "eUf4":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content center text-center>\n  <ion-grid>\n    <ion-row class=\"logo-container\" justify-content-center align-items-center>\n      <img src=\"assets/images/logo.png\" alt=\"logo\">\n    </ion-row>\n    <ion-row class=\"language-picker\" justify-content-center align-items-center>\n      <ion-list radio-group no-border ngDefaultControl>\n        <ion-radio-group value=\"eng\">\n          <ion-list-header>\n            <ion-label class=\"language-picker-heading\">\n              <p>{{ 'language_picker.choose_your_language' | translate }}</p>\n            </ion-label>\n          </ion-list-header>\n          <ion-item>\n            <ion-label>{{ 'language_picker.english' | translate }}</ion-label>\n            <ion-radio value=\"eng\" (click)=\"switchLanguage('eng')\"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>{{ 'language_picker.croatian' | translate }}</ion-label>\n            <ion-radio value=\"cro\" (click)=\"switchLanguage('cro')\"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>{{ 'language_picker.german' | translate }}</ion-label>\n            <ion-radio value=\"ger\" (click)=\"switchLanguage('ger')\"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>{{ 'language_picker.italian' | translate }}</ion-label>\n            <ion-radio value=\"ita\" (click)=\"switchLanguage('ita')\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </ion-list>\n    </ion-row>\n  </ion-grid>\n  <ion-item (click)=\"goToMenuPage()\">{{ 'next' | translate }}</ion-item>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"primary\" style=\"text-align: center;\">\n    <ion-row>\n      <ion-col>\n        <a href=\"https://m.facebook.com/krk.otok.isola.insel.island\">\n          <img class=\"social-logo\" src=\"assets/images/icons/icon_facebook.png\">\n        </a>\n      </ion-col>\n      <ion-col>\n        <a href=\"https://www.linkedin.com/company/the-island-of-krk-tourist-board/about/\">\n          <img class=\"social-logo\" src=\"assets/images/icons/icon_instagram.png\">\n        </a>\n      </ion-col>\n      <ion-col>\n        <a href=\"https://www.youtube.com/user/IslandKrkTB/\">\n          <img class=\"social-logo\" src=\"assets/images/icons/icon_pinterest.png\">\n        </a>\n      </ion-col>\n      <ion-col>\n        <a href=\"https://mobile.twitter.com/visitkrk_island\">\n          <img class=\"social-logo\" src=\"assets/images/icons/icon_twitter.png\">\n        </a>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "hsj+":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "eUf4");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "/rnz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let HomePage = class HomePage {
    constructor(router, translate) {
        this.router = router;
        this.translate = translate;
        localStorage.setItem('language', 'eng');
        this.translate.setDefaultLang('eng');
        this.translate.use('eng');
    }
    switchLanguage(lang) {
        this.translate.use(lang);
        localStorage.setItem('language', lang);
    }
    goToMenuPage() {
        this.router.navigateByUrl('/history');
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map