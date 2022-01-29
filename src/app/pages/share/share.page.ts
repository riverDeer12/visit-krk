import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})
export class SharePage implements OnInit {
  constructor(private socialSharing: SocialSharing, private translate: TranslateService) {
    this.getLanguage();
    this.triggerSocialSharing();
  }

  getLanguage(): void {
    let currentLanguage = localStorage.getItem('language');
    this.translate.use(currentLanguage);
  }

  triggerSocialSharing(): void {
    this.socialSharing.share('Omišalj Cultural Heritage', '', 
    'assets/logo.png', 
    'https://itunes.apple.com/us/app/visit-krk/id1420523321?ls=1&mt=8').then(() => {
    }).catch((error) => {
      console.log(error);
    });
  }

  ngOnInit() {}
}
