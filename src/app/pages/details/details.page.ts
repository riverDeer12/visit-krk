import {SightTypes} from 'src/app/shared/constants/sight-types';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {Sight} from 'src/app/shared/models/sight';
import {LaunchNavigator} from '@ionic-native/launch-navigator/ngx';

@Component({
    selector: 'app-details',
    templateUrl: './details.page.html',
    styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
    sight = new Sight();
    loadingData: boolean;
    relatedSights: Sight[] = [];

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

                Object.keys(data).forEach((sight) => {
                    const relatedSight = new Sight();
                    relatedSight.type = data[sight].type;
                    relatedSight.key = data[sight].key;
                    this.relatedSights.push(relatedSight);
                });
            });

        console.log(this.relatedSights);
        this.loadingData = false;
    }

    hasRelatedSights = () => this.relatedSights.length;

    goBack(): void {
        this.router.navigateByUrl(this.sight.type);
    }

    goToMap(): void {
        this.launchNavigator.navigate([this.sight.latitude, this.sight.longitude]);
    }

    goToRelatedSightDetails(relatedSight: Sight): void {
        this.router.navigateByUrl(
            '/details/' + relatedSight.type + '/' + relatedSight.key
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
