import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SightTypes } from 'src/app/shared/constants/sight-types';
import * as data from '../../../assets/i18n/cro.json';

@Component({
  selector: 'app-lookouts',
  templateUrl: './lookouts.page.html',
  styleUrls: ['./lookouts.page.scss'],
})
export class LookoutsPage implements OnInit {

  sights: string[];
  data: any;

  constructor(private translate: TranslateService, private router: Router) {
    this.getLanguage();
  }

  ngOnInit(): void{
    this.getLookouts();
  }

  getLanguage(): void {
    let currentLanguage = localStorage.getItem('language');
    this.translate.use(currentLanguage);
  }


  getLookouts(): void {
    this.data = data.lookouts;
    this.sights = Object.keys(this.data);
  }

  goToDetails(sight: string): void{
    this.router.navigateByUrl('/details/' + SightTypes.LOOKOUTS + '/' + sight);
  }
}
