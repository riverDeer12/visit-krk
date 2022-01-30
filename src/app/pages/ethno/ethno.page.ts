import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';
import {SightTypes} from '../../shared/constants/sight-types';
import * as data from '../../../assets/i18n/eng.json';

@Component({
  selector: 'app-ethno',
  templateUrl: './ethno.page.html',
  styleUrls: ['./ethno.page.scss'],
})
export class EthnoPage implements OnInit {
  sights: string[];
  data: any;

  constructor(private translate: TranslateService, private router: Router) {
    this.getLanguage();
  }

  ngOnInit(): void{
    this.getEthnoCollections();
  }

  getLanguage(): void {
    const currentLanguage = localStorage.getItem('language');
    this.translate.use(currentLanguage);
  }


  getEthnoCollections(): void {
    this.data = data.ethno;
    this.sights = Object.keys(this.data);
  }

  goToDetails(sight: string): void{
    this.router.navigateByUrl('/details/' + SightTypes.ETHNO + '/' + sight);
  }


}
