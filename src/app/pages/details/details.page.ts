import {SightTypes} from 'src/app/shared/constants/sight-types';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {Sight} from 'src/app/shared/models/sight';
import {LaunchNavigator} from '@ionic-native/launch-navigator/ngx';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-details',
    templateUrl: './details.page.html',
    styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
    sight = new Sight();
    loadingData: boolean;
    hasRelatedSights: boolean;
    relatedSights: string[];

    slideOpts = {
        initialSlide: 1,
        speed: 400,
    };

    data: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private translate: TranslateService,
        private launchNavigator: LaunchNavigator
    ) {
        this.loadingData = true;
        this.hasRelatedSights = false;
        this.getCurrentLanguage();
        this.getSight();
    }

    ngOnInit() {
    }

    getCurrentLanguage(): void {
        this.translate.use(localStorage.getItem('language'));
    }

    getSight(): void {
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

    getNumberOfImages(): void {
        this.translate
            .get(this.sight.key + '.numberOfImages')
            .subscribe((data: any) => {
                this.sight.numberOfImages = data;
            });
    }

    getCoordinates(): void {
        this.translate.get(this.sight.key + '.latitude').subscribe((data: any) => {
            this.sight.latitude = data;
        });

        this.translate.get(this.sight.key + '.longitude').subscribe((data: any) => {
            this.sight.longitude = data;
        });
    }

    getRelatedSights(): void {
        if (this.sight.type !== SightTypes.TOURS) {
            this.loadingData = false;
            return;
        }

        this.translate
            .get(this.sight.key + '.related')
            .subscribe((data: any) => {
                this.data = data;
                this.relatedSights = Object.keys(this.data);
            });

        this.hasRelatedSights = true;

        this.loadingData = false;
    }

    goBack(): void {
        this.router.navigateByUrl(this.sight.type);
    }

    goToMap(): void {
        this.launchNavigator.navigate([this.sight.latitude, this.sight.longitude]);
    }

    goToRelatedSightDetails(relatedSight: string): void {
        this.router.navigateByUrl(
            '/details/archeology_remains' + '/' + relatedSight
        );
    }

    imagesNumber(): Array<number> {
        return Array.from({length: this.sight.numberOfImages}, (_, i) => i + 1);
    }

    goToTourMap(): void {
        this.translate.get(this.sight.key + '.map-url').subscribe((data: any) => {
            window.location.href = data;
        });
    }
}
