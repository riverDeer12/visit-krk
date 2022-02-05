import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public pages = [
    { title: 'navigation.archeology_remains', url: '/archeology_remains', icon: 'cube' },
    { title: 'navigation.churches', url: '/churches', icon: 'cube' },
    { title: 'navigation.monasteries', url: '/monasteries', icon: 'people' },
    { title: 'navigation.places', url: '/places', icon: 'business' },
    { title: 'navigation.forts', url: '/forts', icon: 'flag' },
    { title: 'navigation.ethno', url: '/ethno', icon: 'cube' },
    { title: 'navigation.about', url: '/about', icon: 'glasses' }
  ];

  constructor() { }

  ngOnInit() {
  }

  openPage(url: string): void {
    console.log(url);
  }

}
