import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public pages = [
    { title: 'navigation.arch_remains', url: '/arch-remains', icon: 'cube' },
    { title: 'navigation.churches', url: '/churches', icon: 'cube' },
    { title: 'navigation.cemeteries', url: '/cemeteries', icon: 'people' },
    { title: 'navigation.industry', url: '/industry', icon: 'construct' },
    { title: 'navigation.library', url: '/libraries', icon: 'library' },
    { title: 'navigation.localities', url: '/localities', icon: 'business' },
    { title: 'navigation.museums', url: '/museums', icon: 'easel' },
    { title: 'navigation.parks', url: '/parks', icon: 'leaf' },
    { title: 'navigation.monuments', url: '/monuments', icon: 'medal' },
    { title: 'navigation.forts', url: '/forts', icon: 'flag' },
    { title: 'navigation.lookouts', url: '/lookouts', icon: 'glasses' },
    { title: 'navigation.about', url: '/about', icon: 'glasses' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor() { }

  ngOnInit() {
  }

  openPage(url: string): void {
    console.log(url);
  }

}
