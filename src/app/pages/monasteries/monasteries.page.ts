import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SightTypes } from 'src/app/shared/constants/sight-types';
import * as data from '../../../assets/i18n/eng.json';

@Component({
  selector: 'app-monasteries',
  templateUrl: './monasteries.page.html',
  styleUrls: ['./monasteries.page.scss'],
})
export class MonasteriesPage implements OnInit {

  sights: string[];
  data: any;

  constructor(private translate: TranslateService, private router: Router) {
    this.getLanguage();
  }

  ngOnInit(): void{
    this.getMonasteries();
  }

  getLanguage(): void {
    const currentLanguage = localStorage.getItem('language');
    this.translate.use(currentLanguage);
  }


  getMonasteries(): void {
    this.data = data.monasteries;
    this.sights = Object.keys(this.data);
  }

  goToDetails(sight: string): void{
    this.router.navigateByUrl('/details/' + SightTypes.MONASTERIES + '/' + sight);
  }

}
