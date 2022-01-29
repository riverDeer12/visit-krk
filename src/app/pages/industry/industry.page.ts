import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SightTypes } from 'src/app/shared/constants/sight-types';
import * as data from '../../../assets/i18n/cro.json';

@Component({
  selector: 'app-industry',
  templateUrl: './industry.page.html',
  styleUrls: ['./industry.page.scss'],
})
export class IndustryPage implements OnInit {

  sights: string[];
  data: any;

  constructor(private translate: TranslateService, private router: Router) {
    this.getLanguage();
  }

  ngOnInit(): void{
    this.getIndustrialHeritage();
  }

  getLanguage(): void {
    let currentLanguage = localStorage.getItem('language');
    this.translate.use(currentLanguage);
  }


  getIndustrialHeritage(): void {
    this.data = data.industrial_heritage;
    this.sights = Object.keys(this.data);
  }

  goToDetails(sight: string): void{
    this.router.navigateByUrl('/details/' + SightTypes.INDUSTRIAL_HERITAGE + '/' + sight);
  }

}
