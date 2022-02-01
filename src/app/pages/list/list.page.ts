import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {SightTypes} from 'src/app/shared/constants/sight-types';
import * as data from '../../../assets/i18n/cro.json';

@Component({
    selector: 'app-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
    @Input() sightType: string;
    sights: string[];
    data: any;
    loadingData: boolean;


    constructor(private translate: TranslateService, private router: Router) {
        this.getLanguage();
    }

    ngOnInit(): void {
        this.getSights();
    }

    getLanguage(): void {
        const currentLanguage = localStorage.getItem('language');
        this.translate.use(currentLanguage);
    }

    getSights(): void {
        this.getData();
    }

    goToDetails(sight: string): void {
        this.router.navigateByUrl('/details/' + this.sightType + '/' + sight);
    }

    getData() {
        switch (this.sightType) {
            case SightTypes.ARCHEOLOGY_REMAINS:
                this.data = data.archeology_remains;
                break;
            case SightTypes.CHURCHES:
                this.data = data.churches;
                break;
            case SightTypes.ETHNO:
                this.data = data.ethno;
                break;
            case SightTypes.PLACES:
                this.data = data.places;
                break;
            case SightTypes.MONASTERIES:
                this.data = data.monasteries;
                break;
            case SightTypes.TOURS:
                this.data = data.tours;
                break;
            case SightTypes.FORTS:
                this.data = data.forts;
                break;
        }

        this.sights = Object.keys(this.data);
    }
}
