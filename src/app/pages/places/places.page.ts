import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SightTypes } from 'src/app/shared/constants/sight-types';
import * as data from '../../../assets/i18n/eng.json';

@Component({
  selector: 'app-localities',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  sights: string[];
  data: any;

  constructor(private translate: TranslateService, private router: Router) {
    this.getLanguage();
  }

  ngOnInit(): void{
    this.getPlaces();
  }

  getLanguage(): void {
    const currentLanguage = localStorage.getItem('language');
    this.translate.use(currentLanguage);
  }


  getPlaces(): void {
    this.data = data.places;
    this.sights = Object.keys(this.data);
  }

  goToDetails(sight: string): void{
    this.router.navigateByUrl('/details/' + SightTypes.PLACES + '/' + sight);
  }

}
