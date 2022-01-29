(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-details-details-module"],{

/***/ "6axG":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/details/details.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [hidden]=\"loadingData\">\n  <ion-toolbar class=\"header\" color=\"dark\">\n    <ion-menu-toggle>\n      <ion-button size=\"small\" color=\"light\" fill=\"clear\">\n        <ion-icon size=\"large\" slot=\"icon-only\" name=\"menu-outline\"></ion-icon>\n      </ion-button>\n    </ion-menu-toggle>\n    <ion-title>\n      {{sight.key + '.title' | translate }}\n    </ion-title>\n    <ion-button class=\"ion-float-right\" fill=\"clear\" size=\"small\" color=\"light\" (click)=\"goBack()\">\n      <ion-icon size=\"large\" slot=\"icon-only\" name=\"return-up-back-outline\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [hidden]=\"loadingData\">\n\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide *ngFor=\"let number of imagesNumber()\" class=\"slide-image\"\n      [style]=\"'background-image: url(assets/images/sights/' + sight.name + '_' + number + '.jpg);'\">\n    </ion-slide>\n  </ion-slides>\n\n  <div class=\"ion-padding\">\n    <ion-text [innerHtml]=\"sight.key + '.description' | translate\"></ion-text>\n  </div>\n\n  <div class=\"ion-padding\" [hidden]=\"loadingData && hasRelatedSights\" *ngIf=\"hasRelatedSights\">\n    <ion-card-subtitle>{{'related_sights' | translate }}</ion-card-subtitle>\n    <ion-card *ngFor=\"let relatedSight of relatedSights\">\n      <img [src]=\"'assets/images/sights/' + relatedSight + '_1.jpg'\" />\n      <ion-card-header>\n        <ion-card-subtitle class=\"ion-margin-bottom\">{{ 'navigation.archeology_remains' | translate }}\n        </ion-card-subtitle>\n        <ion-card-title>{{ 'archeology_remains.' + relatedSight + '.title' | translate }}</ion-card-title>\n      </ion-card-header>\n      <ion-card-header class=\"ion-text-center\">\n        <ion-button (click)=\"goToRelatedSightDetails(relatedSight)\" fill=\"clear\" expand=\"full\" color=\"primary\">\n          <ion-icon size=\"large\" slot=\"icon-only\" name=\"information-outline\"></ion-icon>\n          {{ 'read_more' | translate}}\n        </ion-button>\n      </ion-card-header>\n    </ion-card>\n  </div>\n</ion-content>\n\n<ion-footer *ngIf=\"!hasRelatedSights\">\n  <ion-toolbar>\n    <ion-button (click)=\"goToMap()\" expand=\"full\" fill=\"clear\" color=\"dark\">\n      <ion-icon size=\"large\" slot=\"icon-only\" name=\"locate-outline\"></ion-icon>\n      <ion-text class=\"ion-margin-start\">{{ 'show_on_map' | translate}}</ion-text>\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "GvdU":
/*!*********************************************************!*\
  !*** ./src/app/pages/details/details-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: DetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageRoutingModule", function() { return DetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details.page */ "T158");




const routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"]
    }
];
let DetailsPageRoutingModule = class DetailsPageRoutingModule {
};
DetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailsPageRoutingModule);



/***/ }),

/***/ "N1Ck":
/*!****************************************!*\
  !*** ./src/app/shared/models/sight.ts ***!
  \****************************************/
/*! exports provided: Sight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sight", function() { return Sight; });
class Sight {
}


/***/ }),

/***/ "T158":
/*!***********************************************!*\
  !*** ./src/app/pages/details/details.page.ts ***!
  \***********************************************/
/*! exports provided: DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPage", function() { return DetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./details.page.html */ "6axG");
/* harmony import */ var _details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details.page.scss */ "jB6r");
/* harmony import */ var src_app_shared_constants_sight_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/constants/sight-types */ "/IrA");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_models_sight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/models/sight */ "N1Ck");
/* harmony import */ var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/launch-navigator/ngx */ "fGQ8");









let DetailsPage = class DetailsPage {
    constructor(route, router, translate, launchNavigator) {
        this.route = route;
        this.router = router;
        this.translate = translate;
        this.launchNavigator = launchNavigator;
        this.sight = new src_app_shared_models_sight__WEBPACK_IMPORTED_MODULE_7__["Sight"]();
        this.slideOpts = {
            initialSlide: 1,
            speed: 400,
        };
        this.loadingData = true;
        this.hasRelatedSights = false;
        this.getCurrentLanguage();
        this.getSight();
    }
    ngOnInit() { }
    getCurrentLanguage() {
        this.translate.use(localStorage.getItem('language'));
    }
    getSight() {
        this.getMainAttributes();
        this.getNumberOfImages();
        this.getCoordinates();
        this.getRelatedSights();
    }
    getMainAttributes() {
        this.sight.type = this.route.snapshot.paramMap.get('sightType');
        this.sight.name = this.route.snapshot.paramMap.get('sight');
        this.sight.key = this.sight.type + '.' + this.sight.name;
    }
    getNumberOfImages() {
        this.translate
            .get(this.sight.key + '.numberOfImages')
            .subscribe((data) => {
            this.sight.numberOfImages = data;
        });
    }
    getCoordinates() {
        this.translate.get(this.sight.key + '.latitude').subscribe((data) => {
            this.sight.latitude = data;
        });
        this.translate.get(this.sight.key + '.longitude').subscribe((data) => {
            this.sight.longitude = data;
        });
    }
    getRelatedSights() {
        if (this.sight.type !== src_app_shared_constants_sight_types__WEBPACK_IMPORTED_MODULE_3__["SightTypes"].TOURS) {
            this.loadingData = false;
            return;
        }
        this.translate
            .get(this.sight.key + '.related')
            .subscribe((data) => {
            this.data = data;
            this.relatedSights = Object.keys(this.data);
        });
        this.hasRelatedSights = true;
        this.loadingData = false;
    }
    goBack() {
        this.router.navigateByUrl(this.sight.type);
    }
    goToMap() {
        this.launchNavigator.navigate([this.sight.latitude, this.sight.longitude]);
    }
    goToRelatedSightDetails(relatedSight) {
        this.router.navigateByUrl('/details/archeology_remains' + '/' + relatedSight);
    }
    imagesNumber() {
        return Array.from({ length: this.sight.numberOfImages }, (_, i) => i + 1);
    }
};
DetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_8__["LaunchNavigator"] }
];
DetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-details',
        template: _raw_loader_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetailsPage);



/***/ }),

/***/ "TyDT":
/*!*************************************************!*\
  !*** ./src/app/pages/details/details.module.ts ***!
  \*************************************************/
/*! exports provided: createTranslateLoader, DetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-routing.module */ "GvdU");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details.page */ "T158");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");










function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, "./assets/i18n/", ".json");
}
let DetailsPageModule = class DetailsPageModule {
};
DetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _details_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsPageRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]],
                },
            }),
        ],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]]
    })
], DetailsPageModule);



/***/ }),

/***/ "jB6r":
/*!*************************************************!*\
  !*** ./src/app/pages/details/details.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWxzLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=pages-details-details-module.js.map