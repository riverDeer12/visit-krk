import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SightTypes } from 'src/app/shared/constants/sight-types';
import * as data from '../../../assets/i18n/cro.json';

@Component({
  selector: 'app-forts',
  templateUrl: './forts.page.html',
  styleUrls: ['./forts.page.scss'],
})
export class FortsPage implements OnInit {

  sights: string[];
  data: any;

  constructor(private translate: TranslateService, private router: Router) {
    this.getLanguage();
  }

  ngOnInit(): void{
    this.getForts();
  }

  getLanguage(): void {
    let currentLanguage = localStorage.getItem('language');
    this.translate.use(currentLanguage);
  }


  getForts(): void {
    this.data = data.forts;
    this.sights = Object.keys(this.data);
  }

  goToDetails(sight: string): void{
    this.router.navigateByUrl('/details/' + SightTypes.FORTS + '/' + sight);
  }

}
