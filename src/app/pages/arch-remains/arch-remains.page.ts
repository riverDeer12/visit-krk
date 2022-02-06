import { SightTypes } from '../../shared/constants/sight-types';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as data from '../../../assets/i18n/eng.json';

@Component({
  selector: 'app-arch-remains',
  templateUrl: './arch-remains.page.html',
  styleUrls: ['./arch-remains.page.scss'],
})
export class ArchRemainsPage implements OnInit {
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
    this.data = data.archeology_remains;
    this.sights = Object.keys(this.data);
  }

  goToDetails(sight: string): void {
    this.router.navigateByUrl('/details/' + SightTypes.ARCHEOLOGY_REMAINS + '/' + sight);
  }

}
