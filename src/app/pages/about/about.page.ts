import {TranslateService} from '@ngx-translate/core';
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.page.html',
    styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

    constructor(private translate: TranslateService) {
        this.getLanguage();
    }

    getLanguage(): void {
        const currentLanguage = localStorage.getItem('language');
        this.translate.use(currentLanguage);
    }

    ngOnInit() {
    }

}
