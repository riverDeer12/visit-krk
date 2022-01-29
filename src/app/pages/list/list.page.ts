import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SightTypes } from 'src/app/shared/constants/sight-types';
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
    let currentLanguage = localStorage.getItem('language');
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
      case SightTypes.CHURCHES:
        this.data = data.churches;
      case SightTypes.CEMETERIES:
        this.data = data.cemeteries;
      case SightTypes.INDUSTRIAL_HERITAGE:
        this.data = data.industrial_heritage;
      case SightTypes.LIBRARIES:
        this.data = data.libraries;
      case SightTypes.LOCALITIES:
        this.data = data.localities;
      case SightTypes.MUSEUMS:
        this.data = data.museums;
      case SightTypes.PARKS:
        this.data = data.parks;
      case SightTypes.MONUMENTS:
        this.data = data.monuments;
      case SightTypes.FORTS:
        this.data = data.forts;
      case SightTypes.LOOKOUTS:
        this.data = data.lookouts;
    }

    this.sights = Object.keys(this.data);
  }
}
