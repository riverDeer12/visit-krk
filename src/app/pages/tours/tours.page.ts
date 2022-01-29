import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/i18n/cro.json';
import { SightTypes } from 'src/app/shared/constants/sight-types';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.page.html',
  styleUrls: ['./tours.page.scss'],
})
export class ToursPage implements OnInit {
  sights: string[];
  data: any;

  constructor(private translate: TranslateService, private router: Router) {
    this.getLanguage();
  }

  ngOnInit() {
    this.getTours();
  }

  getLanguage(): void {
    let currentLanguage = localStorage.getItem('language');
    this.translate.use(currentLanguage);
  }

  getTours(): void {
    this.data = data.tours;
    this.sights = Object.keys(this.data);
  }

  goToDetails(sight: string): void {
    this.router.navigateByUrl('/details/' + SightTypes.TOURS + '/' + sight);
  }
}
