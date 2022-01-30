import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AppRate } from '@ionic-native/app-rate/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public pages = [
    {
      title: 'navigation.history',
      url: '/history',
      icon: 'assets/images/nav_icons/history.png',
    },
    {
      title: 'navigation.archeology_remains',
      url: '/archeology_remains',
      icon: 'assets/images/nav_icons/archeology_remains.png',
    },
    {
      title: 'navigation.churches',
      url: '/churches',
      icon: 'assets/images/nav_icons/churches.png',
    },
    {
      title: 'navigation.monasteries',
      url: '/cemeteries',
      icon: 'assets/images/nav_icons/monasteries.png',
    },
    {
      title: 'navigation.industrial_heritage',
      url: '/industrial_heritage',
      icon: 'assets/images/nav_icons/industrial_heritage.png',
    },
    {
      title: 'navigation.libraries',
      url: '/libraries',
      icon: 'assets/images/nav_icons/libraries.png',
    },
    {
      title: 'navigation.places',
      url: '/localities',
      icon: 'assets/images/nav_icons/places.png',
    },
    {
      title: 'navigation.museums',
      url: '/museums',
      icon: 'assets/images/nav_icons/museums.png',
    },
    {
      title: 'navigation.parks',
      url: '/parks',
      icon: 'assets/images/nav_icons/parks.png',
    },
    {
      title: 'navigation.monuments',
      url: '/monuments',
      icon: 'assets/images/nav_icons/monuments.png',
    },
    {
      title: 'navigation.forts',
      url: '/forts',
      icon: 'assets/images/nav_icons/forts.png',
    },
    {
      title: 'navigation.lookouts',
      url: '/lookouts',
      icon: 'assets/images/nav_icons/lookouts.png',
    },
    {
      title: 'navigation.tours',
      url: '/tours',
      icon: 'assets/images/nav_icons/tours.png',
    },
    {
      title: 'navigation.about',
      url: '/about',
      icon: 'assets/images/nav_icons/about.png',
    },
  ];

  lang: string;

  constructor(
    public translate: TranslateService,
    private router: Router,
    private socialSharing: SocialSharing,
    private appRate: AppRate,
    private emailComposer: EmailComposer
  ) {
    this.getLanguage();
  }

  share(): void {
    this.socialSharing
      .share('Omisalj Heritage iOS app', 'Omisalj Heritage')
      .then(() => {
        // Success!
      })
      .catch(() => {
        // Error!
      });
  }

  rate(): void {
    this.appRate.preferences.storeAppURL = {
      ios: '<omisalj-heritage>',
    }
    
    this.appRate.promptForRating(true);
  }

  sendEmail(): void {
    let email = {
      to: 'info@visit-omisalj-njivice.hr'
    }
    this.emailComposer.open(email);
  }

  getLanguage(): void {
    let currentLanguage = localStorage.getItem('language');

    if (currentLanguage == '' || currentLanguage == undefined) {
      localStorage.setItem('language', 'eng');
      this.router.navigateByUrl('');
      return;
    }
    
    this.translate.use(currentLanguage);
    
  }
}
