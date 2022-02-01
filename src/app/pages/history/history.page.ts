import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  loadingData: boolean;

  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };

  constructor(private translate: TranslateService) {
    this.loadingData = true;
    this.getLanguage();
  }

  getLanguage(): void {
    const currentLanguage = localStorage.getItem('language');
    this.translate.use(currentLanguage);
  }

  ngOnInit() {
    this.loadingData = false;
  }
}
