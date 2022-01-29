import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Sight } from 'src/app/shared/models/sight';
let DetailsPage = class DetailsPage {
    constructor(route, router, translate) {
        this.route = route;
        this.router = router;
        this.translate = translate;
        this.sight = new Sight();
        this.slideOpts = {
            initialSlide: 1,
            speed: 400,
        };
        this.loadingData = true;
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
            this.loadingData = false;
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
    goBack() {
        this.router.navigateByUrl(this.sight.type);
    }
    goToMap() { }
    imagesNumber() {
        return Array.from({ length: this.sight.numberOfImages }, (_, i) => i + 1);
    }
};
DetailsPage = __decorate([
    Component({
        selector: 'app-details',
        templateUrl: './details.page.html',
        styleUrls: ['./details.page.scss'],
    })
], DetailsPage);
export { DetailsPage };
//# sourceMappingURL=details.page.js.map